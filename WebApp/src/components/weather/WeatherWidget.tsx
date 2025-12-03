import React, { useState, useEffect } from 'react';
import { Cloud, CloudRain, CloudSnow, Sun } from 'lucide-react';

interface WeatherWidgetProps {
  location: string;
}

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    feels_like: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ location }: WeatherWidgetProps) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState<string>(location);

  const API_KEY = '5078fa80b4312225bca0d2f15260246f'; // Change to free tier API key from Open Weather

  const fetchWeather = async (cityName: string): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('City not found');
      }
      
      const data: WeatherData = await response.json();
      setWeather(data);
      setCity(cityName);

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const getWeatherIcon = (weatherMain?: string) => {
    switch (weatherMain?.toLowerCase()) {
      case 'clear':
        return <Sun className="w-16 h-16 text-yellow-400" />;
      case 'rain':
      case 'drizzle':
        return <CloudRain className="w-16 h-16 text-blue-400" />;
      case 'snow':
        return <CloudSnow className="w-16 h-16 text-white" />;
      case 'clouds':
        return <Cloud className="w-16 h-16 text-white" />;
      default:
        return <Cloud className="w-16 h-16 text-white" />;
    }
  };

  const getBackgroundGradient = (weatherMain?: string): string => {
    switch (weatherMain?.toLowerCase()) {
      case 'clear':
        return 'from-blue-400 to-blue-600';
      case 'rain':
      case 'drizzle':
        return 'from-gray-600 to-gray-800';
      case 'snow':
        return 'from-blue-200 to-blue-400';
      case 'clouds':
        return 'from-gray-600 to-gray-500';
      default:
        return 'from-blue-500 to-blue-700';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-600">
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
        </div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="flex items-center justify-center min-h-full bg-gradient-to-br from-red-400 to-red-600">
        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl text-white text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p className="mb-6">{error}</p>
          <button
            onClick={() => fetchWeather('New York')}
            className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
      <div className={`bg-opacity-20 backdrop-blur-lg justify-center items-center h-full ${getBackgroundGradient(weather?.weather[0]?.main)}`}>

        {/* Main Weather Display */}
        <div className="flex flex-row text-center justify-center items-center text-black/60 mb-8">
        <div className='flex flex-col mt-6 mx-8 items-center'>
            <div className="flex">
              {getWeatherIcon(weather.weather[0]?.main)}
            </div>
            <p className="text-xl capitalize opacity-90">
              {weather.weather[0]?.description}
            </p>
          </div>

          <div className='flex flex-col mt-6'>
            <div className="text-4xl font-bold">
              {Math.round(weather.main.temp)}°C
            </div>
            <p className="text-md opacity-80">
              Feels like {Math.round(weather.main.feels_like)}°C
            </p>
          </div>
        </div>
      </div>
  );
};

export default WeatherWidget;
