import { forwardRef } from 'react';
import { TamaguiElement, Button as TButton } from 'tamagui';

import { ButtonProps } from './types';

export const Button = forwardRef<TamaguiElement, ButtonProps>(({ title, ...tButtonProps }, ref) => {
  return (
    <TButton {...tButtonProps} ref={ref}>
      {title}
    </TButton>
  );
});
