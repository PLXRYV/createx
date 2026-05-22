import React from "react";
import Header from '../../components/common/Header/Header';
import Subscribe from '../../components/common/Subscribe/Subscribe';
import Footer from '../../components/common/Footer/Footer';
import EventsRoad from './EventsRoad';
import '../../assets/style/style.scss';

const EventsList: React.FC = () => {
    return (
        <div>
            <Header/>
            <EventsRoad/>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default EventsList;

