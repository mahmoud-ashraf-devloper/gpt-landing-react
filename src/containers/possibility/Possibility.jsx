import React from 'react'
import './possibility.css'
import  possibilityImage  from '../../assets/possibility.png'
function Possibility() {
  return (
    <div className='gpt4__possibilty section__margin' id='Possibility'>
      <div className='gpt4__possibilty-image'>
        <img src={possibilityImage} alt="possibilty" />
      </div>
      <div className='gpt4__possibilty-content'>
        <span>Request Early Access to Get Started</span>
        <h1 className='gpt4__possibilty-content_header gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <span>Request Early Access to Get Started</span>
      </div>
    </div>
  )
}

export default Possibility