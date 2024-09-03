
import React from 'react';

const professors = [
  { name: 'Dr. John Doe', title: 'Professor of Computer Science', bio: 'Expert in AI and Machine Learning.' },
  { name: 'Dr. Jane Smith', title: 'Professor of Mathematics', bio: 'Focus on Algebraic Structures.' },
];

const ProfessorProfiles = () => {
  return (
    <div>
      <h2>Professor Profiles</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {professors.map((prof, index) => (
          <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
            <h4>{prof.name}</h4>
            <p>{prof.title}</p>
            <p>{prof.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessorProfiles;