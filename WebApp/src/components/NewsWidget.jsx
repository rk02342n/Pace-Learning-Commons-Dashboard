import { useState, useEffect } from 'react';
import { Newspaper, RefreshCw } from 'lucide-react';

const NYTimesWidget = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const section = 'home';

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

  const handleRefresh = () => {
    fetchNews(section);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-full bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-full bg-gradient-to-br from-red-900 to-red-800">
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

  return (
    <div className="max-h-full max-w-full opaque-0 p-6 rounded-xl overflow-auto">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className=" rounded-xl mb-2 sticky">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Newspaper className="w-8 h-4 text-black ml-4" />
              <h1 className=" animate-pulse text-xl font-bold font-serif text-black p-3">News</h1>
            </div>
            <button
              onClick={handleRefresh}
              className="bg-white text-black p-2 mr-2 rounded-full hover:bg-slate-200 transition"
            >
              <RefreshCw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="space-y-2 font-serif overflow-auto">
          {articles.slice(0,6).map((article, index) => (
            <div
              key={index}
              className=" backdrop-blur-lg rounded-2xl p-2 hover:bg-purple-200 transition cursor-pointer"
            >
              <div className="flex gap-4">
                {/* Article Image */}
                {article.multimedia && article.multimedia[0] && (
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-gray-700">
                    <img
                      src={article.multimedia[0].url}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Article Content */}
                <div className="flex-1 min-w-0">
                  
                  {/* Title */}
                  <h2 className="text-md font-bold text-black mb-2 line-clamp-2">
                    {article.title}
                  </h2>

                  {/* Abstract */}
                  {/* <p className="text-gray-800 text-sm mb-3 line-clamp-2">
                    {article.abstract}
                  </p> */}

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Powered by The New York Times API</p>
        </div>
      </div>
    </div>
  );
};

export default NYTimesWidget;