import React from 'react';
import styles from './ButtonPrimary.module.scss';

// 1. Описываем типы через встроенный тип React для кнопок.
// Это автоматически добавит типы для type, onClick, disabled, id и всех остальных стандартных атрибутов кнопки!
interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode; // Обязательно для текста или иконок внутри тега
    className?: string;        // Сделайте необязательным, так как есть значение по умолчанию
}

const ButtonPrimary = ({
        className = '',
        type = 'button',
        children,
        onClick,
        ...rest
    }: ButtonPrimaryProps) => { // 2. Указываем интерфейс типов для пропсов

    // Объединяем модульный класс кнопки и внешний className
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