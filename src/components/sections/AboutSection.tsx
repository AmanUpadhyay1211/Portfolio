import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { School, Briefcase, Award, BookOpen, Star, Heart } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  achievements: string[];
  learnings: string[];
  image?: string; // Add image prop
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, icon, achievements, learnings, image }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 mb-12"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">{year}</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        {image && (
          <div className="my-4">
            <img src={image} alt={title + ' memory'} className="rounded-lg shadow w-full max-w-md" />
          </div>
        )}
        
        {achievements.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Star size={16} className="text-yellow-500" /> Achievements
            </h4>
            <ul className="mt-2 space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {learnings.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Heart size={16} className="text-red-500" /> Key Learnings
            </h4>
            <ul className="mt-2 space-y-2">
              {learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
  const timelineItems: TimelineItemProps[] = [
    {
      year: '2008-2013',
      title: 'Primary Education',
      description: 'Started my academic journey at St. Mary\'s School, where my fascination with computers began. I was fortunate to have access to a computer lab where I wrote my first HTML code.',
      icon: <School size={24} className="text-primary-600 dark:text-primary-400" />,
      achievements: [
        'Won first place in the school science fair with a basic website project',
        'Selected as computer lab assistant in 5th grade'
      ],
      learnings: [
        'Discovered my passion for technology and problem-solving',
        'Learned the importance of curiosity and continuous learning'
      ],
      // image: '/images/memories/primary.jpg' // Example image path
    },
    {
      year: '2013-2020',
      title: 'Secondary Education',
      description: 'Attended Lincoln High School where I dove deeper into programming through after-school coding clubs and participated in various tech competitions.',
      icon: <BookOpen size={24} className="text-primary-600 dark:text-primary-400" />,
      achievements: [
        'Developed a school event management system as my final project',
        'Led the school\'s programming club'
      ],
      learnings: [
        'Understanding the value of teamwork in software development',
        'Learning to balance technical skills with project management'
      ],
      // image: '/images/memories/secondary.jpg'
    },
    {
      year: '2021-2024',
      title: 'Computer Science Degree',
      description: 'Pursued my Bachelor\'s in Computer Science at Tech University, specializing in web development and distributed systems.',
      icon: <Award size={24} className="text-primary-600 dark:text-primary-400" />,
      achievements: [
        'Published two research papers on blockchain technology',
        'Completed internship at a leading tech company',
        'Graduated with honors'
      ],
      learnings: [
        'The importance of building scalable and maintainable systems',
        'How to approach complex technical challenges methodically'
      ],
      // image: '/images/memories/degree.jpg'
    },
    {
      year: '2024-Present',
      title: 'First Developer Role',
      description: 'Joined a startup as a Junior Full Stack Developer, working on their main product and gaining invaluable real-world experience.',
      icon: <Briefcase size={24} className="text-primary-600 dark:text-primary-400" />,
      achievements: [
        'Promoted to Senior Developer within 18 months',
        'Led the implementation of the company\'s new microservices architecture'
      ],
      learnings: [
        'The significance of writing clean, maintainable code',
        'How to effectively communicate technical concepts to non-technical stakeholders'
      ],
      // image: '/images/memories/devrole.jpg'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            My Journey
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12">
            From writing my first line of code to becoming a full-stack developer, 
            here's my story of growth, challenges, and continuous learning.
          </p>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;