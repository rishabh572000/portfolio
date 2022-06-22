import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
export default function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/rishabh-choudhary-701743181/' target='_blank'><AiFillLinkedin /></a>
        <a href='https://www.fiverr.com/rishabh_57?up_rollout=true' target='_blank'><SiFiverr /></a>
        <a href='https://github.com/rishabh572000' target='_blank'><AiFillGithub /></a>
    </div>
  )
}
