import React, { useState, useEffect } from 'react';
import { fetchMatches } from './services/api';
import { Match } from './types';
import Header from './components/Header';
import MatchList from './components/MatchList';
import Footer from './components/Footer';
import { AlertCircle } from 'lucide-react';

function App() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMatches = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchMatches();
        
        // Sort matches by date (upcoming first)
        const sortedMatches = data.sort((a, b) => 
          new Date(a.matchDateTime).getTime() - new Date(b.matchDateTime).getTime()
        );
        
        setMatches(sortedMatches);
      } catch (err) {
        setError('Failed to load matches. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getMatches();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Matches</h2>
        
        {error ? (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div className="flex items-center">
              <AlertCircle size={24} className="text-red-500 mr-3" />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        ) : (
          <MatchList matches={matches} isLoading={isLoading} />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;