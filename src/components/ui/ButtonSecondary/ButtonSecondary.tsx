import React from 'react';

import styles from './ButtonSecondary.module.scss';
interface ButtonSecondaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const ButtonSecondary = ({
  className = '',
  type = 'button',
  children,
  onClick,
  ...rest
}: ButtonSecondaryProps) => {
  const combinedClassName = [styles.buttonSecondary, className].filter(Boolean).join(' ');

  return (
    <button className={combinedClassName} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
