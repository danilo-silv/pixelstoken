import { ComponentProps } from 'react';
import { Button } from 'tamagui';

export type ButtonProps = {
  title: string;
} & ComponentProps<typeof Button>;
