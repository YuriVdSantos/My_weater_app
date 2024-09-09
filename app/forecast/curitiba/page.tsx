// app/forecast/[cityName]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { usePathname } from 'next/navigation';

// Registro do Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const ForecastPage = () => {
  const pathname = usePathname(); // Obtenha o pathname atual
  const cityName = pathname?.split('/')[2]; // Extraia o cityName da URL

  const [forecastData, setForecastData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '69125c609e5cab6c35bacd52b0ceb95b'; // Substitua com sua chave da API do OpenWeatherMap

  useEffect(() => {
    if (cityName) {
      const fetchForecast = async () => {
        setLoading(true);
        setError('');

        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
          );
          if (!res.ok) {
            throw new Error('Cidade não encontrada');
          }

          const data = await res.json();
          setForecastData(data);
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setLoading(false);
        }
      };

      fetchForecast();
    }
  }, [cityName]);

  // Prepare os dados para o gráfico
  const getChartData = () => {
    if (!forecastData) return { labels: [], datasets: [] };

    const labels = forecastData.list.map((item: any) => item.dt_txt);
    const values = forecastData.list.map((item: any) => item.main.temp);

    return {
      labels,
      datasets: [
        {
          label: 'Temperatura ao longo do tempo',
          data: values,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 1,
          pointRadius: 5, // Adicione a propriedade pointRadius para definir o tamanho dos pontos
        },
      ],
    };
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Previsão para {cityName}
        </h1>
        {loading && <p className="text-center text-gray-600 dark:text-gray-400">Carregando...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {forecastData && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 md:p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Previsão para os próximos 5 dias:</h2>
              {forecastData.list.map((item: any, index: number) => (
                <div key={index} className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                  <p className="text-gray-800 dark:text-white">Data: {item.dt_txt}</p>
                  <p className="text-gray-800 dark:text-white">Temperatura: {item.main.temp} °C</p>
                  <p className="text-gray-800 dark:text-white">Condição: {item.weather[0].description}</p>
                </div>
              ))}
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 md:p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Gráfico de Temperatura</h2>
              <div className="w-full h-80">
                <Line data={getChartData()} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForecastPage;
