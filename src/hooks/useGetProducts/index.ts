import { NFTData } from './types';
import { useFetch } from '../useFetch';

export const useGetProducts = () => {
  const { data, isLoading, error } = useFetch<NFTData[]>('/products');

  return {
    data,
    isLoading,
    error,
  };
};
