import { LinearGradient } from 'expo-linear-gradient';
import { XStack, YStack, Avatar, Text, H4 } from 'tamagui';

export function User() {
  return (
    <XStack space="$2" ai="center">
      <LinearGradient
        colors={['#0AFF96', '#00E0FF']}
        start={[0, 0]}
        end={[1, 1]}
        style={{
          padding: 3,
          borderRadius: 50,
        }}>
        <Avatar size="$5" circular>
          <Avatar.Image src="https://ca.slack-edge.com/THQS6JHC1-U072Q9RBV1T-f48dbe97c1e5-512" />
          <Avatar.Fallback backgroundColor="$gray5" />
        </Avatar>
      </LinearGradient>
      <YStack>
        <Text color="white">Olá,</Text>

        <H4 color="white" fontWeight="bold" mt="$-2">
          Danilo
        </H4>
      </YStack>
    </XStack>
  );
}
