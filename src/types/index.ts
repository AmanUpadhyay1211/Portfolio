export interface Project {
  id: string;
  title: string;
  description: string;
  videoUrl?: string;
  imageUrl: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  doneBy : "Team" | "Solo";
  codeSnippet?: CodeSnippet;
}

export interface CodeSnippet {
  code: string;
  language: string;
  title: string;
}

export interface BlockchainProject {
  id: string;
  title: string;
  description: string;
  network: string;
  contractAddress?: string;
  codeSnippet: CodeSnippet;
  imageUrl: string;
  transactionCount?: number;
}

export interface ContentItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  views: number;
  likes: number;
  date: string;
  category: string;
}

export type Role = 'developer' | 'blockchain' | 'content';

export interface RoleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  type: Role;
  active: boolean;
  onClick: (role: Role) => void;
}

export interface Stats {
  projects: number;
  githubStars: number;
  certificates: number;
  youtube:{
    subscribers: number;
    videos: number;
    views: number;
  }
  experience: {
    development: number;
    blockchain: number;
    contentCreation: number;
  };
}

export interface PortfolioContextType {
  activeRole: Role;
  setActiveRole: (role: Role) => void;
  projects: Project[];
  blockchainProjects: BlockchainProject[];
  filteredContent: ContentItem[];
  contentFilter: string;
  setContentFilter: (filter: string) => void;
  stats: Stats;
  isLoading: boolean;
  error: string | null;
}