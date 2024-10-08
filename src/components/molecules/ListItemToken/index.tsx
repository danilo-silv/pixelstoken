import { TrendingDown, TrendingUp } from '@tamagui/lucide-icons';
import { FunctionComponent } from 'react';
import { Text, XStack, YStack } from 'tamagui';

import Icons from '../../atoms/Icons';

import { Token } from '@/hooks/useGetTokens/types';
import { currencyFormat } from '@/utils';

interface ListItemTokenType {
  token: Token;
}

export const ListItemToken: FunctionComponent<ListItemTokenType> = ({ token }) => {
  const IconComponent = Icons[token.name];

  const growing = token.soaring > 6;

  return (
    <XStack justifyContent="space-between" alignItems="center">
      <XStack gap={12}>
        <IconComponent />
        <YStack justifyContent="center" gap={2}>
          <Text color="white" fontSize={16} fontWeight={700} letterSpacing={0.32}>
            {token.name}
          </Text>
          <Text color="$gray7Light" fontSize={12} fontWeight={400} letterSpacing={0.24}>
            {token.description}
          </Text>
        </YStack>
      </XStack>

      <YStack justifyContent="center" alignItems="flex-end" gap={2}>
        <Text color="white" fontSize={16} fontWeight={700} letterSpacing={0.32}>
          {currencyFormat(token.valuation)}
        </Text>
        <XStack gap={4} alignItems="center">
          {growing ? (
            <TrendingUp size={16} color="$green10Light" />
          ) : (
            <TrendingDown size={16} color="$red10Dark" />
          )}

          <Text
            color={growing ? '$green10Light' : '$red10Dark'}
            fontSize={12}
            fontWeight={400}
            letterSpacing={0.24}>
            {token.soaring}%
          </Text>
        </XStack>
      </YStack>
    </XStack>
  );
};
