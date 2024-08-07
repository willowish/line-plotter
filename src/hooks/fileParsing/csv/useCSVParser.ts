import { useCallback, useRef, useState } from 'react';

import { parse, Parser } from 'papaparse';

interface UseCsvParserResult {
	csvData: [number, number][];
	handleFileUpload: (file: File) => void;
	pauseParser: () => void;
	resumeParser: () => void;
}

export const useCSVParser = (): UseCsvParserResult => {
	const [csvData, setCsvData] = useState<[number, number][]>([]);
	const [isPaused, setIsPaused] = useState<boolean>(false);

	const parserRef = useRef<Parser | null>(null);

	const handleFileUpload = useCallback((file: File) => {
		if (!file) {
			return;
		}

		parse<[number, number], File>(file, {
			chunk: (results, parser: Parser) => {
				if (!parserRef.current) {
					parserRef.current = parser;
				}
				if (results?.errors?.length > 0) {
					// todo: handle errors
					return;
				}
				if (isNaN(Number(results.data[0][0]))) {
					setCsvData(results.data.slice(1));
					return;
				}
				setCsvData(results.data);
				if (isPaused) {
					parser.pause();
				}
			},
			complete: () => {
				parserRef.current?.abort();
			},
		});
	}, [isPaused]);


	const pauseParser = useCallback(() => {
		setIsPaused(true);
		parserRef.current?.pause();
	}, []);

	const resumeParser = useCallback(() => {
		setIsPaused(false);
		parserRef.current?.resume();
	}, []);


	return { handleFileUpload, csvData, pauseParser, resumeParser };
};
