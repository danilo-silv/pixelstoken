import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { Trash2 } from '@tamagui/lucide-icons';
import { TouchableOpacity } from 'react-native';
import { Image, Text, XStack, YStack } from 'tamagui';

import { NFTData } from '@/hooks/useGetProducts/types';
import config from '@/theme/tamagui.config';

interface ListItemCartType {
  product: NFTData;
  onRemove: (product: string) => void;
}

export const ListItemCart = ({ product, onRemove }: ListItemCartType) => {
  return (
    <XStack
      bg="$blue12Light"
      borderRadius={20}
      overflow="hidden"
      p={10}
      justifyContent="space-between"
      alignItems="center">
      <XStack gap={16}>
        <Image
          source={{
            uri: product.image,
            width: 100,
            height: 80,
          }}
          borderRadius={10}
        />

        <YStack justifyContent="space-between" py={6}>
          <YStack gap={4}>
            <Text color="white" fontSize={14} fontWeight={700} letterSpacing={0.32}>
              {product.name}
            </Text>
            <Text color="white" fontSize={14} fontWeight={400} letterSpacing={0.32}>
              {product.description}
            </Text>
          </YStack>

          <XStack alignItems="center" gap={4}>
            <FontAwesome name="ethereum" size={12} color={config.tokens.color.green10Light.val} />
            <Text color="$green10Light" fontSize={12} fontWeight={400} letterSpacing={0.32}>
              {product.valuation}
            </Text>
          </XStack>
        </YStack>
      </XStack>

      <TouchableOpacity onPress={() => onRemove(product.name)}>
        <Trash2 size={24} color={config.tokens.color.red10Dark.val} />
      </TouchableOpacity>
    </XStack>
  );
};
