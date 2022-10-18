import React from 'react';
import { BsCheck2Circle} from "react-icons/bs";
import bootOne from '../../Assest/boot.png';
import ecome from '../../Assest/ecom.png';
import './project.css';

export default function Project() {

  const ProjectComp = (props) =>{
    return(
      <>
      <article className='project'>
        <div className='project__head'>
        <h3>{props.text}</h3>
        </div>
        <div className='project__body'>
          <a href={props.link} target='_blank'><img src={props.image} alt='image' /></a>
        </div>
      </article>
      </>
    )
  }
  return (
  <section id='project'>
    <h5>What I did</h5>
    <h2>Project</h2>
    <div className='container project__container'>
      <ProjectComp text='E-comers' image={ecome} link=''/>
      <ProjectComp text='Chat Boot' image={bootOne} link='https://rishabh572000.github.io/chatboots/'/>
     

        

         
      </div>
  </section>
  )
}
