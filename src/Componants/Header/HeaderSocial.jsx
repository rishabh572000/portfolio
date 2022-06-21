import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
export default function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href='' target='_blank'><AiFillLinkedin /></a>
        <a href='' target='_blank'><SiFiverr /></a>
        <a href='' target='_blank'><AiFillGithub /></a>
    </div>
  )
}
