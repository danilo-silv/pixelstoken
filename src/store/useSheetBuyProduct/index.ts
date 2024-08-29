import { create } from 'zustand';

import { NFTData } from '@/hooks/useGetProducts/types';

interface SheetBuyProductState {
  isOpen: boolean;
  product?: NFTData;
  toggleIsOpen: () => void;
  setProduct: (product?: NFTData) => void;
}

export const useSheetBuyProductStore = create<SheetBuyProductState>((set) => ({
  isOpen: false,
  product: undefined,

  toggleIsOpen: () =>
    set((state) => {
      const newState = { isOpen: !state.isOpen, product: state.product };

      if (state.isOpen) {
        newState['product'] = {} as NFTData;
      }
      return newState;
    }),

  setProduct: (product?: NFTData) => set({ product }),
}));
