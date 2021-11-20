import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Button, ButtonProps } from './Button';

const onClickMock = jest.fn();

const LABEL = 'Label';
const DEFAULT_PROPS: ButtonProps = {
  onClick: onClickMock,
  label: LABEL,
};

test('given button, when clicking it, calls the on click function correctly', () => {
  render(<Button {...DEFAULT_PROPS} />);

  const input = screen.getByText(LABEL);
  fireEvent.click(input);

  expect(onClickMock).toHaveBeenCalled();
});
