import { render } from '@test-utils';
import React from 'react';
import { TamaguiProvider, Text } from 'tamagui';

import { Container } from '.';

import config from '@/theme/tamagui.config';

describe('Container Component', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <TamaguiProvider config={config}>
        <Container>
          <Text>Test Child</Text>
        </Container>
      </TamaguiProvider>
    );

    expect(getByText('Test Child')).toBeTruthy();
  });
});
