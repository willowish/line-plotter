import { useEffect, useState } from 'react';

import { useCSVParser } from '@/hooks/fileParsing/csv/useCSVParser.ts';
import { LineChartData } from '@/model/charts/lineChart/LineChartData.model.ts';

export const useCsvParserWithInterval = (
	windowSize: number,
	chunkSize: number,
	timeToMove: number,
	isRunning: boolean
) => {
	const [dataToDisplay, setDataToDisplay] = useState<LineChartData>([]);
	const [startingPoint, setStartingPoint] = useState(0);
	const { csvData, handleFileUpload, pauseParser, resumeParser } = useCSVParser();

	// Initialize data display when CSV data is loaded
	useEffect(() => {
		if (csvData.length >= windowSize * 2) {
			pauseParser();
		}
		setDataToDisplay(csvData.slice(0, windowSize));
	}, [windowSize, csvData, pauseParser]);

	useEffect(() => {
		if (!isRunning) {
			return;
		}

		const interval = setInterval(() => {
			setStartingPoint((prev) => {
				if (prev + chunkSize >= csvData.length) {
					resumeParser();
					return prev;
				}
				setDataToDisplay(csvData.slice(prev, prev + windowSize));
				return prev + chunkSize;
			});
		}, timeToMove);

		return () => clearInterval(interval);
	}, [isRunning, timeToMove, csvData, windowSize, chunkSize, resumeParser]);

	const handleFileSelect = (file: File) => {
		handleFileUpload(file);
	};

	return { dataToDisplay, handleFileSelect, startingPoint, setStartingPoint };
};
