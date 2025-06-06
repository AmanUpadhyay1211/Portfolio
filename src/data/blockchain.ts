import { BlockchainProject } from '../types';

export const blockchainProjects: BlockchainProject[] = [
//   {
//     id: 'b1',
//     title: 'Multichain Trading Bot',
//     description: 'A Trading bot which can bridge assets between Solana,Linea and Base.',
//     network: 'Base, Solana, Linea',
//     contractAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
//     codeSnippet: {
//       code: `// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

// contract Marketplace is ReentrancyGuard {
//     address payable public owner;
//     uint256 public feePercent;
//     uint256 public itemCount;

//     struct Item {
//         uint256 itemId;
//         IERC721 nft;
//         uint256 tokenId;
//         uint256 price;
//         address payable seller;
//         bool sold;
//     }

//     mapping(uint256 => Item) public items;

//     event ItemListed(
//         uint256 itemId,
//         address indexed nft,
//         uint256 tokenId,
//         uint256 price,
//         address indexed seller
//     );

//     event ItemSold(
//         uint256 itemId,
//         address indexed nft,
//         uint256 tokenId,
//         uint256 price,
//         address indexed seller,
//         address indexed buyer
//     );
// }`,
//       language: 'solidity',
//       title: 'Marketplace Smart Contract'
//     },
//     imageUrl: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     transactionCount: 8433
//   },
//   {
//     id: 'b2',
//     title: 'DeFi Staking Platform',
//     description: 'A DeFi platform enabling users to stake tokens and earn rewards. Features include liquidity pools and yield farming.',
//     network: 'Binance Smart Chain',
//     contractAddress: '0x1Fc7A5c7288a76B9A1C36982945B3f98b1BbABdF',
//     codeSnippet: {
//       code: `// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract StakingRewards is ReentrancyGuard, Ownable {
//     IERC20 public stakingToken;
//     IERC20 public rewardsToken;
    
//     uint256 public rewardRate;
//     uint256 public lastUpdateTime;
//     uint256 public rewardPerTokenStored;
    
//     mapping(address => uint256) public userRewardPerTokenPaid;
//     mapping(address => uint256) public rewards;
//     mapping(address => uint256) private _balances;
//     uint256 private _totalSupply;
    
//     event Staked(address indexed user, uint256 amount);
//     event Withdrawn(address indexed user, uint256 amount);
//     event RewardPaid(address indexed user, uint256 reward);
// }`,
//       language: 'solidity',
//       title: 'DeFi Staking Contract'
//     },
//     imageUrl: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     transactionCount: 12672
//   },
//   {
//     id: 'b3',
//     title: 'NFT Collection',
//     description: 'A collection of unique digital art pieces tokenized as NFTs on the Ethereum blockchain with royalty mechanisms for artists.',
//     network: 'Ethereum',
//     contractAddress: '0x2a5B3491F0ceeC5Bdc57EfA70d5C17fc3bf85370',
//     codeSnippet: {
//       code: `// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract ArtCollection is ERC721Enumerable, Ownable {
//     using Strings for uint256;
    
//     string public baseURI;
//     string public baseExtension = ".json";
//     uint256 public cost = 0.05 ether;
//     uint256 public maxSupply = 10000;
//     bool public paused = false;
    
//     constructor(
//         string memory _name,
//         string memory _symbol,
//         string memory _initBaseURI
//     ) ERC721(_name, _symbol) {
//         setBaseURI(_initBaseURI);
//     }
    
//     // Internal functions
//     function _baseURI() internal view override returns (string memory) {
//         return baseURI;
//     }
// }`,
//       language: 'solidity',
//       title: 'NFT Collection Contract'
//     },
//     imageUrl: 'https://images.pexels.com/photos/2097616/pexels-photo-2097616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     transactionCount: 3459
//   },
//   {
//     id: 'b4',
//     title: 'Decentralized Voting System',
//     description: 'A transparent and secure voting system built on blockchain technology, ensuring tamper-proof elections and results verification.',
//     network: 'Polygon',
//     contractAddress: '0x9D7f74d0C41E726EC95884E0e97Fa6129e3b5E99',
//     codeSnippet: {
//       code: `// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract VotingSystem {
//     struct Candidate {
//         uint id;
//         string name;
//         uint voteCount;
//     }
    
//     struct Voter {
//         bool hasVoted;
//         uint votedCandidateId;
//     }
    
//     address public admin;
//     mapping(address => Voter) public voters;
//     Candidate[] public candidates;
    
//     uint public votingStart;
//     uint public votingEnd;
    
//     event VoteCast(address voter, uint candidateId);
//     event CandidateAdded(uint candidateId, string name);
    
//     modifier onlyAdmin() {
//         require(msg.sender == admin, "Only admin can perform this action");
//         _;
//     }
// }`,
//       language: 'solidity',
//       title: 'Voting System Contract'
//     },
//     imageUrl: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   }
];