import { themes } from '@tamagui/themes';
import {  Tabs } from 'expo-router';
import { FunctionComponent } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, YStack } from 'tamagui';

import { TABBAR_HEIGHT } from './constants';

import { BackgroudIllustration } from '@/components/atoms/Illustrations';
import { TabBarIcon } from '@/components/molecules';
import config from '@/theme/tamagui.config';

export const TabNavigator: FunctionComponent = () => {
  const insets = useSafeAreaInsets();
  return (
    <YStack flex={1} backgroundColor="$background" position="relative">
      <YStack position="absolute">
        <BackgroudIllustration />
      </YStack>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: themes.light.gray9,
          tabBarStyle: {
            height: TABBAR_HEIGHT + insets.bottom,
            borderTopColor: 'transparent',
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            backgroundColor: config.tokens.color.tabBar.val,
          },
        }}
        sceneContainerStyle={{
          backgroundColor: 'transparent',
        }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabelStyle: {
              display: 'none',
            },
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <YStack flex={1} alignItems="center" justifyContent="flex-end" space="$3">
                <TabBarIcon name="house" color={color} />
                <Text color={color} fontSize="$1">
                  Home
                </Text>
                <YStack
                  width={focused ? 50 : 0}
                  height={4}
                  backgroundColor="white"
                  borderTopRightRadius={2}
                  borderTopLeftRadius={2}
                />
              </YStack>
            )
          }}
        />
        <Tabs.Screen
          name="market"
          options={{
            headerShown: false,
            tabBarLabelStyle: {
              display: 'none',
            },
            tabBarIcon: ({ color, focused }) => (
              <YStack flex={1} alignItems="center" justifyContent="flex-end" space="$3">
                <TabBarIcon name="chart-simple" color={color} />
                <Text color={color} fontSize="$1">
                  Market
                </Text>
                <YStack
                  width={focused ? 50 : 0}
                  height={4}
                  backgroundColor="white"
                  borderTopRightRadius={2}
                  borderTopLeftRadius={2}
                />
              </YStack>
            ),
          }}
        />
      </Tabs>
    </YStack>
  );
};
