import React from 'react';

import ReactDOM from 'react-dom/client';

import { CsvReaderWithLineGraph } from '@/pages/CSVReaderWithLineGraph/CSVReaderWithLineGraph.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CsvReaderWithLineGraph />
	</React.StrictMode>,
);
