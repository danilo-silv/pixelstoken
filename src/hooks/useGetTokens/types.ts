import Icons from '@/components/atoms/Icons';

export interface Chart {
  month: string;
  value: number;
}

export interface Token {
  name: keyof typeof Icons;
  description: string;
  soaring: number;
  valuation: number;
  charts: Chart[];
}

export interface NFT {
  image: string;
  name: string;
  description: string;
  soaring: number;
  valuation: number;
}

export interface TokenResponseData {
  tokens: Token[];
  nfts: NFT[];
}
