import { render } from '@test-utils';

import { User } from '../User';

describe('User Component', () => {
  describe('Render', () => {
    it('should match snapshot', () => {
      const { toJSON } = render(<User />);
      expect(toJSON()).toMatchSnapshot();
    });

    describe('Texts', () => {
      it('should render the greeting text', () => {
        const { getByText } = render(<User />);
        expect(getByText('Hello,')).toBeTruthy();
      });

      it('should render the username text', () => {
        const { getByText } = render(<User />);
        expect(getByText('Danilo')).toBeTruthy();
      });
    });

    describe('Avatar', () => {
      it('should render the avatar image with correct src', () => {
        const { getByTestId } = render(<User />);
        const avatarImage = getByTestId('avatar-image');
        expect(avatarImage.props.source.uri).toBe(
          'https://ca.slack-edge.com/THQS6JHC1-U072Q9RBV1T-f48dbe97c1e5-512'
        );
      });
    });

    describe('Linear Gradient', () => {
      it('should render the gradient with correct colors', () => {
        const { getByTestId } = render(<User />);
        const gradient = getByTestId('gradient');

        expect(gradient.props.colors).toEqual([4278910870, 4278247679]);
      });

      it('should set the gradient start position correctly', () => {
        const { getByTestId } = render(<User />);
        const gradient = getByTestId('gradient');
        expect(gradient.props.startPoint).toEqual([0, 0]);
      });

      it('should set the gradient end position correctly', () => {
        const { getByTestId } = render(<User />);
        const gradient = getByTestId('gradient');
        expect(gradient.props.endPoint).toEqual([1, 1]);
      });

      it('should apply the correct linear gradient style', () => {
        const { getByTestId } = render(<User />);
        const gradient = getByTestId('gradient');
        expect(gradient.props.style).toEqual({
          padding: 3,
          borderRadius: 50,
        });
      });
    });
  });
});
