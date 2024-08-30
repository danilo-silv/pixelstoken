import { Dimensions, FlatList } from 'react-native';

import { ListItemCart } from '../ListItemCart';
import { SheetBuyProduct } from '../SheetBuyProduct';

import { NFTData } from '@/hooks/useGetProducts/types';
import { TABBAR_HEIGHT } from '@/navigation/constants';
import { useCartStore } from '@/store';

interface ListCartType {
  products: NFTData[];
}

export const ListCart = ({ products }: ListCartType) => {
  const { removeProduct } = useCartStore();

  const screenHeight = Dimensions.get('window').height;

  const height = screenHeight - 3 * TABBAR_HEIGHT;

  const handleSelected = (productName: string) => {
    removeProduct(productName);
  };

  const renderItem = ({ item }: { item: NFTData }) => (
    <ListItemCart product={item} onRemove={handleSelected} />
  );

  return (
    <>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ gap: 14 }}
        showsVerticalScrollIndicator={false}
        style={{
          height,
        }}
      />

      <SheetBuyProduct />
    </>
  );
};
