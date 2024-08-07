import { ReactElement, useMemo } from 'react';

import {XYPlot, XAxis, YAxis, LineSeries} from 'react-vis';

import { LineChartData, LineChartRow } from '@/model/charts/lineChart/LineChartData.model.ts';

import 'react-vis/dist/style.css';

type Props = {
	data: LineChartData;
	width: number;
};

export const LineChart = ({ data, width }: Props): ReactElement => {
	const yMin = useMemo(() => Math.min(...data.map((d) => d[1])), [data]);
	const yMax = useMemo(() => Math.max(...data.map((d) => d[1])), [data]);
	const xMin = useMemo(() => Math.min(...data.map((d) => d[0])), [data]);
	const xMax = useMemo(() => Math.max(...data.map((d) => d[0])), [data]);

	return (
		<XYPlot
			animation
			getX={(d: LineChartRow) => d[0]}
			getY={(d: LineChartRow) => d[1]}
			yDomain={[yMin, yMax]}
			xDomain={[xMin, xMax]}
			width={width}
			height={600}
		>
			<LineSeries data={data} />
			<YAxis />
			<XAxis left={40} />
		</XYPlot>
	);
};
