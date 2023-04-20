import React from 'react';
import './header.css';
import peapole from '../../assets/people.png';
import ai from '../../assets/ai.png';

function Header() {
  return (
    <div className='gpt4__header ' id="Home">
      <div className='gpt4__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something Amazing with GPT4
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima eos aliquid architecto dignissimos ratione exercitationem odio ex necessitatibus animi!</p>
        <div className='gpt4__header-content_input'>
          <input type="email" placeholder='Your Email Address'/>
          <button>Get Started</button>
        </div>
        <div className='gpt4__heade-content-peapole'>
          <img src={peapole} alt="peapole" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        </div>
      </div>

      <div className='gpt4__header-image'>
        <img src={ai} alt="ai image" />
      </div>
    </div>
  )
}

export default Header