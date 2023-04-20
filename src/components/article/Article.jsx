import React from 'react';
import './article.css';

function Article({ title, date, image }) {
  return (
    <div className='gpt4__blog-article'>
      <img src={image} alt={title} />
      <div className='gpt4__blog-article_content'>
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read More</p>
      </div>
    </div>
  )
}

export default Article

