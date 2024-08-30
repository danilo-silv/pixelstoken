import FontAwesome from '@expo/vector-icons/FontAwesome6';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Button, Text, XStack, YStack } from 'tamagui';

import Icons from '@/components/atoms/Icons';

export const BulletActions = () => {
  return (
    <XStack justifyContent="space-between" alignItems="center" px={48}>
      <YStack gap={8} justifyContent="center" alignItems="center">
        <Button
          alignSelf="center"
          icon={Icons.SendMoney}
          size="$6"
          backgroundColor="$blue10Light"
          w={76}
          h={76}
          borderRadius={50}
          borderColor="$gray8Dark"
        />

        <Text color="white" fontSize={14} fontWeight={600}>
          Send
        </Text>
      </YStack>
      <YStack gap={8} justifyContent="center" alignItems="center">
        <LinearGradient
          colors={['#0061FF', '#6100FF']}
          start={[0, 0]}
          end={[1, 1]}
          style={{
            borderRadius: 50,
            width: 76,
            height: 76,
          }}>
          <Link href="/market" asChild>
            <Button
              alignSelf="center"
              icon={<FontAwesome size={12} name="plus" />}
              size="$6"
              borderRadius={50}
              w={76}
              h={76}
              backgroundColor="transparent"
            />
          </Link>
        </LinearGradient>
        <Text color="white" fontSize={14} fontWeight={600}>
          Buy
        </Text>
      </YStack>
      <YStack gap={8} justifyContent="center" alignItems="center">
        <Button
          alignSelf="center"
          icon={Icons.ReceiveMoney}
          size="$6"
          backgroundColor="$blue10Light"
          w={76}
          h={76}
          borderRadius={50}
          borderColor="$gray8Dark"
        />
        <Text color="white" fontSize={14} fontWeight={600}>
          Receive
        </Text>
      </YStack>
    </XStack>
  );
};
