import Header from "/src/components/Header";
import ButtonPrimary from "/src/components/ButtonPrimary/ButtonPrimary";
import Main from "/src/components/Main/Main";
import buttonStyles from "/src/components/ButtonPrimary/ButtonPrimary.module.scss";
import "/src/components/Main/main.scss"
import ButtonPrimaryMobile from "./ButtonPrimary/ButtonPrimaryMobile.jsx";


const WrapperMain = () => {
    const handleClick = () => {
        console.log("Get consultation button clicked");
    };

    return (
        <div className="header__bg">
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
            <Main
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

export default WrapperMain;