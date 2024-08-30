import { Dimensions } from 'react-native';
import { Text, YStack } from 'tamagui';

import { EmptyCartIllustration } from '@/components/atoms/Illustrations';

export const EmptyCart = () => {
  const height = Dimensions.get('window').height;

  const emptyCartHeight = height / 2;

  return (
    <YStack justifyContent="center" alignItems="center" h={emptyCartHeight}>
      <EmptyCartIllustration />

      <Text fontSize={16} fontWeight={700} mb={2}>
        No Tokens
      </Text>
      <Text fontSize={14} fontWeight={400}>
        Go find the NFT's you like.
      </Text>
    </YStack>
  );
};
