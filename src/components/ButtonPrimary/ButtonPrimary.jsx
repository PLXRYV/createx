import styles from './ButtonPrimary.module.scss';

const ButtonPrimary = ({
    className = '',
    type = 'button',
    children,
    onClick,
    ...rest
}) => {
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