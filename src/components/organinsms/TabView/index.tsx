import React, { useState, useEffect, ReactNode, FunctionComponent } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { View, YStack } from 'tamagui';

import { TabButton, TabButtonType } from '@/components/atoms';

interface TabViewProps<T> {
  tabEnum: T;
  children: ReactNode[];
}

export const TabView: FunctionComponent<TabViewProps<object>> = <T extends object>({
  tabEnum,
  children,
}: TabViewProps<T>) => {
  const tabTitles = Object.keys(tabEnum).filter((key) => isNaN(Number(key))) as (keyof T)[];
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const opacity = useSharedValue(1);
  const translateX = useSharedValue(0);

  const buttons: TabButtonType[] = tabTitles.map((title) => ({ title: String(title) }));

  useEffect(() => {
    opacity.value = withTiming(0, { duration: 200 }, () => {
      opacity.value = withTiming(1, { duration: 200 });
    });

    translateX.value = withTiming(0 * selectedTab, { duration: 200 });
  }, [selectedTab]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <YStack gap={24}>
      <TabButton buttons={buttons} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Animated.View style={animatedStyle}>
        <View>{children[selectedTab]}</View>
      </Animated.View>
    </YStack>
  );
};
