import { YStack } from 'tamagui';

import { Container } from '@/components/atoms';
import { Balance, BulletActions, Header, Tokens } from '@/components/organinsms';

export default function Home() {
  return (
    <Container>
      <YStack gap={35}>
        <Header />

        <Balance />

        <BulletActions />

        <Tokens />
      </YStack>
    </Container>
  );
}
