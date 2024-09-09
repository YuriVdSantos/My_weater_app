'use client';

import { useRouter } from 'next/navigation'; // Atualize para usar `next/navigation` para navegação
import { useEffect, useState } from 'react';
import PrivateRoute from '../../components/PrivateRoute'; // Ajuste o caminho se necessário

// Defina uma interface para os dados da previsão
interface ForecastItem {
  dt_txt: string;
  main: { temp: number };
  weather: Array<{ description: string }>;
}

interface ForecastData {
  list: ForecastItem[];
}

const ForecastPage = () => {
  const router = useRouter();
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Access cityName from URL query params
  const cityName = router.query.cityName as string;

  const API_KEY = '69125c609e5cab6c35bacd52b0ceb95b'; // Insira sua chave da API do OpenWeatherMap

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

  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600 dark:text-white">
        Previsão para {cityName}
      </h1>
      {loading && <p className="text-center">Carregando...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {forecastData && (
        <div>
          {forecastData.list.map((item, index) => (
            <div key={index} className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded">
              <p>Data: {item.dt_txt}</p>
              <p>Temperatura: {item.main.temp} °C</p>
              <p>Condição: {item.weather[0].description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Forecast() {
  return (
    <PrivateRoute>
      <ForecastPage />
    </PrivateRoute>
  );
}
