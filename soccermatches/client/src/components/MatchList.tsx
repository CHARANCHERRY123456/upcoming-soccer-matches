import React, { useState } from 'react';
import { Match } from '../types';
import MatchCard from './MatchCard';
import { Search } from 'lucide-react';

interface MatchListProps {
  matches: Match[];
  isLoading: boolean;
}

const MatchSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="bg-gray-300 h-8 w-full"></div>
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <div className="h-4 bg-gray-300 w-24 rounded"></div>
        <div className="h-4 bg-gray-300 w-24 rounded"></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center flex-1">
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          <div className="mt-2 h-4 bg-gray-300 w-20 rounded"></div>
        </div>
        <div className="mx-4">
          <div className="h-6 bg-gray-300 w-8 rounded"></div>
        </div>
        <div className="flex flex-col items-center flex-1">
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          <div className="mt-2 h-4 bg-gray-300 w-20 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const MatchList: React.FC<MatchListProps> = ({ matches, isLoading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMatches = matches.filter(match => {
    const searchLower = searchTerm.toLowerCase();
    return (
      match.team1.teamName.toLowerCase().includes(searchLower) ||
      match.team2.teamName.toLowerCase().includes(searchLower)
    );
  });
  
  return (
    <div>
      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search by team name"
          className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          // Show skeletons while loading
          Array.from({ length: 6 }).map((_, index) => (
            <MatchSkeleton key={index} />
          ))
        ) : filteredMatches.length > 0 ? (
          // Show matches
          filteredMatches.map(match => (
            <MatchCard key={match.matchID} match={match} />
          ))
        ) : (
          // Show no matches message
          <div className="col-span-full text-center py-10">
            <p className="text-lg text-gray-600">No matches found. Try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchList;