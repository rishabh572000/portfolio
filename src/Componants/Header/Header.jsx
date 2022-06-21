import React from 'react';
import CTA from './CTA';
import me from '../../Assest/me.png';
import HeaderSocial from './HeaderSocial';
import './header.css';

export default function Header() {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Rishabh Kumar</h1>
        <h5 className='text-light'>React Developer</h5>
        <CTA /> 
        <HeaderSocial />
        
        <div className='me'>
          <img src={me} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
