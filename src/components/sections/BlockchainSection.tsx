import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { usePortfolio } from '../../context/PortfolioContext';
import BlockchainCard from '../ui/BlockchainCard';
import AnimatedCounter from '../ui/AnimatedCounter';
import gsap from 'gsap';
import { Database, Award, BarChart } from 'lucide-react';

const BlockchainSection: React.FC = () => {
  const { blockchainProjects, stats } = usePortfolio();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  // GSAP animations
  useEffect(() => {
    if (inView && sectionRef.current) {
      const ctx = gsap.context(() => {
        gsap.from('.section-title', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        });
        
        gsap.from('.section-description', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2,
        });

        gsap.from('.blockchain-stats', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.4,
        });

        gsap.from('.blockchain-visualization', {
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.6,
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <div 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
      id="blockchain-section"
    >
      <div className="container mx-auto px-4">
        <div ref={ref}>
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Blockchain Developer
          </h2>
          <p className="section-description text-lg text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Exploring the frontier of decentralized technologies to build secure, transparent, 
            and trustless applications that transform industries.
          </p>

          <div className="blockchain-stats grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div 
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database size={24} className="text-secondary-600 dark:text-secondary-400" />
              </div>
              <AnimatedCounter end={8} />
              <p className="text-gray-500 dark:text-gray-400 mt-1">DApps Deployed</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <AnimatedCounter end={stats.certificates} />
              <p className="text-gray-500 dark:text-gray-400 mt-1">Certifications</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart size={24} className="text-accent-600 dark:text-accent-400" />
              </div>
              <AnimatedCounter end={25000} suffix="+" />
              <p className="text-gray-500 dark:text-gray-400 mt-1">Transactions</p>
            </motion.div>
          </div>

          <div className="blockchain-visualization mb-16">
            <motion.div 
              className="relative h-64 md:h-80 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 dark:from-secondary-900/30 dark:to-primary-900/30 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-secondary-500 dark:bg-secondary-400 flex items-center justify-center text-white font-bold text-xs md:text-sm">
                  ETH
                </div>
                <div className="animate-pulse-slow absolute w-20 h-20 md:w-32 md:h-32 rounded-full border-2 border-secondary-400/50 dark:border-secondary-400/30"></div>
                <div className="animate-pulse-slow absolute w-36 h-36 md:w-48 md:h-48 rounded-full border-2 border-primary-400/40 dark:border-primary-400/20" style={{ animationDelay: '0.5s' }}></div>
              </div>

              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (Math.PI * 2 * i) / 8;
                const x = 50 + 40 * Math.cos(angle);
                const y = 50 + 40 * Math.sin(angle);

                return (
                  <motion.div
                    key={i}
                    className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-secondary-500 to-primary-500 dark:from-secondary-400 dark:to-primary-400 opacity-80"></div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Blockchain Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blockchainProjects.map((project, index) => (
              <BlockchainCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainSection;