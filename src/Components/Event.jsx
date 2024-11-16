
import React from 'react';

const events = [
  { date: 'May 2023', title: 'Git and GitHub Workshop', description: 'Git and GitHub Workshop designed for junior participants to teach them the basics of version control using Git and collaboration using GitHub. The lab provides hands-on experience to help participants get started with tracking changes in their projects, collaborating with others, and understanding the fundamentals of Git and GitHub.' },
  { date: 'September 2023', title: 'Teachers Day Celebration', description: 'Teachers Day Celebration is a special event organized by the CSE department to honor and appreciate the hard work and dedication of our esteemed faculty members. On this day, students come together to express their gratitude through various activities, performances, and heartfelt messages. Its a day to celebrate the invaluable contributions of our teachers in shaping the future of CSE students' },
  { date: 'Every Sunday', title: 'CodeSprint', description: 'CodeSprint by Nexus is a fast-paced coding contest for CSE students. It challenges participants with time-bound algorithmic problems, promoting skill enhancement and problem-solving. Emphasizing competitiveness and learning, it encourages practice on platforms like LeetCode. CodeSprint provides a platform for students to showcase coding prowess and improve problem-solving abilities.' },
  { date: 'September 2023', title: 'Fiesta', description: 'Fiesta is an exciting sport event organized for the entire CSE department. It brings together students for a day of indoor and outdoor sports, fostering a spirit of camaraderie and friendly competition. Participants can engage in various sports activities, promoting physical fitness and team-building. Fiesta is not just a sports event; its a celebration of athleticism and community within the CSE department.' },
  { date: 'October 2024', title: 'Test', description: 'Testing' },
  { date: 'June-July 2023', title: 'Web Wonder', description: 'Web Wonder is an event organized during the summer for 2nd-year students. Participants are required to showcase their web development skills by creating and presenting websites. Dedicated mentors are provided to guide and support the students in their projects. Its an excellent opportunity for students to enhance their web development abilities and gain valuable hands-on experience.' },
];

const Events = () => {
  return (
    <div>
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

export default Events;