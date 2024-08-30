import { TrendingUp } from '@tamagui/lucide-icons';
import { Text, XStack, YStack } from 'tamagui';

import { currencyFormat } from '@/utils';

export const Balance = () => {
  return (
    <YStack gap={9} justifyContent="center" alignItems="center">
      <Text color="white" fontSize={14} fontWeight={600}>
        Current Wallet Balance
      </Text>
      <Text color="white" fontSize={40} fontWeight={600}>
        {currencyFormat(5323)}
      </Text>
      <XStack gap={12} px={10} py={4} backgroundColor="$gray10Light" borderRadius={50}>
        <Text color="white" fontSize={12} fontWeight={400} textTransform="uppercase">
          btc : 0,00335
        </Text>
        <XStack gap={4} alignItems="center">
          <TrendingUp size={16} color="$green10Light" />
          <Text color="$green10Light" fontSize={12} fontWeight={400} textTransform="uppercase">
            +6.54%
          </Text>
        </XStack>
      </XStack>
    </YStack>
  );
};
