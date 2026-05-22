import { useEffect } from 'react';
import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps {
    isOpen: boolean;
    onToggle: () => void;
}

const BurgerMenu = ({ isOpen, onToggle }: BurgerMenuProps) => {

    useEffect(() => {
        const body = document.body;
        if (isOpen) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
        return () => body.classList.remove('no-scroll');
    }, [isOpen]);

    return (
        <button
            className={`${styles.burger} ${isOpen ? styles.burgerActive : ''}`}
            onClick={onToggle}
            aria-label="Toggle menu"
        >
            <div className={styles.burgerBtnAction}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
    );
};

export default BurgerMenu;