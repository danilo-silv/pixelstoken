import { Dimensions, FlatList } from 'react-native';

import { ListItemProduct } from '../ListItemProduct';

import { NFTResponseData } from '@/hooks/useGetProducts/types';
import { TABBAR_HEIGHT } from '@/navigation/constants';

interface ListProductType {
  products: NFTResponseData[];
}

export const ListProduct = ({ products }: ListProductType) => {
  const screenHeight = Dimensions.get('window').height;

  const height = screenHeight - 4 * TABBAR_HEIGHT;

  const renderItem = ({ item }: { item: NFTResponseData }) => {
    return <ListItemProduct product={item} />;
  };

  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ gap: 14 }}
      columnWrapperStyle={{ gap: 24 }}
      showsVerticalScrollIndicator={false}
      style={{
        height,
      }}
    />
  );
};
