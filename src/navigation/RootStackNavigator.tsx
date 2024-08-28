import { Stack } from 'expo-router';
import { FunctionComponent } from 'react';

export const RootStackNavigator: FunctionComponent = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="cart" options={{ presentation: 'modal', headerShown: false }} />
    </Stack>
  );
};
