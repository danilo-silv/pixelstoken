import { YStack } from 'tamagui';

import { Container } from '@/components/atoms';
import { Header, Products } from '@/components/organinsms';

export default function Home() {
  return (
    <Container>
      <YStack gap={16}>
        <Header />

        <Products />
      </YStack>
    </Container>
  );
}
