import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Image, Sheet, Text, XStack, YStack } from 'tamagui';

import { NFTData } from '@/hooks/useGetProducts/types';
import config from '@/theme/tamagui.config';

interface SheetBuyProductType {
  isOpen: boolean;
  product?: NFTData;
}

export const SheetBuyProduct = ({ isOpen, product }: SheetBuyProductType) => {
  const [position, setPosition] = useState(0);
  const [open, setOpen] = useState(isOpen);
  const snapPoints = ['100%'];

  const screenwidth = Dimensions.get('window').width;

  return (
    <Sheet
      forceRemoveScrollEnabled={open}
      modal={false}
      open={open}
      onOpenChange={setOpen}
      snapPoints={snapPoints}
      snapPointsMode="mixed"
      dismissOnSnapToBottom
      position={position}
      onPositionChange={setPosition}
      zIndex={100_000}
      animation="quick">
      <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />

      <Sheet.Handle />
      <Sheet.Frame>
        <YStack>
          <Image
            source={{
              uri: product?.image ?? '',
              width: screenwidth,
              height: 400,
            }}
          />

          <YStack pt={10} px={10} space={6}>
            <Text
              color="white"
              fontSize={24}
              fontWeight={600}
              letterSpacing={0.32}
              borderBottomWidth={1}>
              {product?.name}
            </Text>
            <Text
              color="white"
              fontSize={16}
              fontWeight={600}
              letterSpacing={0.32}
              borderBottomWidth={1}>
              owner: {product?.creator}
            </Text>
            <XStack justifyContent="space-between" alignItems="center">
              <Text color="white" fontSize={16} fontWeight={700} letterSpacing={0.32}>
                {product?.description}
              </Text>

              <XStack alignItems="center" space={4}>
                <FontAwesome
                  name="ethereum"
                  size={24}
                  color={config.tokens.color.green10Light.val}
                />
                <Text color="$green10Light" fontSize={24} fontWeight={700} letterSpacing={0.32}>
                  {product?.valuation}
                </Text>
              </XStack>
            </XStack>

            <YStack alignItems="center" pt={34}>
              <LinearGradient
                colors={['#0061FF', '#6100FF']}
                start={[0, 0]}
                end={[1, 1]}
                style={{
                  padding: 3,
                  borderRadius: 50,
                  width: 250,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'transparent',
                    borderRadius: 50,
                    padding: 16,
                    alignItems: 'center',
                  }}>
                  <Text color="white" fontWeight={700} fontSize={24}>
                    Buy
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </YStack>
          </YStack>
        </YStack>
      </Sheet.Frame>
    </Sheet>
  );
};
