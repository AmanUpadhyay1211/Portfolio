import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import Hero from '../components/sections/Hero';
import DeveloperSection from '../components/sections/DeveloperSection';
import BlockchainSection from '../components/sections/BlockchainSection';
import ContentSection from '../components/sections/ContentSection';

const HomePage: React.FC = () => {
  const { activeRole } = usePortfolio();

  return (
    <>
      <Hero />
      {activeRole === 'developer' && <DeveloperSection />}
      {activeRole === 'blockchain' && <BlockchainSection />}
      {activeRole === 'content' && <ContentSection />}
    </>
  );
};

export default HomePage;