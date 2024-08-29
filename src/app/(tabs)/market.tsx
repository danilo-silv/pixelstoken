import { StatusBar } from 'expo-status-bar';
import { YStack } from 'tamagui';

import { Container } from '@/components/atoms';
import { Header, Products } from '@/components/organinsms';

export default function Home() {
  return (
    <Container>
      <StatusBar style="light" />
      <YStack space={16}>
        <Header />

        <Products />
      </YStack>
    </Container>
  );
}
