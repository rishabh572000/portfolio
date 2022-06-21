import React from 'react';
import ME from '../../Assest/me2.jpg';
import { RiAwardFill } from "react-icons/ri";
import { BiBookReader } from "react-icons/bi";
import { BsBookshelf } from "react-icons/bs";
import './about.css'

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='me' style={{objectFit:'cover'}}/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <RiAwardFill className='about__icon'/>
              <h5>Experiance</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <BiBookReader className='about__icon'/>
              <h5>Graduated</h5>
              <small>B.Tech in 2022</small>
            </article>
            <article className='about__card'>
              <BsBookshelf className='about__icon'/>
              <h5>Project</h5>
              <small>3+ compleated</small>
            </article>
            </div>
            <p>I seek challenging opportunities where I can fully use my skills for
the success of the organization.</p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        
        </div>
      </div>
    </section>
  )
}
