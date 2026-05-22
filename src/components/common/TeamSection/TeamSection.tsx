import React, { useState, useEffect, useRef } from 'react';
import styles from './Team.module.scss';

import tutorImg1 from '../../../assets/images/common/images/team/team_image-1.png';
import tutorImg2 from '../../../assets/images/common/images/team/team_image-2.png';
import tutorImg3 from '../../../assets/images/common/images/team/team_image-3.png';
import tutorImg4 from '../../../assets/images/common/images/team/team_image-4.png';

import facebookIcon from '../../../assets/images/common/images/team/Facebook.svg';
import instagramIcon from '../../../assets/images/common/images/team/Instagram.svg';
import linkedInIcon from '../../../assets/images/common/images/team/Linked-In.svg';

const TUTORS_DATA = [
    { id: 1, name: "Dianne Russell", role: "Founder and CEO", img: tutorImg1 },
    { id: 2, name: "Jerome Bell", role: "Founder and Program Director", img: tutorImg2 },
    { id: 3, name: "Kristin Watson", role: "Marketer, Curator of Marketing Course", img: tutorImg3 },
    { id: 4, name: "Marvin McKinney", role: "PM, Curator of Management Course", img: tutorImg4 },
    { id: 5, name: "Marvin McKinney", role: "PM, Curator of Management Course", img: tutorImg4 },
    { id: 6, name: "Marvin McKinney", role: "PM, Curator of Management Course", img: tutorImg4 },
];

const TeamSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [itemsPerView, setItemsPerView] = useState<number>(4);
    const listRef = useRef<HTMLDivElement>(null);

    const totalItems = TUTORS_DATA.length;
    const gap = 20;
    const updateItemsPerView = () => {
        if (!listRef.current || !listRef.current.parentElement) return;

        const containerWidth = listRef.current.parentElement.offsetWidth;
        const firstItem = listRef.current.firstElementChild as HTMLElement;
        const itemWidth = firstItem ? firstItem.offsetWidth : 300;

        let calculatedViews = Math.floor(containerWidth / itemWidth);
        calculatedViews = Math.max(1, Math.min(4, calculatedViews));

        setItemsPerView(calculatedViews);
    };

    useEffect(() => {
        updateItemsPerView();

        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    const maxIndex = Math.max(0, totalItems - itemsPerView);
    const safeIndex = Math.min(currentIndex, maxIndex);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const getTranslateX = () => {
        if (!listRef.current) return 0;
        const firstItem = listRef.current.firstElementChild as HTMLElement;
        const itemWidth = firstItem ? firstItem.offsetWidth : 300;
        return -(safeIndex * (itemWidth + gap));
    };

    return (
        <section className={styles.teamAndTestimonials}>
            <div className="container">
                <div className={styles.teamContainer}>
                    <div className={styles.teamHeader}>
                        <div className={styles.teamHeaderTitleBox}>
                            <p className={styles.teamHeaderSubtitle}>BEST TUTORS ARE ALL HERE</p>
                            <h2 className={styles.teamHeaderTitle}>Meet our team</h2>
                        </div>

                        <div className={styles.teamArrows}>
                            <button
                                type="button"
                                className={styles.teamArrowLeft}
                                onClick={prevSlide}
                                disabled={safeIndex === 0}
                                aria-label="Previous tutors"
                            >
                                <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://w3.org">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.20711 10.7071C5.81658 11.0976 5.18342 11.0976 4.79289 10.7071L0.292892 6.20711C-0.0976315 5.81658 -0.0976315 5.18342 0.292892 4.79289L4.79289 0.292893C5.18342 -0.0976315 5.81658 -0.0976315 6.20711 0.292893C6.59763 0.683417 6.59763 1.31658 6.20711 1.70711L3.41421 4.5L17 4.5C17.5523 4.5 18 4.94772 18 5.5C18 6.05228 17.5523 6.5 17 6.5L3.41421 6.5L6.20711 9.29289C6.59763 9.68342 6.59763 10.3166 6.20711 10.7071Z" fill="#424551"/>
                                </svg>
                            </button>
                            <button
                                type="button"
                                className={styles.teamArrowRight}
                                onClick={nextSlide}
                                disabled={safeIndex >= maxIndex}
                                aria-label="Next tutors"
                            >
                                <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://w3.org">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.7929 0.292893C12.1834 -0.0976311 12.8166 -0.0976311 13.2071 0.292893L17.7071 4.79289C18.0976 5.18342 18.0976 5.81658 17.7071 6.20711L13.2071 10.7071C12.8166 11.0976 12.1834 11.0976 11.7929 10.7071C11.4024 10.3166 11.4024 9.68342 11.7929 9.29289L14.5858 6.5H1C0.447715 6.5 0 6.05228 0 5.5C0 4.94772 0.447715 4.5 1 4.5H14.5858L11.7929 1.70711C11.4024 1.31658 11.4024 0.683417 11.7929 0.292893Z" fill="#424551"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={styles.teamNavigation}>
                        <div
                            ref={listRef}
                            className={styles.teamNavigationList}
                            style={{ transform: `translateX(${getTranslateX()}px)` }}
                        >
                            {TUTORS_DATA.map((tutor) => (
                                <div key={tutor.id} className={styles.teamNavigationItem}>
                                    <div className={styles.teamNavigationItemImages}>
                                        <img className={styles.teamImage} src={tutor.img} alt={tutor.name}/>

                                        <div className={styles.teamSocialOverlay}>
                                            <a href="#" className={styles.teamSocialLink}>
                                                <img className={styles.teamSocial} src={facebookIcon} alt="Facebook"/>
                                            </a>
                                            <a href="#" className={styles.teamSocialLink}>
                                                <img className={styles.teamSocial} src={instagramIcon} alt="Instagram"/>
                                            </a>
                                            <a href="#" className={styles.teamSocialLink}>
                                                <img className={styles.teamSocial} src={linkedInIcon} alt="LinkedIn"/>
                                            </a>
                                        </div>
                                    </div>
                                    <p className={styles.teamImageCaption}>
                                        <span>{tutor.name}</span>
                                        {tutor.role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
