import { create } from 'zustand';

import { NFTData } from '@/hooks/useGetProducts/types';

interface CartState {
  products: NFTData[];
  count: number;
  addProduct: (product: NFTData) => void;
  removeProduct: (productName: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
  products: [],
  count: 0,

  addProduct: (newProduct: NFTData) =>
    set((state) => {
      const productExists = state.products.some((product) => product.name === newProduct.name);

      if (!productExists) {
        const newProducts = [...state.products, newProduct];
        return {
          products: newProducts,
          count: newProducts.length,
        };
      }
      return state;
    }),

  removeProduct: (productName: string) =>
    set((state) => {
      const newProducts = state.products.filter((product) => product.name !== productName);
      return {
        products: newProducts,
        count: newProducts.length,
      };
    }),
}));
