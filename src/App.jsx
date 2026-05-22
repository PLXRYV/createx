import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage  from '/src/pages/Home/HomePage';
import EventsPage from '/src/pages/EventsList/EventsList';
import CourseDetails from "/src/pages/CourseDetails/CourseDetails";

import "/src/assets/style/style.scss";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/events" element={<EventsPage/>}/>
                <Route path="/courses" element={<CourseDetails/>}/>
            </Routes>
        </Router>
    )
}

export default App;