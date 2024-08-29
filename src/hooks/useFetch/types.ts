import { SWRConfiguration } from 'swr';

export interface UseFetchOptions extends SWRConfiguration {
  skip?: boolean;
  enabled?: boolean;
  isSimulation?: boolean;
}
