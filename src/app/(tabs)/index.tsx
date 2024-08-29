import { StatusBar } from 'expo-status-bar';
import { YStack } from 'tamagui';

import { Container } from '@/components/atoms';
import { Balance, Header } from '@/components/organinsms';

export default function Home() {
  return (
    <Container>
      <StatusBar style="light" />
      <YStack space={35}>
        <Header />

        <Balance />
      </YStack>
    </Container>
  );
}
