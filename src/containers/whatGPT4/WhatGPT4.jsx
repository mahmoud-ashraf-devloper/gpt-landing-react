import React from 'react'
import './whatGPT4.css'
import Feature from './../../components/feature/Feature';


function WhatGPT4() {
  const data = [
    {
      title: 'Chatbots',
      description: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
    },
    {
      title: 'Knowledgebase',
      description: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
    },
    {
      title: 'Education',
      description: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
    }
  ];
  return (
    <div className='gpt4__whatgpt4 section__margin' id='WhatGPT4'>
      <div className="gpt4__whatgpt4-feature">
        <Feature title="What GPT4" />
        <p>What is GPT-3
          We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>
      <div className="gpt4__whatgpt4-header">
        <h1 className="gradient__text">The Possibilities are Beyond Your Imagination</h1>
        <p className='gradient__text'>Explore The Library</p>
      </div>
      <div className="gpt4__whatgpt4-container">
        {
          data.map((item, index)=>
              <Feature key={index} title={item.title} text={item.description}/>
        )
        }
      </div>
    </div>
  )
}

export default WhatGPT4