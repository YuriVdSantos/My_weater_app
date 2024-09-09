'use client';

import { useState } from 'react';
//import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PrivateRoute from '../components/PrivateRoute';

// Defina a interface para os dados
interface WeatherData {
  weather: Array<{ icon: string; description: string }>;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  wind: { speed: number };
}

const DashboardPage = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '69125c609e5cab6c35bacd52b0ceb95b';

  const fetchWeather = async () => {
    setLoading(true);
    setError('');

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) {
        throw new Error('Cidade não encontrada');
      }

      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city) {
      fetchWeather();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8 max-w-lg w-full">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-gray-100">
          Previsão do Tempo
        </h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Digite o nome da cidade"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Buscar Previsão
          </button>
        </form>

        {loading ? (
          <p className="text-center text-gray-900 dark:text-gray-100">Carregando...</p>
        ) : weatherData ? (
          <div className="text-gray-900 dark:text-gray-100">
            <h2 className="text-lg font-semibold mb-4">Previsão do tempo para {city}</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <Image
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="Ícone do clima"
                width={80}
                height={80}
              />
              <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold">{weatherData.main.temp}°C</p>
                <p className="text-sm capitalize">{weatherData.weather[0].description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
                <p className="text-sm">Temperatura mínima:</p>
                <p className="text-xl font-semibold">{weatherData.main.temp_min}°C</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
                <p className="text-sm">Temperatura máxima:</p>
                <p className="text-xl font-semibold">{weatherData.main.temp_max}°C</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
                <p className="text-sm">Umidade:</p>
                <p className="text-xl font-semibold">{weatherData.main.humidity}%</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
                <p className="text-sm">Velocidade do vento:</p>
                <p className="text-xl font-semibold">{weatherData.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-900 dark:text-gray-100">
            Digite uma cidade para ver a previsão do tempo.
          </p>
        )}

        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default function Dashboard() {
  return (
    <PrivateRoute>
      <DashboardPage />
    </PrivateRoute>
  );
}
