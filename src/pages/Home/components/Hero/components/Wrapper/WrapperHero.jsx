import Header from "/src/components/Header/Header";
import ButtonPrimary from "/src/components/ButtonPrimary/ButtonPrimary";
import Hero from "/src/components/Main/Hero";
import buttonStyles from "/src/components/ButtonPrimary/ButtonPrimary.module.scss";
import "/src/components/Main/main.scss"
import ButtonPrimaryMobile from "./ButtonPrimary/ButtonPrimaryMobile.jsx";


const WrapperHero = () => {
    const handleClick = () => {
        console.log("Get consultation button clicked");
    };

    return (
        <div className={styles.header__bg}>
            <Header
                button={
                    <ButtonPrimary
                        className={buttonStyles.buttonPrimary}
                        onClick={handleClick}
                    >
                        Get consultation
                    </ButtonPrimary>
                }
            />
            <Hero
                buttonPrimaryMobile={
                <ButtonPrimaryMobile
                    className='ButtonPrimaryMobile'
                    onClick={handleClick}
                >
                Get consultation
                </ButtonPrimaryMobile>
                }

                button={
                    <ButtonPrimary
                        className={buttonStyles.buttonPrimary}
                        onClick={handleClick}
                    >
                        Explore courses
                    </ButtonPrimary>
                }
            />
        </div>
    );
};

export default WrapperHero;