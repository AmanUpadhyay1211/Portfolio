import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { usePortfolio } from '../../context/PortfolioContext';
import ProjectCard from '../ui/ProjectCard';
import AnimatedCounter from '../ui/AnimatedCounter';
import gsap from 'gsap';
import { Github, Code, BookOpen } from 'lucide-react';

const DeveloperSection: React.FC = () => {
  const { projects, stats } = usePortfolio();
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

        gsap.from('.stats-container', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.4,
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <div 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
      id="developer-section"
    >
      <div className="container mx-auto px-4">
        <div ref={ref}>
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Full Stack Developer
          </h2>
          <p className="section-description text-lg text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Creating robust, scalable, and user-friendly applications that solve real-world problems.
            My expertise spans front-end and back-end technologies, ensuring seamless, end-to-end solutions.
          </p>

          <div className="stats-container grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <AnimatedCounter end={stats.projects} />
              <p className="text-gray-500 dark:text-gray-400 mt-1">Projects</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github size={24} className="text-secondary-600 dark:text-secondary-400" />
              </div>
              <AnimatedCounter end={stats.githubStars} />
              <p className="text-gray-500 dark:text-gray-400 mt-1">GitHub Stars</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen size={24} className="text-accent-600 dark:text-accent-400" />
              </div>
              <AnimatedCounter end={stats.experience.development} suffix="+" />
              <p className="text-gray-500 dark:text-gray-400 mt-1">Years Experience</p>
            </motion.div>
            
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success-600 dark:text-success-400">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <AnimatedCounter end={100} suffix="%" />
              <p className="text-gray-500 dark:text-gray-400 mt-1">Client Satisfaction</p>
            </motion.div>
          </div>

          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Featured Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.a
              href="https://github.com/AmanUpadhyay1211"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSection;