import { FunctionComponent } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack } from 'tamagui';

export const Container: FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SafeAreaView>
      <YStack paddingHorizontal="$3">{children}</YStack>
    </SafeAreaView>
  );
};
