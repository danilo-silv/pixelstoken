import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { TrendingUp } from '@tamagui/lucide-icons';
import { Image, Text, XStack, YStack } from 'tamagui';

import { NFT } from '@/hooks/useGetTokens/types';
import { currencyFormat } from '@/utils';

interface ListItemNftType {
  nft: NFT;
}

export const ListItemNft = ({ nft }: ListItemNftType) => {
  return (
    <XStack justifyContent="space-between" alignItems="center">
      <XStack space={12}>
        <Image
          source={{
            uri: nft.image,
            width: 50,
            height: 50,
          }}
          borderRadius={6}
        />
        <YStack justifyContent="center" space={2}>
          <Text color="white" fontSize={16} fontWeight={700} letterSpacing={0.32}>
            {nft.name}
          </Text>
          <Text color="$gray7Light" fontSize={12} fontWeight={400} letterSpacing={0.24}>
            {nft.description}
          </Text>
        </YStack>
      </XStack>

      <YStack justifyContent="center" alignItems="flex-end" space={2}>
        <XStack alignItems="center" space={4}>
          <FontAwesome name="ethereum" size={16} color="white" />
          <Text color="white" fontSize={16} fontWeight={700} letterSpacing={0.32}>
            {nft.valuation}
          </Text>
        </XStack>

        <XStack space={4} alignItems="center">
          <TrendingUp size={16} color="$green10Light" />

          <Text color="$green10Light" fontSize={12} fontWeight={400} letterSpacing={0.24}>
            {currencyFormat(nft.soaring).split('.')[0]}
          </Text>
        </XStack>
      </YStack>
    </XStack>
  );
};
