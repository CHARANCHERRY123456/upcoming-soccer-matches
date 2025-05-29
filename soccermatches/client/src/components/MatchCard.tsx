import React from 'react';
import { Match } from '../types';
import { Calendar, Clock } from 'lucide-react';

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const matchDate = new Date(match.matchDateTime);
  
  const formattedDate = matchDate.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric', 
    month: 'short', 
    day: 'numeric'
  });
  
  const formattedTime = matchDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
  
  const daysUntilMatch = () => {
    const today = new Date();
    const diffTime = matchDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `In ${diffDays} days`;
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg transform hover:-translate-y-1 duration-300">
      <div className="bg-gradient-to-r from-green-600 to-green-700 p-2 text-white text-sm font-medium">
        {match.group.groupName} - {daysUntilMatch()}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Calendar size={16} className="text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">{formattedTime}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center flex-1">
            <div className="w-16 h-16 flex items-center justify-center">
              {match.team1.teamIconUrl ? (
                <img 
                  src={match.team1.teamIconUrl} 
                  alt={match.team1.teamName} 
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold">
                  {match.team1.shortName?.substring(0, 2) || match.team1.teamName.substring(0, 2)}
                </div>
              )}
            </div>
            <h3 className="mt-2 text-center font-semibold">{match.team1.teamName}</h3>
          </div>
          
          <div className="mx-4 text-center">
            <div className="text-xl font-bold text-gray-400">VS</div>
          </div>
          
          <div className="flex flex-col items-center flex-1">
            <div className="w-16 h-16 flex items-center justify-center">
              {match.team2.teamIconUrl ? (
                <img 
                  src={match.team2.teamIconUrl} 
                  alt={match.team2.teamName} 
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold">
                  {match.team2.shortName?.substring(0, 2) || match.team2.teamName.substring(0, 2)}
                </div>
              )}
            </div>
            <h3 className="mt-2 text-center font-semibold">{match.team2.teamName}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;