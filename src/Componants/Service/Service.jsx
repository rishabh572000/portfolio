import React from 'react';
import { BsCheck2Circle} from "react-icons/bs";
import './service.css';

export default function Service() {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
          <article className='service'>
            <div className='service__head'>
            <h3>UI/UX Design</h3>
            </div>
            <ul className='service__list'>
              <li>
                  <BsCheck2Circle className='service__list-icon' />
                  <p>File formats (SVG + PDF + PNG + JPEG +fig file)</p>
              </li>
              <li>
                  <BsCheck2Circle className='service__list-icon' />
                  <p>Unique and professional design</p>
              </li>
              <li>
                  <BsCheck2Circle className='service__list-icon' />
                  <p>User-friendly solution</p>
              </li>
              <li>
                  <BsCheck2Circle className='service__list-icon' />
                  <p>Proper design/mockups to understand the flow</p>
              </li>
              <li>
                  <BsCheck2Circle className='service__list-icon' />
                  <p>Fonts & Colors used in the design</p>
              </li>
            </ul>
          </article>

          <article className='service'>
            <div className='service__head'>
            <h3>Web Development</h3>
            </div>
            <ul className='service__list'>
              <li>
                  <BsCheck2Circle className='service__list-icon' />
                  <p>Responsive and user-frindly design</p>
              </li>
              <li>
                  <BsCheck2Circle className='service__list-icon' />
                  <p>Convert this "PSD, XD, AI, Zeplin, Sketch, PNG or JPG" into "HTML, CSS, JS" </p>
              </li>
              <li>
                  <BsCheck2Circle className='service__list-icon' />
                  <p>Eye-catching and animated frontend design with HTML CSS, Reactjs, and Javascript</p>
              </li>
              <li>
                  <BsCheck2Circle className='service__list-icon' />
                  <p>Designed & tailored according to Your Audience</p>
              </li>
              <li>
                  <BsCheck2Circle className='service__list-icon' />
                  <p>Data visualization with nice and modern graph</p>
              </li>
            </ul>
          </article>

          <article className='service'>
            <div className='service__head'>
            <h3>Video Making</h3>
            </div>
            <ul className='service__list'>
              <li>
                  <BsCheck2Circle className='service__list-icon' />
                  <p>Fully customized video commercial from scratch (Full HD -1080P)</p>
              </li>
              <li>
                  <BsCheck2Circle className='service__list-icon' />
                  <p>Custom Text Overlay (Motion Graphic)</p>
              </li>
              <li>
                  <BsCheck2Circle className='service__list-icon' />
                  <p>Voice over (Female or Male) </p>
              </li>
              <li>
                  <BsCheck2Circle className='service__list-icon' />
                  <p>Character and background design sheets</p>
              </li>
              <li>
                  <BsCheck2Circle className='service__list-icon' />
                  <p>Conver your imagination in a video</p>
              </li>
            </ul>
          </article>
      </div>
    </section>
  )
}
