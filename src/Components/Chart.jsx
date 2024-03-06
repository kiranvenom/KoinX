import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
	const data = {
		labels: ['foundation', 'crowsale investor'],
		datasets: [
			{
				label: 'inversots',
				data: [2, 8],
				backgroundColor: ['blue', 'orange'],
			},
		],
	};

	const options = {};
	return (
		<div className='lg:w-[30%]'>
			<Doughnut data={data} options={options}></Doughnut>
		</div>
	);
};

export default Chart;
