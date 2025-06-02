import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Role, Project, BlockchainProject, ContentItem, Stats } from '../types';
import { projects } from '../data/projects';
import { blockchainProjects } from '../data/blockchain';
import fetchYouTubeVideos from '../data/fetchYoutubeVideo';
// import { contentItems } from '../data/content';

interface PortfolioContextType {
  activeRole: Role;
  setActiveRole: (role: Role) => void;
  projects: Project[];
  blockchainProjects: BlockchainProject[];
  filteredContent: ContentItem[];
  contentFilter: string;
  setContentFilter: (filter: string) => void;
  stats: Stats;
}

const initialStats: Stats = {
  projects: 0,
  githubStars: 0,
  certificates: 8,
  youtube: {
    subscribers: 0,
    videos: 0,
    views: 0
  },
  experience: {
    development: 2,
    blockchain: 1,
    contentCreation: 7
  }
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeRole, setActiveRole] = useState<Role>('developer');
  const [contentFilter, setContentFilter] = useState<string>('all');
  const [stats, setStats] = useState<Stats>(initialStats);
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);

  // GitHub API configuration
  const GITHUB_USERNAME = 'amanupadhyay1211';

  // YouTube API configuration
  const YOUTUBE_CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const reposResponse = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
        );

        const totalStars = reposResponse.data.reduce(
          (acc: number, repo: any) => acc + repo.stargazers_count,
          0
        );
        console.log(reposResponse.data, `<------github response`);
        setStats(prev => ({
          ...prev,
          projects: reposResponse.data.length,
          githubStars: totalStars
        }));
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    const fetchYouTubeData = async () => {
      console.log(YOUTUBE_CHANNEL_ID, YOUTUBE_API_KEY, `<------youtube config`);
      if (!YOUTUBE_CHANNEL_ID || !YOUTUBE_API_KEY) {
        console.error('YouTube Channel ID or API Key is not set');
        return;
      }
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels`,
          {
            params: {
              part: 'statistics',
              id: YOUTUBE_CHANNEL_ID,
              key: YOUTUBE_API_KEY
            }
          }
        );
        // console.log(response.data,`<------youtube response`);
        const youtube = {
          subscribers: parseInt(response.data.items[0].statistics.subscriberCount),
          videos: parseInt(response.data.items[0].statistics.videoCount),
          views: parseInt(response.data.items[0].statistics.viewCount)
        }
        console.log(youtube);

        setStats(prev => ({
          ...prev,
          youtube
        }));
      } catch (error) {
        console.error('Error fetching YouTube data:', error);
      }
    };

    const fetchYouTubeContentData = async () => {
      try {
        const videoData = [
          { id: "8mVt_NlwVng", category: "Storytelling" },
          { id: "UZvZYnpCHkM", category: "Personal" },
          { id: "jMjLfkUa3n4", category: "Storytelling" },
          { id: "FTc9jkoDXoc", category: "Personal" },
          { id: "NVzWAMY7zLg", category: "Storytelling" },
          { id: "Kkvhrtp-olY", category: "Tutorial" },
          { id: "4SQ5XweyEPU", category: "Storytelling" },
          { id: "--r4cjsCgpY", category: "Tutorial" },
          { id: "rEcJXamHwvg", category: "Storytelling" },
          { id: "SlfExnC8Ujg", category: "Personal" },
          { id: "uFwHYvTtPAo", category: "Storytelling" },
        ];
        const response = await fetchYouTubeVideos(videoData)
        // console.log(response.data,`<------youtube response`);
        setContentItems(response);
      } catch (error) {
        console.error('Error fetching YouTube data:', error);
      }
    };

    fetchGitHubData();
    fetchYouTubeData();
    fetchYouTubeContentData();
  }, []);

  const filteredContent = contentFilter === 'all'
    ? contentItems
    : contentItems.filter(item => item.category === contentFilter);

  return (
    <PortfolioContext.Provider
      value={{
        activeRole,
        setActiveRole,
        projects,
        blockchainProjects,
        filteredContent,
        contentFilter,
        setContentFilter,
        stats,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};