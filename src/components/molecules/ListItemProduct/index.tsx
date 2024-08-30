import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { FunctionComponent } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Image, Text, XStack, YStack } from 'tamagui';

import { NFTData } from '@/hooks/useGetProducts/types';
import config from '@/theme/tamagui.config';

interface ListItemProductType {
  product: NFTData;
  onSelect: (product: NFTData) => void;
}

export const ListItemProduct: FunctionComponent<ListItemProductType> = ({ product, onSelect }) => {
  const screenWidth = Dimensions.get('window').width;
  const screenSpacing = 26;

  const widthCard = screenWidth / 2 - screenSpacing;

  return (
    <TouchableOpacity onPress={() => onSelect(product)}>
      <YStack bg="$blue12Light" borderRadius={20} overflow="hidden">
        <Image
          source={{
            uri: product.image,
            width: widthCard,
            height: 200,
          }}
        />

        <YStack pt={10} px={10} gap={6} pb={18}>
          <Text color="white" fontSize={12} fontWeight={600} letterSpacing={0.32}>
            {product.description}
          </Text>
          <XStack justifyContent="space-between" alignItems="center">
            <Text color="white" fontSize={14} fontWeight={700} letterSpacing={0.32}>
              {product.name}
            </Text>

            <XStack alignItems="center" gap={4}>
              <FontAwesome name="ethereum" size={12} color={config.tokens.color.green10Light.val} />
              <Text color="$green10Light" fontSize={12} fontWeight={700} letterSpacing={0.32}>
                {product.valuation}
              </Text>
            </XStack>
          </XStack>
        </YStack>
      </YStack>
    </TouchableOpacity>
  );
};
