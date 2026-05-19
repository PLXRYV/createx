import WrapperHome from "/src/components/WrapperHome";
import About from "/src/components/About/About";
import Courses from "/src/components/Courses/Courses";
import Benefits from "/src/components/Benefits/Benefits";
import Events from "/src/components/Events/Events.jsx"
import Certificate from "/src/components/Certificate/Certificate";
import Team from "/src/components/Team/Team";
import Testimonials from "/src/components/Testimonials/Testimonials";
import Blog from "/src/components/Blog/Blog";
import Subscribe from "/src/components/Subscribe/Subscribe";
import Footer from "/src/components/Footer/Footer";
import Copyright from "/src/components/Copyright/Copyright";

const HomePage = () => {
    return (
        <div>
            <WrapperHome/>
            <About/>
            <Courses/>
            <Benefits/>
            <Events/>
            <Certificate/>
            <Team/>
            <Testimonials/>
            <Blog/>
            <Subscribe/>
            <Footer/>
            <Copyright/>
        </div>
    )
}

export default HomePage;