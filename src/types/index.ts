export interface Perfume {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  size: string;
  imageUrl: string;
  category: string[];
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  year: number;
  collection?: string;
  occasion?: string[];
  season?: string[];
  rating?: number;
  isNewArrival?: boolean;
  isBestseller?: boolean;
  availableSizes?: {
    size: string;
    price: number;
  }[];
}

export interface CartItem {
  perfume: Perfume;
  quantity: number;
  size: string;
  price: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}