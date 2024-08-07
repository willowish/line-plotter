import { MouseEventHandler, ReactElement } from 'react';

type Props = {
	text: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
	className?: string;
};

export const Button = ({ text, onClick, className = '' }: Props): ReactElement => {
	return (
		<button
			onClick={onClick}
			className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 h-[44px] ${className} `}
		>
			{text}
		</button>
	);
};
