import { useState, useEffect } from 'react';
import { Newspaper } from 'lucide-react';

const NYTimesWidget = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const section = 'home';
  const [index, setIndex] = useState(0); // current 3 articles to be shown
  const [fade, setFade] = useState(true);

  const API_KEY = 'uRkKDxfRsIqju3kNduTQlA4TOb6mLKFj'; // Demo key - replace with your own

  const fetchNews = async (selectedSection) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/${selectedSection}.json?api-key=${API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      
      const data = await response.json();
      setArticles(data.results.slice(0, 10));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(section);
  }, [section]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % Math.ceil(articles.length));
        setFade(true);
      }, 300);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, [articles]);

  const handleRefresh = () => {
    fetchNews(section);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center bg-gradient-to-br from-red-900 to-red-800">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl text-white text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p className="mb-6">{error}</p>
          <button
            onClick={handleRefresh}
            className="bg-white text-red-900 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const start = index;
  const visibleArticles = articles.slice(start, start + 1);


  return (
    <div className="flex flex-row max-h-full max-w-full justify-start opaque-0 rounded-xl overflow-auto mt-2">
      <div className="flex flex-row w-full mx-auto justify-start gap-4">
        {/* Header */}
        <div className=" flex rounded-xl sticky items-center justify-end">
          <div className="flex items-end justify-end">
            <div className="flex items-end">
              <Newspaper className="w-16 h-16 text-black ml-4 gap-30" />
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className={`w-full space-y-2 flex flex-row font-serif overflow-auto transition-all duration-500 transform ${fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
        {visibleArticles.map((article, index) => (
            <div
              key={index}
              className="w-full backdrop-blur-lg rounded-2xl p-2 hover:bg-purple-200 transition cursor-pointer min-w-screen"
            >
              <div className="flex gap-4 justify-center">
                {/* Article Content */}
                <div className="w-full mt-2">
                  
                  {/* Title */}
                  <h2 className="text-md font-bold text-black mb-2">
                    {article.title}
                  </h2>

                  {/* Abstract */}
                  <p className="text-gray-800 text-sm mb-3 line-clamp-2">
                    {article.abstract}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NYTimesWidget;