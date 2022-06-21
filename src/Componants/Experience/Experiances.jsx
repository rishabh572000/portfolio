import React from 'react';
import Graph from './Graph';
import './experiances.css';
import { FaAward} from "react-icons/fa";
import DemoPie from './Plot';

export default function Experiances() {
  return (
    <section id='Experiances'>
      <h5>What Skill I Have</h5>
      <h2>My Experiance</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>What I Know</h3>
          <div className='experience__content'>
            <DemoPie />
            
          </div>
        </div>
        
        <div className='experience__backend'>
          <h3>My Experiance</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaAward className='experience__detailes-icon' /> 
              <div>
              <h4>NovelVeritas(Hoicko)</h4>
              <small className='text-light'>React Developer (March 2022, now)</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaAward className='experience__detailes-icon' /> 
              <div>
              <h4>Freelancer (Fiverr)</h4>
              <small className='text-light'>Web developer (June 2020, December 2021)</small>
              </div>
            </article>
           
          </div>
        </div>

      </div>
    </section>
  )
}
