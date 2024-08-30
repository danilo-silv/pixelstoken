import { ShoppingCart } from '@tamagui/lucide-icons';
import { Link } from 'expo-router';
import { FunctionComponent } from 'react';
import { Pressable } from 'react-native';
import { Text, View, XStack } from 'tamagui';

import { User } from '@/components/molecules';
import { useCartStore } from '@/store';

export const Header: FunctionComponent = () => {
  const { count } = useCartStore();
  return (
    <XStack justifyContent="space-between" alignItems="center">
      <User />
      <Link href="/cart" asChild>
        <Pressable>
          {({ pressed }) => (
            <View position="relative" opacity={pressed ? 0.5 : 1}>
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
          )}
        </Pressable>
      </Link>
    </XStack>
  );
};
