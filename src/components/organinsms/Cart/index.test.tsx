import { render } from '@test-utils';
import React from 'react';

import { Cart } from '.';

import { useCartStore } from '@/store';

jest.mock('@/store', () => ({
  useCartStore: jest.fn(),
}));

jest.mock('@/components/molecules/ListCart', () => {
  const { Text } = require('react-native');
  return {
    ListCart: () => <Text testID="list-cart">ListCart</Text>,
  };
});

jest.mock('../EmptyCart', () => {
  const { Text } = require('react-native');
  return {
    EmptyCart: () => <Text testID="empty-cart">EmptyCart</Text>,
  };
});

describe('Cart Component', () => {
  const setupMocks = (products: any[], count: number) => {
    (useCartStore as unknown as jest.Mock).mockReturnValue({ products, count });
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render Shopping Cart title', () => {
      setupMocks([], 0);
      const { getByText } = render(<Cart />);
      expect(getByText('Shopping Cart')).toBeTruthy();
    });

    describe('Rendering Icon FontAwesome', () => {
      it('should render FontAwesome icon correctly', () => {
        const { getByTestId, toJSON } = render(<Cart />);
        const icon = getByTestId('shopping-cart-icon');

        expect(toJSON()).toMatchSnapshot();

        expect(icon).toBeTruthy();
      });
    });

    it('should render ShoppingCart icon with given size and color', () => {
      setupMocks([], 0);
      const { getByTestId } = render(<Cart />);

      const icon = getByTestId('shopping-cart-icon');

      expect(icon.props.width).toBe(32);
      expect(icon.props.height).toBe(32);
      expect(icon.props.stroke).toBe('white');
      expect(icon.props.fill).toBe('white');
    });

    it('should render the item count if greater than 0', () => {
      setupMocks([], 5);
      const { getByText } = render(<Cart />);
      expect(getByText('5')).toBeTruthy();
    });
  });

  describe('Conditional Rendering', () => {
    it('should render ListCart if count is greater than 0', () => {
      const products = [{ name: 'Product 1' }, { name: 'Product 2' }];
      setupMocks(products, 2);
      const { getByTestId } = render(<Cart />);
      expect(getByTestId('list-cart')).toBeTruthy();
    });

    it('should render EmptyCart if count is 0', () => {
      setupMocks([], 0);
      const { getByTestId } = render(<Cart />);
      expect(getByTestId('empty-cart')).toBeTruthy();
    });
  });
});
