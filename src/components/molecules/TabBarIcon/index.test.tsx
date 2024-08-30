import { render } from '@testing-library/react-native';

import { TabBarIcon } from '../TabBarIcon';

jest.mock('@expo/vector-icons/FontAwesome6', () => 'FontAwesome');

describe('TabBarIcon Component', () => {
  describe('Rendering', () => {
    it('should render FontAwesome icon correctly with given name and color', () => {
      const { getByTestId, toJSON } = render(<TabBarIcon name="home" color="blue" />);
      const icon = getByTestId('tab-bar-icon');

      expect(toJSON()).toMatchSnapshot();

      expect(icon).toBeTruthy();
    });
  });

  describe('Styles', () => {
    it('should apply correct styles to the icon', () => {
      const { toJSON } = render(<TabBarIcon name="home" color="blue" />);
      const tree = toJSON();

      expect(tree.props.style).toEqual(expect.objectContaining({ marginBottom: -3 }));
    });
  });
});
