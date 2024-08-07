import { ReactElement, useId } from 'react';

type Props = {
	value: number;
	onChange: (value: number) => void;
	label: string;
	defaultValue?: number;
	min?: number;
	max?: number;
	step?: number;
};
export const NumericInput = ({ max, min, onChange, step, value, label, defaultValue }: Props): ReactElement => {
	const id = useId();
	return (
		<div className='flex flex-col gap-2'>
			<label
				className='text-md block font-bold text-gray-700'
				htmlFor={id}
			>
				{label}
			</label>
			<input
				className={'border-grey-200 w-full rounded-sm border-2 p-2 focus:outline-indigo-300'}
				type='number'
				id={id}
				value={value}
				onChange={(e) => onChange(parseInt(e.target.value))}
				min={min}
				max={max}
				step={step}
				defaultValue={defaultValue}
			/>
		</div>
	);
};
