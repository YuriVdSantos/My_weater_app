"use client"

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

const WeatherChart = ({ data }: { data: { labels: string[]; values: number[] } }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Temperatura',
        data: data.values,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default WeatherChart;
