import { useEffect, useState } from 'react';
import { Dimensions, FlatList } from 'react-native';

import { ListItemProduct } from '../ListItemProduct';
import { SheetBuyProduct } from '../SheetBuyProduct';

import { NFTData } from '@/hooks/useGetProducts/types';
import { TABBAR_HEIGHT } from '@/navigation/constants';

interface ListProductType {
  products: NFTData[];
}

export const ListProduct = ({ products }: ListProductType) => {
  const [selectedProduct, setSelectedProduct] = useState<NFTData | undefined>(undefined);

  const [open, setOpen] = useState(false);

  const screenHeight = Dimensions.get('window').height;

  const height = screenHeight - 4 * TABBAR_HEIGHT;

  const handleSelected = (product: NFTData) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const renderItem = ({ item }: { item: NFTData }) => (
    <ListItemProduct product={item} onSelect={handleSelected} />
  );

  useEffect(() => {
    if (!open) {
      setSelectedProduct(undefined);
    }
  }, [open]);

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

      <SheetBuyProduct isOpen={open} product={selectedProduct} />
    </>
  );
};
