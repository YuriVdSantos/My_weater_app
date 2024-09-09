'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // Importa useSearchParams da next/navigation
import PrivateRoute from '../../components/PrivateRoute'; // Ajuste o caminho se necessário

const ForecastPage = () => {
  const searchParams = useSearchParams(); // Usa useSearchParams para acessar os parâmetros de consulta
  const cityName = searchParams.get('cityName') as string;
  const [forecastData, setForecastData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Previsão para {cityName}</h1>
      {loading && <p>Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {forecastData && (
        <div>
          {forecastData.list.map((item: any, index: number) => (
            <div key={index} className="mt-4 p-4 bg-gray-100 rounded">
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
