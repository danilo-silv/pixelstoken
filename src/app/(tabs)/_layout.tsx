import { StatusBar } from 'expo-status-bar';

import { TabNavigator } from '@/navigation/TabNavigator';

export default function TabLayout() {
  return (
    <>
      <StatusBar style="light" />
      <TabNavigator />
    </>
  );
}
