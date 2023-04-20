import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/logo.svg'

const Menu = () => {
  return (
    <>
      <p><a href="#Home">Home</a></p>
      <p><a href="#WhatGPT4">What Is GPT4</a></p>
      <p><a href="#Possibility">Open AI</a></p>
      <p><a href="#Features">Case Study</a></p>
      <p><a href="#Blog">Library</a></p>
    </>
  )
}
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt4__navbar'>
      <div className='gpt4__navbar-links'>
        <div className='gpt4__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt4__navbar-links_container'>
          <Menu />
        </div>
        <div className='gpt4__navbar-button'>
          <button>Sign in</button>
          <button className='gpt4__navbar-button_signup'>Sign Up</button>
        </div>
      </div>
      <div className='gpt4__navbar-menu'>
          {
            toggleMenu ? <RiCloseLine color="#fff" size="27" onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color="#fff" size="27" onClick={() => setToggleMenu(true)} />
          }
          {
            toggleMenu && (
              <div className='gpt4__navbar-menu_container scale-up-center'>
                <div className='gpt4__navbar-menu_container-links'>
                  <Menu />
                  <div className='gpt4__navbar-menu_container-button'>
                    <button>Sign in</button>
                    <button className='gpt4__navbar-menu_container_signup'>Sign Up</button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Navbar

