import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { TextInput, TextInputProps } from './TextInput';

const onTextChangeMock = jest.fn();

const PLACEHOLDER = 'Placeholder';
const TEXT = 'text';
const DEFAULT_PROPS: TextInputProps = {
  onTextChange: onTextChangeMock,
  placeholder: PLACEHOLDER,
  hasError: false,
};

test('given text input, when entering text, calls the on text change function correctly', () => {
  render(<TextInput {...DEFAULT_PROPS} />);

  const input = screen.getByPlaceholderText(PLACEHOLDER);
  fireEvent.change(input, { target: { value: TEXT } });

  expect(onTextChangeMock).toHaveBeenCalledWith(TEXT);
});

test('given text input, when entering text, displays the text correctly', () => {
  render(<TextInput {...DEFAULT_PROPS} />);

  const input = screen.getByPlaceholderText(PLACEHOLDER) as HTMLTextAreaElement;
  fireEvent.change(input, { target: { value: TEXT } });

  expect(input.value).toBe(TEXT);
});

test('given text input, when on error, displays the error class', () => {
  render(<TextInput {...DEFAULT_PROPS} hasError />);

  const input = screen.getByPlaceholderText(PLACEHOLDER);

  expect(input.className).toContain('shared-text-input-error');
});

test('given text input, when not on error, do not display the error class', () => {
  render(<TextInput {...DEFAULT_PROPS} hasError={false} />);

  const input = screen.getByPlaceholderText(PLACEHOLDER);

  expect(input.className).not.toContain('shared-text-input-error');
});
