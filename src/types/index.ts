export interface Seller {
  id: string;
  name: string;
  avatar: string;
  orders: number;
  rating?: number;
  category?: string;
}

export interface Article {
  id: string;
  title: string;
  author: string;
  type: 'logo' | 'ux' | 'wireframe';
  description?: string;
  readTime?: string;
  date?: string;
  tags?: string[];
}

export type NavItemKey = 'home' | 'cart' | 'discount' | 'favorites' | 'settings';
