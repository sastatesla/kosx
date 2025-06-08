
import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <img src="/assets/KoshX.jpg" alt="KOSX Logo" className="h-10 w-10 rounded-lg" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r text-white">
              KOSX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#integrations" className="text-gray-300 hover:text-white transition-colors">Integrations</a>
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
            <Link to="/docs" className="text-gray-300 hover:text-white transition-colors">Docs</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">Sign In</Button> */}
            <Link to={'/docs'}>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Get Started
            </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#integrations" className="text-gray-300 hover:text-white transition-colors">Integrations</a>
              <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
              <a href="#docs" className="text-gray-300 hover:text-white transition-colors">Docs</a>
              <div className="flex flex-col space-y-2 pt-4">
                {/* <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">Sign In</Button> */}
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
