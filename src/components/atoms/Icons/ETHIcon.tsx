import { FunctionComponent } from 'react';
import Svg, { SvgProps, Path, Rect, Defs, ClipPath, G } from 'react-native-svg';

export const ETH: FunctionComponent<SvgProps> = (props) => (
  <Svg width={45} height={45} fill="none" {...props}>
    <Rect width={45} height={43.25} y={0.875} fill="#00FFA3" rx={21.625} />
    <Rect width={32} height={32} x={6.5} y={6.5} fill="#00FFA3" rx={16} />
    <G clipPath="url(#a)">
      <Path fill="#343434" d="m22.498 10.5-.161.547v15.87l.16.16 7.367-4.355L22.498 10.5Z" />
      <Path fill="#8C8C8C" d="M22.498 10.5 15.13 22.723l7.367 4.354V10.5Z" />
      <Path fill="#3C3C3B" d="m22.498 28.471-.09.111v5.653l.09.265 7.37-10.38-7.37 4.351Z" />
      <Path fill="#8C8C8C" d="M22.498 34.5V28.47L15.13 24.12l7.367 10.38Z" />
      <Path fill="#141414" d="m22.498 27.077 7.366-4.355-7.366-3.348v7.703Z" />
      <Path fill="#393939" d="m15.132 22.723 7.366 4.354v-7.703l-7.367 3.349Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M10.5 10.5h24v24h-24z" />
      </ClipPath>
    </Defs>
  </Svg>
);
