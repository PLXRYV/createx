import WrapperMain from "/src/components/WrapperMain";
import About from "/src/components/About/About";
import "/src/style/index.js"

function App() {
    const handleClick = () => {
        console.log("clicked");
    };

    return (
        <div>
            <WrapperMain/>
            <About />
        </div>

    )
}

export default App;