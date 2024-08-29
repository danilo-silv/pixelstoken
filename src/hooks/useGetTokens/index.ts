import { TokenResponseData } from './types';
import { useFetch } from '../useFetch';

export const useGetTokens = () => {
  const { data, isLoading, error } = useFetch<TokenResponseData[]>('/tokens');

  return {
    data,
    isLoading,
    error,
  };
};
