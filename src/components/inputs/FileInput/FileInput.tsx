import { ChangeEvent, ReactElement, useId, useRef, useState } from 'react';

type Props = {
	acceptedFileType: string;
	handleFileSelect: (file: File) => void;
};

export const FileInput = ({ acceptedFileType, handleFileSelect }: Props): ReactElement => {
	const id = useId();
	const [fileName, setFileName] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) {
			return;
		}

		if (acceptedFileType.split(',').includes(file.type)) {
			setFileName(file.name);
			setError(null);
			handleFileSelect(file);
		} else {
			setFileName(null);
			setError(`Invalid file type selected. Only ${acceptedFileType} files are allowed.`);
			if (fileInputRef.current) {
				fileInputRef.current.value = '';
			}
		}
	};

	return (
		<div className='flex flex-col gap-2'>
			<label className='text-md block font-bold text-gray-700'
				htmlFor={id}>
				Select File
			</label>
			<input
				id={id}
				type='file'
				accept={acceptedFileType}
				onChange={onFileChange}
				ref={fileInputRef}
				className='hidden'
			/>
			<label
				htmlFor={id}
				className='border border-gray-300 p-2 rounded-md cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
			>
				Choose File
			</label>
			{fileName && <p className='text-green-600'>Selected file: {fileName}</p>}
			{error && <p className='text-red-600'>{error}</p>}
		</div>
	);
};
