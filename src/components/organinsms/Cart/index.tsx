import { ShoppingCart } from '@tamagui/lucide-icons';
import { Text, View, XStack, YStack } from 'tamagui';

import { EmptyCart } from '../EmptyCart';

import { ListCart } from '@/components/molecules';
import { useCartStore } from '@/store';

export const Cart = () => {
  const { products, count } = useCartStore();
  return (
    <YStack gap={56}>
      <YStack>
        <XStack justifyContent="space-between">
          <View />
          <Text fontSize={24} fontWeight={700}>
            Shopping Cart
          </Text>
          <View position="relative">
            <ShoppingCart size={32} color="white" fill="white" />
            {count > 0 && (
              <View
                h={21}
                w={21}
                backgroundColor="$red11Light"
                borderRadius={50}
                justifyContent="center"
                alignItems="center"
                position="absolute"
                right={-4}
                top={-4}>
                <Text color="white" fontSize={12} fontFamily="$body" fontWeight="600">
                  {count}
                </Text>
              </View>
            )}
          </View>
        </XStack>
      </YStack>
      {count > 0 ? <ListCart products={products} /> : <EmptyCart />}
    </YStack>
  );
};
