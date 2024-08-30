import { render } from '@testing-library/react-native';
import React from 'react';
import { TamaguiProvider } from 'tamagui';

import config from '@/theme/tamagui.config';

const AllTheProviders = ({ children }) => {
  return <TamaguiProvider config={config}>{children}</TamaguiProvider>;
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';

export { customRender as render };
