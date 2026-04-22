import Header from "/src/components/Header"
import ButtonPrimary from "./src/components/ButtonPrimary/ButtonPrimary";
import buttonPrimaryStyle from "./src/components/ButtonPrimary/ButtonPrimary.module.scss";
import "/src/style/index.js"

function App() {
    const handleClick = () => {
        console.log("clicked");
    };

    return (
        <Header
            button={
                <ButtonPrimary
                    className={buttonStyles.buttonPrimary} // имя класса из SCSS
                    onClick={handleClick}
                >
                    Войти в аккаунт
                </ButtonPrimary>
            }
        />
    )
}

export default App;