import React from 'react';
import './feature.css';

function Feature({title, text}) {
  // const {title, description} = data;

  return (
    <div className='gpt4__feature'>
      <h1>{title}</h1>
      {text != null && <p>{text}</p>}
    </div>
  )
}

export default Feature

