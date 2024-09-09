'use client';

import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';

// Defina interfaces para os dados que você espera da API
interface Weather {
  description: string;
}

interface Main {
  temp: number;
}

interface WeatherData {
  name: string;
  weather: Weather[];
  main: Main;
}

const HomePage = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    const apiKey = '69125c609e5cab6c35bacd52b0ceb95b'; // Substitua com sua API key do OpenWeatherMap
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        throw new Error('Cidade não encontrada');
      }
      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (err) {
      // Defina o tipo do erro como Error para garantir que a mensagem seja acessível
      setError((err as Error).message);
      setWeatherData(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-700">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center dark:text-white">
          Previsão do Tempo
        </h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="text"
            placeholder="Digite a cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Buscar
          </button>
        </form>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {weatherData && (
          <div className="text-center dark:text-white">
            <h2 className="text-2xl font-semibold mb-2">{weatherData.name}</h2>
            <p className="capitalize mb-2">{weatherData.weather[0].description}</p>
            <p className="text-lg font-semibold">{weatherData.main.temp}°C</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <PrivateRoute>
      <HomePage />
    </PrivateRoute>
  );
}
