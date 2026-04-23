import Header from "/src/components/Header"
import ButtonPrimary from "./src/components/ButtonPrimary/ButtonPrimary";
import ButtonStyles from "/src/components/ButtonPrimary/ButtonPrimary.module.scss";
import "/src/style/index.js"

function App() {
    const handleClick = () => {
        console.log("clicked");
    };

    return (
        <Header
            button={
                <ButtonPrimary
                    className={ButtonStyles.buttonPrimary}
                    onClick={handleClick}
                >
                    Get consultation
                </ButtonPrimary>
            }
        />
    )
}

export default App;