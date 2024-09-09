// app/components/WeatherChart.tsx
"use client";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, ChartOptions } from 'chart.js';

// Registre os componentes necessários do ChartJS
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

// Defina uma interface para os dados do gráfico
interface WeatherChartData {
  labels: string[];
  values: number[];
}

// Defina a interface para as propriedades do componente
interface WeatherChartProps {
  data: WeatherChartData;
  options?: ChartOptions<'line'>;
}

// Componente WeatherChart
const WeatherChart = ({ data, options }: WeatherChartProps) => {
  // Prepare os dados para o gráfico
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

  // Retorne o componente Line do ChartJS com os dados e opções
  return <Line data={chartData} options={options} />;
};

export default WeatherChart;
