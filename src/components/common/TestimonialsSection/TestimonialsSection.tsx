import React, { useState } from 'react';
import styles from './Testimonials.module.scss';

import profileImg from '../../../assets/images/common/images/testimonials/slider_profile-image.png';

const TestimonialsSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slidesData = [
        {
            name: "Eleanor Pena",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in."
        },
        {
            name: "Second Commit",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolor expedita illum inventore ipsam magni, mollitia nemo officiis quibusdam quis ratione sit tempore voluptatibus. Ab accusamus aliquam aperiam commodi consectetur debitis deleniti dolore ducimus eaque excepturi expedita libero magnam magni maiores nihil odio omnis optio perspiciatis placeat porro."
        },
        {
            name: "Third Commit",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid amet at beatae dicta eius eveniet exercitationem ipsum iure, laboriosam laborum minima molestiae mollitia nulla optio perspiciatis quam quasi quibusdam quod ratione repellat unde voluptates! Aut cumque dignissimos enim esse est."
        },
        {
            name: "Fourth Commit",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam commodi dicta distinctio, dolores, dolorum ex fugit nemo pariaturベース perspiciatis quo vel vitae!"
        },
        {
            name: "Fifth Commit",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, possimus!"
        }
    ];

    const totalSlides = slidesData.length;
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className={styles.testimonialsSection}>
            <div className="container">
                <div className={styles.testimonialsContainer}>

                    <div className={styles.testimonialsHeader}>
                        <p className={styles.testimonialsHeaderSubtitle}>TESTIMONIALS</p>
                        <h2 className={styles.testimonialsHeaderTitle}>What our students say</h2>
                    </div>

                    <div className={styles.testimonialsContent}>
                        <button type="button" className={styles.testimonialsArrowLeft} onClick={prevSlide} aria-label="Previous slide">
                            <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://w3.org">
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.20711 10.7071C5.81658 11.0976 5.18342 11.0976 4.79289 10.7071L0.292892 6.20711C-0.0976315 5.81658 -0.0976315 5.18342 0.292892 4.79289L4.79289 0.292893C5.18342 -0.0976315 5.81658 -0.0976315 6.20711 0.292893C6.59763 0.683417 6.59763 1.31658 6.20711 1.70711L3.41421 4.5L17 4.5C17.5523 4.5 18 4.94772 18 5.5C18 6.05228 17.5523 6.5 17 6.5L3.41421 6.5L6.20711 9.29289C6.59763 9.68342 6.59763 10.3166 6.20711 10.7071Z" fill="#424551"/>
                            </svg>
                        </button>
                        <div className={styles.sliderContainer}>
                            <div className={styles.sliderContentBox}>
                                <div className={styles.rectangleBox}>
                                    <div className={styles.rectangle}></div>
                                    <div className={styles.rectangle}></div>
                                </div>
                                <div className={styles.sliderItem}>
                                    <div className={styles.sliderItemTextContainer}>
                                        <p className={styles.sliderItemText}>
                                            {slidesData[currentSlide].text}
                                        </p>
                                    </div>
                                    <div className={styles.sliderItemProfile}>
                                        <img src={profileImg} alt={`${slidesData[currentSlide].name} profile`} />
                                        <p className={styles.sliderProfileName}>
                                            <span>{slidesData[currentSlide].name}</span>
                                            Position, Course
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" className={styles.testimonialsArrowRight} onClick={nextSlide} aria-label="Next slide">
                            <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://w3.org">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.7929 0.292893C12.1834 -0.0976311 12.8166 -0.0976311 13.2071 0.292893L17.7071 4.79289C18.0976 5.18342 18.0976 5.81658 17.7071 6.20711L13.2071 10.7071C12.8166 11.0976 12.1834 11.0976 11.7929 10.7071C11.4024 10.3166 11.4024 9.68342 11.7929 9.29289L14.5858 6.5H1C0.447715 6.5 0 6.05228 0 5.5C0 4.94772 0.447715 4.5 1 4.5H14.5858L11.7929 1.70711C11.4024 1.31658 11.4024 0.683417 11.7929 0.292893Z" fill="#424551"/>
                            </svg>
                        </button>
                    </div>
                    <div className={styles.testimonialsRectangles}>
                        {slidesData.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                // Если индекс совпадает с текущим слайдом, добавляем класс модификатора (opacity: 1)
                                className={`${styles.rectangleHorizon} ${index === currentSlide ? styles.rectangleHorizonModification : ''}`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
