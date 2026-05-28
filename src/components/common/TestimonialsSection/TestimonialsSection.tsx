import { ArrowLeft, ArrowRight, SliderProfileImage } from '@assets/images/common/testimonials';
import React, { useState } from 'react';

import styles from './Testimonials.module.scss';

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slidesData = [
    {
      name: 'Eleanor Pena',
      text: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.',
    },
    {
      name: 'Second Commit',
      text: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolor expedita illum inventore ipsam magni, mollitia nemo officiis quibusdam quis ratione sit tempore voluptatibus. Ab accusamus aliquam aperiam commodi consectetur debitis deleniti dolore ducimus eaque excepturi expedita libero magnam magni maiores nihil odio omnis optio perspiciatis placeat porro.',
    },
    {
      name: 'Third Commit',
      text: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid amet at beatae dicta eius eveniet exercitationem ipsum iure, laboriosam laborum minima molestiae mollitia nulla optio perspiciatis quam quasi quibusdam quod ratione repellat unde voluptates! Aut cumque dignissimos enim esse est.',
    },
    {
      name: 'Fourth Commit',
      text: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam commodi dicta distinctio, dolores, dolorum ex fugit nemo pariaturベース perspiciatis quo vel vitae!',
    },
    {
      name: 'Fifth Commit',
      text: 'Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, possimus!',
    },
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
            <button
              type="button"
              className={styles.testimonialsArrowLeft}
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ArrowLeft />
            </button>
            <div className={styles.sliderContainer}>
              <div className={styles.sliderContentBox}>
                <div className={styles.rectangleBox}>
                  <div className={styles.rectangle}></div>
                  <div className={styles.rectangle}></div>
                </div>
                <div className={styles.sliderItem}>
                  <div className={styles.sliderItemTextContainer}>
                    <p className={styles.sliderItemText}>{slidesData[currentSlide].text}</p>
                  </div>
                  <div className={styles.sliderItemProfile}>
                    <img
                      src={SliderProfileImage}
                      alt={`${slidesData[currentSlide].name} profile`}
                      className={styles.sliderProfileImg}
                    />
                    <p className={styles.sliderProfileName}>
                      <span>{slidesData[currentSlide].name}</span>
                      Position, Course
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className={styles.testimonialsArrowRight}
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ArrowRight />
            </button>
          </div>
          <div className={styles.testimonialsRectangles}>
            {slidesData.map((_, index) => (
              <button
                key={index}
                type="button"
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
