import { FunctionComponent } from 'react';
import { Dimensions, FlatList } from 'react-native';
import { Separator } from 'tamagui';

import { ListItemNft } from '../ListItemNft';

import { NFT } from '@/hooks/useGetTokens/types';
import { TABBAR_HEIGHT } from '@/navigation/constants';

interface ListNftsType {
  nfts: NFT[];
}

export const ListNfts: FunctionComponent<ListNftsType> = ({ nfts }) => {
  const screenHeight = Dimensions.get('window').height;
  const halfScreenHeight = screenHeight / 2;
  const height = halfScreenHeight - 2 * TABBAR_HEIGHT;

  const renderItem = ({ item }: { item: NFT }) => {
    return <ListItemNft nft={item} />;
  };

  const renderSeparator: FunctionComponent = () => (
    <Separator marginVertical={18} borderColor="$blue12Light" />
  );

  return (
    <FlatList
      data={nfts}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      ItemSeparatorComponent={renderSeparator}
      style={{
        height,
      }}
    />
  );
};
