import {  Project } from '../types';

export const blockchainProjects: Project[] = [
{
    id: 'b1',
    title: 'Uatu - Blockchain Analytics Engine',
    description: 'A real-time, high-performance blockchain analytics engine that decodes and structures on-chain activity at scale. Ask questions in plain English and get instant insights',
    imageUrl: '/src/images/uatu.png',
    techStack: ['Ethers.js', '@solana/web3.js', 'Ai-Pipelines', 'GraphQL', 'Rabittmq'],
    liveUrl: 'https://uatu.xyz/',
    doneBy : "Team",
    date: 'On-Going',
  },
  {
    id: 'b2',
    title: 'Hashnipe - Smart AI Investment Companion',
    description: 'Identify and snipe the best AI agents on Virtual Protocol in the earliest possible blocks,Backed by telegram bot and KeylessWallet',
    imageUrl: '/src/images/hashnipe.png',
    techStack: ['Virtual Protocol', 'KeylessWallet', 'Mangi-SDK','IPC','Bullmq',`Notification Queue`],
     liveUrl: 'https://hashnipe.online/',
    doneBy : "Team",
    date: 'On-Going'
  },
];