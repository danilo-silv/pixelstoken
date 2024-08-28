import { XStack, YStack, Avatar, Text, H4 } from 'tamagui';

export function User() {
  return (
    <XStack space="$2" ai="center">
      <Avatar size="$5" circular>
        <Avatar.Image src="https://ca.slack-edge.com/THQS6JHC1-U072Q9RBV1T-f48dbe97c1e5-512" />
        <Avatar.Fallback backgroundColor="$gray5" />
      </Avatar>

      <YStack>
        <Text color="white">Olá,</Text>

        <H4 color="white" fontWeight="bold" mt="$-2">
          Rodrigo
        </H4>
      </YStack>
    </XStack>
  );
}
