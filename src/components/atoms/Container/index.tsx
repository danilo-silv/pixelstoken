import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack } from 'tamagui';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView>
      <YStack paddingHorizontal="$3">{children}</YStack>
    </SafeAreaView>
  );
};
