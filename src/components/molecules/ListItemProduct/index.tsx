import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
import { Image, Text, XStack, YStack } from 'tamagui';

import { NFTResponseData } from '@/hooks/useGetProducts/types';

interface ListItemProductType {
  product: NFTResponseData;
}

export const ListItemProduct = ({ product }: ListItemProductType) => {
  const screenWidth = Dimensions.get('window').width;
  const screenSpacing = 26;

  const widthCard = screenWidth / 2 - screenSpacing;

  return (
    <YStack bg="$blue12Light" borderRadius={20}>
      <Image
        source={{
          uri: product.image,
          width: widthCard,
          height: 200,
        }}
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
      />

      <YStack pt={10} px={10} space={6} pb={18}>
        <Text color="white" fontSize={12} fontWeight={600} letterSpacing={0.32}>
          {product.description}
        </Text>
        <XStack justifyContent="space-between" alignItems="center">
          <Text color="white" fontSize={14} fontWeight={700} letterSpacing={0.32}>
            {product.name}
          </Text>

          <XStack alignItems="center" space={4}>
            <FontAwesome name="ethereum" size={12} color="white" />
            <Text color="white" fontSize={12} fontWeight={700} letterSpacing={0.32}>
              {product.valuation}
            </Text>
          </XStack>
        </XStack>
      </YStack>
    </YStack>
  );
};
