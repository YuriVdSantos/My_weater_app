'use client';

import { useState } from 'react';
import PrivateRoute from '../components/PrivateRoute'; // Ajuste o caminho se necessário

const SettingsPage = () => {
  // Tipos de estado
  const [temperatureUnit, setTemperatureUnit] = useState<'Celsius' | 'Fahrenheit'>('Celsius');
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);

  // Manipuladores de eventos
  const handleTemperatureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTemperatureUnit(e.target.value as 'Celsius' | 'Fahrenheit');
  };

  const handleNotificationsChange = () => {
    setNotificationsEnabled(prevState => !prevState);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 dark:text-white">
          Configurações
        </h1>
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm sm:text-base">
            Unidade de Temperatura
          </label>
          <select
            value={temperatureUnit}
            onChange={handleTemperatureChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white dark:border-gray-700"
          >
            <option value="Celsius">Celsius</option>
            <option value="Fahrenheit">Fahrenheit</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="inline-flex items-center text-sm sm:text-base">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={handleNotificationsChange}
              className="form-checkbox text-blue-500 dark:bg-gray-900 dark:border-gray-700"
            />
            <span className="ml-2 text-gray-700 dark:text-gray-300">
              Ativar Notificações de Alertas Meteorológicos
            </span>
          </label>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
          Salvar Configurações
        </button>
      </div>
    </div>
  );
};

export default function Settings() {
  return (
    <PrivateRoute>
      <SettingsPage />
    </PrivateRoute>
  );
}
