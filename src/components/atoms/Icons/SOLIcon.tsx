import Svg, {
  SvgProps,
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

export const SOL = (props: SvgProps) => (
  <Svg width={45} height={45} fill="none" {...props}>
    <Rect width={45} height={43.25} y={0.875} fill="#CFFFF3" rx={21.625} />
    <Rect width={32} height={32} x={6.5} y={6.5} fill="#CFFFF3" rx={16} />
    <G clipPath="url(#a)">
      <Path
        fill="#CFFFF3"
        d="M34.14 25.403c-1.603 6.428-8.114 10.34-14.544 8.738-6.426-1.603-10.339-8.114-8.735-14.543 1.602-6.429 8.113-10.342 14.54-8.739 6.43 1.603 10.341 8.115 8.738 14.544Z"
      />
      <G clipPath="url(#b)">
        <Path
          fill="url(#c)"
          d="M18.573 25.132a.417.417 0 0 1 .295-.122H29.05c.186 0 .279.225.147.356l-2.012 2.012a.417.417 0 0 1-.295.122H16.71a.209.209 0 0 1-.148-.356l2.012-2.012Z"
        />
        <Path
          fill="url(#d)"
          d="M18.573 17.622a.429.429 0 0 1 .295-.122H29.05c.186 0 .279.225.147.356l-2.012 2.012a.417.417 0 0 1-.295.122H16.71a.209.209 0 0 1-.148-.356l2.012-2.012Z"
        />
        <Path
          fill="url(#e)"
          d="M27.186 21.353a.417.417 0 0 0-.295-.122H16.71a.209.209 0 0 0-.148.356l2.012 2.012a.417.417 0 0 0 .295.122H29.05c.186 0 .279-.225.147-.356l-2.012-2.012Z"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={28.078}
        x2={21.03}
        y1={16.298}
        y2={29.797}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#00FFA3" />
        <Stop offset={1} stopColor="#DC1FFF" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={24.996}
        x2={17.949}
        y1={14.69}
        y2={28.188}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#00FFA3" />
        <Stop offset={1} stopColor="#DC1FFF" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={26.527}
        x2={19.48}
        y1={15.489}
        y2={28.987}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#00FFA3" />
        <Stop offset={1} stopColor="#DC1FFF" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M10.5 10.5h24v24h-24z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M16.5 17.5h12.759v10H16.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
