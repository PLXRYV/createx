import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage  from '/src/pages/Homepage/HomePage';
import EventsPage from '/src/pages/Event/EventsPage';
import CoursePage from "/src/pages/Course/CoursePage.jsx";

import "/src/assets/style/style.scss";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/events" element={<EventsPage/>}/>
                <Route path="/courses" element={<CoursePage/>}/>
            </Routes>
        </Router>
    )
}

export default App;