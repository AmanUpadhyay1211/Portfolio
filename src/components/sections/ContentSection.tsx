import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ContentCard from '../ui/ContentCard';
import AnimatedCounter from '../ui/AnimatedCounter';
import gsap from 'gsap';
import { Youtube, Users, Eye } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const ContentSection: React.FC = () => {
  const { filteredContent, contentFilter, setContentFilter, stats } = usePortfolio();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const [categories] = useState(['all', 'Tutorial', 'Storytelling', 'Personal']);

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

        gsap.from('.content-stats', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.4,
        });

        gsap.from('.filter-buttons', {
          opacity: 0,
          y: 20,
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
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
      id="content-section"
    >
      <div className="container mx-auto px-4">
        <div ref={ref}>
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Content Creator
          </h2>
          <p className="section-description text-lg text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            I create YouTube videos as a hobby, sharing movie reviews, explanations, and technical tutorials. My channel is a blend of entertainment and education, making complex topics and stories accessible to everyone.
          </p>

          <div className="content-stats grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-red-600 dark:text-red-400"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </div>
              <AnimatedCounter end={stats.youtube.videos} />
              <p className="text-gray-500 dark:text-gray-400 mt-1">Videos</p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <AnimatedCounter end={stats.youtube.subscribers} />
              <p className="text-gray-500 dark:text-gray-400 mt-1">Subscribers</p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye size={24} className="text-secondary-600 dark:text-secondary-400" />
              </div>
              <AnimatedCounter end={stats.youtube.views} />
              <p className="text-gray-500 dark:text-gray-400 mt-1">Total Views</p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-orange-600 dark:text-orange-400"
                >
                  <path d="M20 17.5V7l-8-5-8 5v10.5l8 5 8-5z" />
                  <path d="M12 22V12" />
                  <path d="m15 15-6 6" />
                  <path d="m9 15 6 6" />
                </svg>
              </div>
              <AnimatedCounter end={stats.experience.contentCreation} suffix="+" />
              <p className="text-gray-500 dark:text-gray-400 mt-1">Content Creation Experience</p>
            </motion.div>
          </div>

          <div className="filter-buttons flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setContentFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${contentFilter === category
                  ? 'bg-accent-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredContent.map((content, index) => (
              <ContentCard key={content.id} content={content} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.a
              href="https://www.youtube.com/@AllThingsaman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent-600 hover:bg-accent-700 text-white transition-colors"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <Youtube size={20} className="mr-2" />
              Subscribe on YouTube
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;