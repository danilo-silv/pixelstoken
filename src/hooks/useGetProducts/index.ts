import { NFTResponseData } from './types';
import { useFetch } from '../useFetch';

export const useGetProducts = () => {
  const { data, isLoading, error } = useFetch<NFTResponseData[]>('/products');

  return {
    data,
    isLoading,
    error,
  };
};
