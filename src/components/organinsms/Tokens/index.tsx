import { Text } from 'tamagui';

import { TabView } from '../TabView';

export enum CustomTab {
  Tokens = 'Tokens',
  NFTs = 'NFTs',
}

export const Tokens = () => {
  return (
    <TabView tabEnum={CustomTab}>
      <Text>Content for Tab 1</Text>
      <Text>Content for Tab 2</Text>
    </TabView>
  );
};
