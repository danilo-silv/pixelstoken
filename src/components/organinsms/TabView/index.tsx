import React, { useState, ReactNode } from 'react';
import { View, YStack } from 'tamagui';

import { TabButton, TabButtonType } from '@/components/atoms';

interface TabViewProps<T> {
  tabEnum: T;
  children: ReactNode[];
}

export function TabView<T extends object>({ tabEnum, children }: TabViewProps<T>) {
  const tabTitles = Object.keys(tabEnum).filter((key) => isNaN(Number(key))) as (keyof T)[];

  const [selectedTab, setSelectedTab] = useState<number>(0);

  const buttons: TabButtonType[] = tabTitles.map((title) => ({ title: String(title) }));

  return (
    <YStack space={24}>
      <TabButton buttons={buttons} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <View>{children[selectedTab]}</View>
    </YStack>
  );
}
