import WrapperMain from "/src/components/WrapperMain";
import "/src/style/index.js"

function App() {
    const handleClick = () => {
        console.log("clicked");
    };

    return (
        <div>
            <WrapperMain/>
        </div>

    )
}

export default App;