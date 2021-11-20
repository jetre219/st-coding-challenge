import './Button.css';

import React from 'react';

export type ButtonProps = {
  onClick: () => void;
  label: string;
  width?: number;
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  width = 200,
}) => {
  return (
    <button onClick={onClick} className="shared-button" style={{ width }}>
      {label}
    </button>
  );
};
