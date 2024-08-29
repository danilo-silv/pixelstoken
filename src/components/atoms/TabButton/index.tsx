import { useState } from 'react';
import { LayoutChangeEvent, Pressable } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Text, View, XStack } from 'tamagui';

import config from '@/theme/tamagui.config';

export type TabButtonType = {
  title: string;
};

export type TabButtonProps = {
  buttons: TabButtonType[];
  selectedTab: number;
  setSelectedTab: (index: number) => void;
};

export const TabButton = ({ buttons, selectedTab, setSelectedTab }: TabButtonProps) => {
  const [dimensions, setDimensions] = useState({ height: 20, width: 100 });

  const buttonWidth = dimensions.width / buttons.length;
  const buttonHeight = dimensions.height - 10;

  const tabPositionX = useSharedValue(0);

  const onTabLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const handlePress = (index: number) => {
    setSelectedTab(index);
  };

  const onTabPress = (index: number) => {
    const timing = buttonWidth * index;
    tabPositionX.value = withTiming(timing, {}, () => {
      runOnJS(handlePress)(index);
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  return (
    <View accessibilityRole="tabbar" bg="$blue12Light" borderRadius={50} justifyContent="center">
      <Animated.View
        style={[
          animatedStyle,
          {
            position: 'absolute',
            backgroundColor: config.tokens.color.blue11Light.val,
            borderRadius: 50,
            marginHorizontal: 5,
            height: buttonHeight,
            width: buttonWidth - 10,
          },
        ]}
      />
      <XStack onLayout={onTabLayout}>
        {buttons.map((button, idx) => {
          const color = selectedTab === idx ? 'white' : config.tokens.color.gray8Light.val;

          return (
            <Pressable
              key={`tab-bar-button-${idx}`}
              onPress={() => onTabPress(idx)}
              style={{
                flex: 1,
                paddingVertical: 20,
              }}>
              <Text
                color={color}
                alignSelf="center"
                fontWeight={600}
                fontSize={16}
                letterSpacing={0.32}>
                {button.title}
              </Text>
            </Pressable>
          );
        })}
      </XStack>
    </View>
  );
};
