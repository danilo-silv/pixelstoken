import { StatusBar } from 'expo-status-bar';
import { View } from 'tamagui';

import { Container } from '@/components/atoms';
import { Cart as CartUser } from '@/components/organinsms';

export default function Cart() {
  return (
    <View bg="$background" flex={1}>
      <Container>
        <StatusBar style="light" />
        <CartUser />
      </Container>
    </View>
  );
}
