import { Dimensions, FlatList } from 'react-native';

import { ListItemProduct } from '../ListItemProduct';
import { SheetBuyProduct } from '../SheetBuyProduct';

import { NFTData } from '@/hooks/useGetProducts/types';
import { TABBAR_HEIGHT } from '@/navigation/constants';
import { useSheetBuyProductStore } from '@/store';

interface ListProductType {
  products: NFTData[];
}

export const ListProduct = ({ products }: ListProductType) => {
  const { setProduct, toggleIsOpen } = useSheetBuyProductStore();

  const screenHeight = Dimensions.get('window').height;

  const height = screenHeight - 4 * TABBAR_HEIGHT;

  const handleSelected = (product: NFTData) => {
    setProduct(product);
    toggleIsOpen();
  };

  const renderItem = ({ item }: { item: NFTData }) => (
    <ListItemProduct product={item} onSelect={handleSelected} />
  );

  return (
    <>
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

      <SheetBuyProduct />
    </>
  );
};
