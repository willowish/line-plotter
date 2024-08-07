import { ReactElement, useState } from 'react';

import { Button } from '@/components/buttons/Button/Button.tsx';
import { LineChart } from '@/components/charts/LineChart/LineChart.tsx';
import { FileInput } from '@/components/inputs/FileInput/FileInput.tsx';
import { NumericInput } from '@/components/inputs/NumericInput/NumericInput.tsx';
import { useCsvParserWithInterval } from '@/pages/CSVReaderWithLineGraph/hooks/useIntervalUpdate.ts';

export const CsvReaderWithLineGraph = (): ReactElement => {
	const [windowSize, setWindowSize] = useState(500);
	const [timeToMove, setTimeToMove] = useState(16);
	const [chunkSize, setChunkSize] = useState(1);
	const [isRunning, setIsRunning] = useState(false);

	const { dataToDisplay, handleFileSelect, startingPoint, setStartingPoint } = useCsvParserWithInterval(
		windowSize,
		chunkSize,
		timeToMove,
		isRunning,
	);

	const toggleInterval = () => {
		setIsRunning((prev) => !prev);
	};

	return (
		<div className={'flex flex-col gap-2 max-w-6xl m-auto mt-16'}>
			<div className='grid md:grid-cols-6 w-full max-w-1280 px-4 gap-2 justify-center align-middle items-end'>
				<FileInput
					acceptedFileType={'text/csv'}
					handleFileSelect={handleFileSelect}
				/>
				<NumericInput
					label={'Window Size (N)'}
					value={windowSize}
					onChange={setWindowSize}
					max={Infinity}
					min={10}
					step={1}
				/>
				<NumericInput
					label={'Data Point (S)'}
					value={startingPoint}
					onChange={setStartingPoint}
					max={Infinity}
					min={0}
					step={1}
				/>
				<NumericInput
					label={'Auto Update Time (T)'}
					value={timeToMove}
					onChange={setTimeToMove}
					max={Infinity}
					min={16}
					step={1}
				/>
				<NumericInput
					label={'Data Point Move (P)'}
					value={chunkSize}
					onChange={setChunkSize}
					max={Infinity}
					min={1}
					step={1}
				/>
				<Button
					text={isRunning ? 'Stop' : 'Start'}
					onClick={toggleInterval}
				/>
			</div>
			<div>
				<LineChart
					data={dataToDisplay}
					width={windowSize}
				/>
			</div>
		</div>
	);
};
