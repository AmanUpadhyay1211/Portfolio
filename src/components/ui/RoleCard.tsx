import React from 'react';
import { motion } from 'framer-motion';
import { RoleCardProps } from '../../types';

const RoleCard: React.FC<RoleCardProps> = ({ title, description, icon, type, active, onClick }) => {
  let bgColor, hoverBgColor, activeColor;

  switch (type) {
    case 'developer':
      bgColor = 'bg-primary-50 dark:bg-primary-900/30';
      hoverBgColor = 'hover:bg-primary-100 dark:hover:bg-primary-900/50';
      activeColor = 'border-primary-500 dark:border-primary-400';
      break;
    case 'blockchain':
      bgColor = 'bg-secondary-50 dark:bg-secondary-900/30';
      hoverBgColor = 'hover:bg-secondary-100 dark:hover:bg-secondary-900/50';
      activeColor = 'border-secondary-500 dark:border-secondary-400';
      break;
    case 'content':
      bgColor = 'bg-accent-50 dark:bg-accent-900/30';
      hoverBgColor = 'hover:bg-accent-100 dark:hover:bg-accent-900/50';
      activeColor = 'border-accent-500 dark:border-accent-400';
      break;
    default:
      bgColor = 'bg-gray-50 dark:bg-gray-800';
      hoverBgColor = 'hover:bg-gray-100 dark:hover:bg-gray-700';
      activeColor = 'border-gray-500 dark:border-gray-400';
  }

  return (
    <motion.div
      className={`relative cursor-pointer rounded-xl p-6 ${bgColor} ${hoverBgColor} transition-all duration-300 border-2 ${
        active ? activeColor : 'border-transparent'
      }`}
      onClick={() => onClick(type)}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {active && (
        <motion.div
          className="absolute -inset-px rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layoutId="activeCard"
        />
      )}
      <div className="relative z-10">
        <div className="w-12 h-12 mb-4 text-primary-600 dark:text-primary-400">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <div
        className={`absolute bottom-0 left-0 h-1 ${
          type === 'developer'
            ? 'bg-primary-500'
            : type === 'blockchain'
            ? 'bg-secondary-500'
            : 'bg-accent-500'
        } transition-all duration-300 ${active ? 'w-full' : 'w-0'}`}
      />
      {active && (
        <motion.div
          className={`absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45 ${
            type === 'developer'
              ? 'bg-primary-500'
              : type === 'blockchain'
              ? 'bg-secondary-500'
              : 'bg-accent-500'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
};

export default RoleCard;