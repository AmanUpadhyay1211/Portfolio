import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { usePortfolio } from '../../context/PortfolioContext';
import { 
  Code, 
  Database, 
  Youtube, 
  ChevronDown 
} from 'lucide-react';
import RoleCard from '../ui/RoleCard';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const { activeRole, setActiveRole } = usePortfolio();
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Set up parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollValue = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollValue * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
      });
      
      gsap.from('.role-cards', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5,
      });

      gsap.from('.hero-description', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        delay: 1,
      });

      gsap.from('.cta-button', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        delay: 1.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background particles */}
      <div ref={parallaxRef} className="absolute inset-0 opacity-25 dark:opacity-15 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-300 dark:bg-primary-700 filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-secondary-300 dark:bg-secondary-700 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-accent-300 dark:bg-accent-700 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 relative">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
            >
              <img
                src="https://avatars.githubusercontent.com/u/146929943?v=4"
                alt="Aman Upadhyay"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <ReactTyped
              strings={[
                "Hello, I'm<br>Aman Upadhyay",
                "I'm<br>Full Stack Developer",
                "I'm<br>Learning Web3",
                "I'm<br>Certified Content Creator",
                "I'm<br>an Engineer"
              ]}
              typeSpeed={80}
              backSpeed={40}
              loop={true}
              startDelay={500}
              showCursor={true}
              cursorChar="|"
              html={true}
            />
          </h1>

          <div className="role-cards grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <RoleCard
              title="Full Stack Developer"
              description="Building modern web applications with cutting-edge technologies."
              icon={<Code size={32} />}
              type="developer"
              active={activeRole === 'developer'}
              onClick={setActiveRole}
            />
            <RoleCard
              title="Blockchain Developer"
              description="Creating decentralized applications and smart contracts."
              icon={<Database size={32} />}
              type="blockchain"
              active={activeRole === 'blockchain'}
              onClick={setActiveRole}
            />
            <RoleCard
              title="Content Creator"
              description="Sharing knowledge and insights through engaging tutorials."
              icon={<Youtube size={32} />}
              type="content"
              active={activeRole === 'content'}
              onClick={setActiveRole}
            />
          </div>

          <p className="hero-description text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Passionate technologist with expertise in modern web development, blockchain innovation, and content creation. Turning complex ideas into elegant digital solutions & learning diffrent things in free time.
          </p>

          <motion.button
            onClick={() => navigate('/about')}
            className="cta-button group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white dark:text-white"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-300 ease-in-out group-hover:bg-opacity-0 dark:bg-gray-900">
              Explore My Journey
            </span>
          </motion.button>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown 
            size={30} 
            className="text-gray-400 dark:text-gray-500 cursor-pointer"  
            onClick={scrollToContent}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;