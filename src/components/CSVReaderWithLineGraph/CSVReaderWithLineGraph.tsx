import { ReactElement, useState } from 'react';

import { FileInput } from '@/components/inputs/FileInput/FileInput.tsx';
import { NumericInput } from '@/components/inputs/NumericInput/NumericInput.tsx';


export const CsvReaderWithLineGraph = (): ReactElement => {
	const [windowSize, setWindowSize] = useState(500);
	const [startingPoint, setStartingPoint] = useState(0);
	// const [dataToDisplay, setDataToDisplay] = useState<number[][]>([]);
	const [timeToMove, setTimeToMove] = useState(16);
	const [chunkSize, setChunkSize] = useState(1);

	return (
		<div className={'flex gap-2 max-w-6xl m-auto mt-16'}>
			<div className='flex w-full max-w-1280 px-4 gap-4'>
				<FileInput
					acceptedFileType={'text/csv'}
					handleFileSelect={() => {
					}}
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

				<NumericInput label={'Auto Update Time (T)'}
					value={timeToMove}
					onChange={setTimeToMove}
					max={Infinity}
					min={16}
					step={1}
				/>
				<NumericInput label={'Data Point Move (P)'}
					value={chunkSize}
					onChange={setChunkSize}
					max={Infinity}
					min={16}
					step={1}
				/>

			</div>
		</div>
	);
};
