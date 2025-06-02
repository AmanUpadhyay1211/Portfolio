import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Aman Upadhyay</h3>
            <p className="mb-4">
              Full Stack Developer, Blockchain Enthusiast, and Content Creator with a passion for specializing in modern web technologies.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/AmanUpadhyay1211"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://x.com/AmanUpa59504263"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/allthingsaman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:amanupadhyay1211@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('developer-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Developer Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('blockchain-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blockchain Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('content-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Content Creation
                </button>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1Fx2FHFblkHI25j3rxQLdM1kcXocJJLXdu0WcWH-iQdw/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
            <p className="mb-4">
              Interested in working together? Have a project in mind? Feel free to reach out!
            </p>
            <a
              href="mailto:amanupadhyay1211@gmail.com"
              className="inline-block px-4 py-2 border border-gray-600 rounded-lg text-white hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {currentYear} Aman Upadhyay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;