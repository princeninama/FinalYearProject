import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import CampusMap from "./Components/Map";
import EventCalendar from "./Components/Event";
import ProfessorProfiles from "./Components/Prof";
import FeedbackForm from "./Components/Feedback";
import ResourceLibrary from "./Components/Resource";
import NewsUpdates from "./Components/News";
import BTech from "./Components/B_Tech";
import Home from "./Components/Home";

function App() {
  return (
   
    <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="map" element={<CampusMap />} />
        <Route path="events" element={<EventCalendar />} />
        <Route path="professors" element={<ProfessorProfiles />} />
        <Route path="feedback" element={<FeedbackForm />} />
        <Route path="resources" element={<ResourceLibrary />} />
        <Route path="news" element={<NewsUpdates />} />
        <Route path="btech" element={<BTech />} />
       
    </Routes>
  );
}

export default App;
