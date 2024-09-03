
import React from 'react';

const newsArticles = [
  { title: 'University Ranked #1!', summary: 'Our university has been ranked first in the nation.', date: '2023-10-01' },
  { title: 'New Research Grants Available', summary: 'Apply for research grants for your upcoming projects.', date: '2023-10-02' },
];

const NewsUpdates = () => {
  return (
    <div>
      <h2>News and Updates</h2>
      {newsArticles.map((article, index) => (
        <div key={index} style={{ margin: '10px 0', borderBottom: '1px solid #ccc' }}>
          <h4>{article.title} <small>({article.date})</small></h4>
          <p>{article.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsUpdates;