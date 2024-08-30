import { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { Separator } from 'tamagui';

import { ListItemToken } from '../ListItemToken';

import { Token } from '@/hooks/useGetTokens/types';

interface ListTokensType {
  tokens: Token[];
}

export const ListTokens: FunctionComponent<ListTokensType> = ({ tokens }) => {
  const renderItem = ({ item }: { item: Token }) => {
    return <ListItemToken token={item} />;
  };

  const renderSeparator = () => <Separator marginVertical={18} borderColor="$blue12Light" />;

  return (
    <FlatList
      data={tokens}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};
