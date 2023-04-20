import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'
function Footer() {
  return (
    <div className='gpt4__footer '>
      <div className='gpt4__footer-header'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
      </div>

      <div className='gpt4__footer-container'>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul>
            <li>Links</li>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Company</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Get In Touch</li>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <div className='gpt4__footer-copywright'>
        <p>© 2021 GPT-4. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer