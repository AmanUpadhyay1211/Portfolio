import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { usePortfolio } from '../../context/PortfolioContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { activeRole, setActiveRole } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              <img src="/src/images/logo.png" alt="Logo" className="h-20" />
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/about'
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              About Me
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.button
              onClick={() => setActiveRole('developer')}
              className={`text-sm font-medium transition-colors ${
                activeRole === 'developer'
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Developer
            </motion.button>
            <motion.button
              onClick={() => setActiveRole('blockchain')}
              className={`text-sm font-medium transition-colors ${
                activeRole === 'blockchain'
                  ? 'text-secondary-600 dark:text-secondary-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Blockchain
            </motion.button>
            <motion.button
              onClick={() => setActiveRole('content')}
              className={`text-sm font-medium transition-colors ${
                activeRole === 'content'
                  ? 'text-accent-600 dark:text-accent-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Content
            </motion.button>
            <motion.button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-gray-700" />
              ) : (
                <Sun size={20} className="text-yellow-300" />
              )}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-700 dark:text-gray-200" />
              ) : (
                <Menu size={24} className="text-gray-700 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-gray-900 p-4 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            <Link
              to="/about"
              className={`py-2 px-4 rounded-lg ${
                location.pathname === '/about'
                  ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </Link>
            <button
              onClick={() => {
                setActiveRole('developer');
                setIsMenuOpen(false);
              }}
              className={`py-2 px-4 rounded-lg ${
                activeRole === 'developer'
                  ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Developer
            </button>
            <button
              onClick={() => {
                setActiveRole('blockchain');
                setIsMenuOpen(false);
              }}
              className={`py-2 px-4 rounded-lg ${
                activeRole === 'blockchain'
                  ? 'bg-secondary-50 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Blockchain
            </button>
            <button
              onClick={() => {
                setActiveRole('content');
                setIsMenuOpen(false);
              }}
              className={`py-2 px-4 rounded-lg ${
                activeRole === 'content'
                  ? 'bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Content
            </button>
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-3 py-2 px-4 rounded-lg"
            >
              <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
              {theme === 'light' ? (
                <Moon size={18} className="text-gray-700" />
              ) : (
                <Sun size={18} className="text-yellow-300" />
              )}
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;