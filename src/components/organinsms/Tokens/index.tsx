import { FunctionComponent } from 'react';
import { Text } from 'tamagui';

import { TabView } from '../TabView';

import { ListNfts, ListTokens } from '@/components/molecules';
import { useGetTokens } from '@/hooks';

export enum CustomTab {
  Tokens = 'Tokens',
  NFTs = 'NFTs',
}

export const Tokens: FunctionComponent = () => {
  const { data } = useGetTokens();

  const tokens = data?.[0]?.tokens;
  const nfts = data?.[0]?.nfts;

  return (
    <TabView tabEnum={CustomTab}>
      {tokens?.length && <ListTokens tokens={tokens} />}
      {nfts?.length && <ListNfts nfts={nfts} />}

      <Text>Content for Tab 2</Text>
    </TabView>
  );
};
