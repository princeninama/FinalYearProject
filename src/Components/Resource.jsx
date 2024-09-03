
import React from 'react';

const resources = [
  { title: 'React Documentation', link: 'https://reactjs.org/' },
  { title: 'MDN Web Docs', link: 'https://developer.mozilla.org/' },
];

const ResourceLibrary = () => {
  return (
    <div>
      <h2>Resource Library</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceLibrary;