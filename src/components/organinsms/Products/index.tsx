import { FunctionComponent } from 'react';
import { Text, YStack } from 'tamagui';

import { ListProduct } from '@/components/molecules';
import { useGetProducts } from '@/hooks';

export const Products: FunctionComponent = () => {
  const { data } = useGetProducts();

  return (
    <YStack gap={24} alignItems="center">
      <Text fontSize={24} fontWeight={600} color="white">
        Market
      </Text>
      {data?.length && <ListProduct products={data} />}
    </YStack>
  );
};
