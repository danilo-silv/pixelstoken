import useSWR from 'swr';

import { UseFetchOptions } from './types';

import { createClient } from '@/integration/client';

export function useFetch<Data = any, Error = any>(
  url: string,
  { skip = false, enabled = true, isSimulation = false, ...config }: UseFetchOptions = {}
) {
  const client = createClient();

  const { data, error, mutate, isLoading } = useSWR<Data, Error>(
    enabled && !skip ? url : null,
    async (url) => {
      const response = await client.get(url);
      return response.data;
    },
    config
  );

  return { data, error, mutate, isLoading };
}
