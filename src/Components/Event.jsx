
import React from 'react';

const events = [
  { date: '2023-10-10', title: 'Open Day', description: 'Explore the campus!' },
  { date: '2023-10-20', title: 'Guest Lecture', description: 'Special guest speaker.' },
];

const EventCalendar = () => {
  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.date}</strong>: {event.title} - {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventCalendar;