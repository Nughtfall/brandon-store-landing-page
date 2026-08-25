import { Seller, Article } from '../types';

export const mockSellers: Seller[] = [
  {
    id: 's1',
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    orders: 154,
    rating: 4.9,
    category: 'UI/UX Design'
  },
  {
    id: 's2',
    name: 'Marcus Vance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    orders: 142,
    rating: 4.8,
    category: 'Brand Identity'
  },
  {
    id: 's3',
    name: 'Daniel Chen',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    orders: 168,
    rating: 4.95,
    category: 'Iconography'
  },
  {
    id: 's4',
    name: 'David Miller',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    orders: 135,
    rating: 4.7,
    category: 'Web Design'
  },
  {
    id: 's5',
    name: 'Aaliyah Khan',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    orders: 159,
    rating: 4.85,
    category: 'Motion Design'
  },
  {
    id: 's6',
    name: 'Lucas Rossi',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    orders: 147,
    rating: 4.9,
    category: 'Design Systems'
  },
  {
    id: 's7',
    name: 'Emma Watson',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    orders: 172,
    rating: 4.92,
    category: 'Product Design'
  },
  {
    id: 's8',
    name: 'Liam O\'Connor',
    avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80',
    orders: 150,
    rating: 4.88,
    category: '3D Illustration'
  }
];

export const mockTopArticles: Article[] = [
  {
    id: 'art-1',
    title: 'How to design in a logo in 5 steps',
    author: 'By Brandon Hernandez',
    type: 'logo',
    description: 'Learn the foundational principles of memorable logo creation from discovery and sketches to vector geometry and typography pairing.',
    readTime: '6 min read',
    date: 'Aug 24, 2026',
    tags: ['Branding', 'Logo', 'Vector']
  },
  {
    id: 'art-2',
    title: 'The Importance of UX Design in Business',
    author: 'By Marcus Vance',
    type: 'ux',
    description: 'Discover how intuitive user experience design directly impacts customer retention, conversion rates, and long-term brand equity.',
    readTime: '8 min read',
    date: 'Aug 22, 2026',
    tags: ['UX', 'Business', 'Conversion']
  },
  {
    id: 'art-3',
    title: 'How to design in a logo in 5 steps',
    author: 'By Brandon Hernandez',
    type: 'logo',
    description: 'Mastering color theory, negative space, and scalability to make your logo stand out across digital platforms and physical media.',
    readTime: '5 min read',
    date: 'Aug 20, 2026',
    tags: ['Branding', 'Design System']
  },
  {
    id: 'art-4',
    title: 'The Importance of UX Design in Business',
    author: 'By Daniel Chen',
    type: 'ux',
    description: 'A deep dive into UX audits, heuristics evaluation, and establishing continuous feedback loops for product teams.',
    readTime: '7 min read',
    date: 'Aug 18, 2026',
    tags: ['User Research', 'Product Strategy']
  }
];

export const mockLatestArticles: Article[] = [
  {
    id: 'latest-1',
    title: 'How to design in a logo in 5 steps',
    author: 'By Brandon Hernandez',
    type: 'wireframe',
    description: 'A comprehensive step-by-step breakdown of modern minimalist logo design and brand identity frameworks.',
    readTime: '6 min read',
    date: 'Aug 25, 2026',
    tags: ['Logo Design', 'Tutorial', 'Guidelines']
  },
  {
    id: 'latest-2',
    title: 'How to design in a logo in 5 steps',
    author: 'By Brandon Hernandez',
    type: 'wireframe',
    description: 'Exploring geometric grids, golden ratios, and optical balancing techniques for professional logo marks.',
    readTime: '5 min read',
    date: 'Aug 24, 2026',
    tags: ['Geometry', 'Visual Balance']
  },
  {
    id: 'latest-3',
    title: 'How to design in a logo in 5 steps',
    author: 'By Brandon Hernandez',
    type: 'wireframe',
    description: 'Exporting logo assets, preparing brand guideline sheets, and delivering vector packages for production.',
    readTime: '4 min read',
    date: 'Aug 23, 2026',
    tags: ['Asset Export', 'Client Handoff']
  }
];
