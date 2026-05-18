import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home  from '/src/pages/HomePage/Home';
import EventsPage from '/src/pages/EventsPage/EventsPage';
import "/src/style/index.js"
import CoursesPage from "/src/pages/CoursesPage/CoursesPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/events" element={<EventsPage/>}/>
                <Route path="/courses" element={<CoursesPage/>}/>
            </Routes>
        </Router>
    )
}

export default App;