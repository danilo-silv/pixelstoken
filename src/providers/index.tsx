import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TamaguiProvider } from 'tamagui';

import config from '@/theme/tamagui.config';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <GestureHandlerRootView>
      <TamaguiProvider config={config}>{children}</TamaguiProvider>
    </GestureHandlerRootView>
  );
};
