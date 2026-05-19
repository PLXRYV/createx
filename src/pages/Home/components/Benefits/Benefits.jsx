import styles from './Benefits.module.scss';

const Benefits = () => {
    return (
        <section className={styles.benefits}>
            <div className={styles.container}>
                <div className={styles.benefits__container}>
                    <div className={styles.benefits__header}>
                        <h6 className={styles.benefits__header-text}>
                            <span>OUR BENEFITS</span>
                            That’s how we do it
                        </h6>
                    </div>
                    <div className={styles.benefits__navigation}>
                        <nav className={styles.benefits__navigation-bar}>
                            <button className={styles.benefits__navigation-link active} data-target="tutors">
                                <img className={styles.navigation-link__icon} src="/src/assets/images/icons/tutors.svg" alt="Tutors icon svg"/>
                                Experienced Tutors
                            </button>
                            <button className={styles.benefits__navigation-link} data-target="feedback">
                                <img className={styles.navigation-link__icon} src="/src/assets/images/icons/feedback.svg" alt="Feedback icon svg"/>
                                Feedback & Support
                            </button>
                            <button className={styles.benefits__navigation-link} data-target="library">
                                <img className={styles.navigation-link__icon} src="/src/assets/images/icons/library.svg" alt="Library icon svg"/>
                                24/7 Online Library
                            </button>
                            <button className={styles.benefits__navigation-link} data-target="community">
                                <img className={styles.navigation-link__icon} src="/src/assets/images/icons/community.svg" alt="Community icon svg"/>
                                Community
                            </button>
                        </nav>
                    </div>
                    <div className={styles.benefits__content active benefits__content-tutors}>
                        <div className={styles.benefits__content-box}>
                            <p className={styles.benefits__content-text}>
                                <span>Only practicing tutors</span>
                                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse.
                                Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam
                                mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim
                                massa ut amet. Amet enim, nisi tempus vehicula.
                            </p>
                        </div>
                        <div>
                            <img src="/src/assets/images/benefits/benefits_illustration.jpg" alt="Benefits image"/>
                        </div>
                    </div>
                    <div className={styles.benefits__content benefits__content-feedback}>
                        <div>
                            <img src="/src/assets/images/benefits/benefits_illustration-support.jpg" alt="Benefits image"/>
                        </div>
                        <div className={styles.benefits__content-box}>
                            <p className={styles.benefits__content-text}>
                                <span>Feedback & Support</span>
                                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse.
                                Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam
                                mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim
                                massa ut amet. Amet enim, nisi tempus vehicula.
                            </p>
                        </div>
                    </div>
                    <div className={styles.benefits__content benefits__content-library}>
                        <div className={styles.benefits__content-box}>
                            <p className={styles.benefits__content-text}>
                                <span>Online Library</span>
                                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse.
                                Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam
                                mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim
                                massa ut amet. Amet enim, nisi tempus vehicula.
                            </p>
                        </div>
                        <div>
                            <img src="/src/assets/images/benefits/benefits_illustration-support.jpg" alt="Benefits image"/>
                        </div>
                    </div>
                    <div className={styles.benefits__content benefits__content-community}>
                        <div>
                            <img src="/src/assets/images/benefits/benefits_illustration-support.jpg" alt="Benefits image"/>
                        </div>
                        <div className={styles.benefits__content-box}>
                            <p className={styles.benefits__content-text}>
                                <span>Community</span>
                                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse.
                                Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam
                                mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim
                                massa ut amet. Amet enim, nisi tempus vehicula.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

{
//
// document.addEventListener('click', (event) => {
//     const buttonBenefitsElement = event.target.closest('.benefits__navigation-link')
//
//     if (buttonBenefitsElement) {
//         const target = buttonBenefitsElement.getAttribute('data-target')
//         if (!target) return
//
//         document.querySelectorAll('.benefits__navigation-link').forEach(btn => {
//             btn.classList.remove('active')
//         })
//
//         document.querySelectorAll('.benefits__content').forEach(block => {
//             block.style.display = 'none'
//         })
//
//         const targetBlock = document.querySelector(`.benefits__content-${target}`)
//         if (targetBlock) {
//             targetBlock.style.display = 'flex'
//         }
//
//         buttonBenefitsElement.classList.add('active')
//     }
// })
//
// document.addEventListener('DOMContentLoaded', function() {
//     const navbarBtns = document.querySelector('.benefits__navigation-bar');
//
//     function activateBlock(event) {
//         const target = event.target;
//
//         const btnTarget = target.closest('.benefits__navigation-link');
//         if (!btnTarget || btnTarget.classList.contains('benefits__navigation-link--active')) return;
//
//         navbarBtns.querySelector('.benefits__navigation-link--active').classList.remove('benefits__navigation-link--active');
//         btnTarget.classList.add('benefits__navigation-link--active');
//
//         const targetDataAttribute = btnTarget.getAttribute('data-target');
//
//         document.querySelector('.benefits__content--active').classList.remove('benefits__content--active');
//         document.querySelector(`.benefits__content-${targetDataAttribute}`).classList.add('benefits__content--active');
//     }
//
//     navbarBtns.addEventListener('click', activateBlock);
// });
}

export default Benefits;