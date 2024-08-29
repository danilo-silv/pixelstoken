import { Text } from 'tamagui';

import { TabView } from '../TabView';

import { ListTokens } from '@/components/molecules';
import { useGetTokens } from '@/hooks';

export enum CustomTab {
  Tokens = 'Tokens',
  NFTs = 'NFTs',
}

export const Tokens = () => {
  const { data } = useGetTokens();

  const tokens = data?.[0]?.tokens;

  return (
    <TabView tabEnum={CustomTab}>
      {tokens?.length && <ListTokens tokens={tokens} />}

      <Text>Content for Tab 2</Text>
    </TabView>
  );
};
