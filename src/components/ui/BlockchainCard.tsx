import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BlockchainProject } from '../../types';
import CodeSnippet from './CodeSnippet';
import { Activity } from 'lucide-react';

interface BlockchainCardProps {
  project: BlockchainProject;
  index: number;
}

const BlockchainCard: React.FC<BlockchainCardProps> = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium px-2 py-1 bg-secondary-500/80 text-white rounded-full">
              {project.network}
            </span>
            {project.transactionCount && (
              <span className="text-sm flex items-center text-white">
                <Activity size={14} className="mr-1" /> 
                {project.transactionCount.toLocaleString()} txns
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        {project.contractAddress && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Contract Address
            </label>
            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded overflow-x-auto">
              <code className="text-xs text-gray-800 dark:text-gray-200 font-mono">
                {project.contractAddress}
              </code>
            </div>
          </div>
        )}
        
        <CodeSnippet snippet={project.codeSnippet} />
      </div>
    </motion.div>
  );
};

export default BlockchainCard;