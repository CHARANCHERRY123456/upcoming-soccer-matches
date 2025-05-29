import { Tally1 as Ball } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-700 to-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Ball size={32} className="mr-3" />
          <h1 className="text-2xl md:text-3xl font-bold">BundesMatch</h1>
        </div>
        <div className="text-sm md:text-base">
          Bundesliga Match Schedule
        </div>
      </div>
    </header>
  );
};

export default Header;