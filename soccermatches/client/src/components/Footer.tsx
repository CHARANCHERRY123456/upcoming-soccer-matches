import { Info } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              Data provided by OpenLiga DB API
            </p>
          </div>
          
          <div className="flex items-center text-sm text-gray-400">
            <Info size={16} className="mr-1" />
            <p>Updated daily with the latest match information</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;