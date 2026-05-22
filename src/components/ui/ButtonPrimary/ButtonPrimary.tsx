import React from 'react';
import styles from './ButtonPrimary.module.scss';
interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

const ButtonPrimary = ({
        className = '',
        type = 'button',
        children,
        onClick,
        ...rest
    }: ButtonPrimaryProps) => {
    const combinedClassName = [
        styles.button,
        className
    ].filter(Boolean).join(' ');

    return (
        <button
            className={combinedClassName}
            type={type}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};

export default ButtonPrimary;