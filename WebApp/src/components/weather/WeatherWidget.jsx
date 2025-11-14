import { useState, useEffect } from 'react';
import { Cloud, CloudRain, CloudSnow, Sun } from 'lucide-react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('new york');

  const API_KEY = 'bd5e378503939ddaee76f12ad7a97608'; // Change to free tier API key from Open Weather

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('City not found');
      }
      
      const data = await response.json();
      setWeather(data);
      setCity(cityName);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const getWeatherIcon = (weatherMain) => {
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

  const getBackgroundGradient = (weatherMain) => {
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

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-400 to-red-600">
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
      <div className={`bg-opacity-20 backdrop-blur-lg p-8 h-full shadow-2xl rounded xl bg-gradient-to-br ${getBackgroundGradient(weather?.weather[0]?.main)}`}>

        {/* Main Weather Display */}
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold mb-2">{weather.name}</h1>
          <p className="text-lg opacity-80">{weather.sys.country}</p>
          
          <div className="flex justify-center my-6">
            {getWeatherIcon(weather.weather[0]?.main)}
          </div>
          
          <div className="text-6xl font-bold mb-2">
            {Math.round(weather.main.temp)}°C
          </div>
          
          <p className="text-2xl capitalize opacity-90">
            {weather.weather[0]?.description}
          </p>
          
          <p className="text-lg opacity-80 mt-2">
            Feels like {Math.round(weather.main.feels_like)}°C
          </p>
        </div>
      </div>
  );
};

export default WeatherWidget;
