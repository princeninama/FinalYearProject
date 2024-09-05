
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import CampusMap from "./Components/Map";
import EventCalendar from "./Components/Event";
import ProfessorProfiles from "./Components/Prof";
import FeedbackForm from "./Components/Feedback";
import ResourceLibrary from "./Components/Resource";
import NewsUpdates from "./Components/News";
import ChatBot from "./Components/Chatbot";


function App() {

  return (
    <div>
      {/* Hello */}
      <Dashboard/>
    <Routes>
        <Route path="/map" element={<CampusMap />} />
        <Route path="/events" element={<EventCalendar />} />
        <Route path="/professors" element={<ProfessorProfiles />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/resources" element={<ResourceLibrary />} />
        <Route path="/news" element={<NewsUpdates />} />
        <Route path="/chatbot" element={<ChatBot />} />

      </Routes>
    </div>
  )
}

export default App
