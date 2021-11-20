import './TextInput.css';

import React from 'react';

export type TextInputProps = {
  placeholder: string;
  onTextChange: (text: string) => void;
  hasError: boolean;
};

export const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  onTextChange,
  hasError,
}) => {
  return (
    <textarea
      className={`shared-text-input ${
        hasError ? 'shared-text-input-error' : ''
      }`}
      onChange={(event) => onTextChange(event.target.value)}
      placeholder={placeholder}
    />
  );
};
