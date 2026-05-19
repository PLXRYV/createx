import Header from "/src/components/Header/Header";
import EventsRoad from "/src/pages/EventsPage/components/EventsRoad.jsx"
import Subscribe from "/src/components/Subscribe/Subscribe.jsx";
import Footer from "/src/components/Footer/Footer.jsx";
import Copyright from "/src/components/Copyright/Copyright.jsx";
import '/src/pages/style/style.scss'

const EventsPage = () => {
    return (
        <div>
            <Header/>
            <EventsRoad/>
            <Subscribe/>
            <Footer/>
            <Copyright/>
        </div>
    )
}

export default EventsPage;

