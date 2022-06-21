import React, { useState } from 'react';
import './nav.css';
import { AiFillHome } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiFillContacts } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";

export default function Nav() {
  const [active, setActive]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActive('#')} className={active==='#'? 'active': ''}><AiFillHome /></a>
      <a href='#about' onClick={()=>setActive('#about')} className={active==='#about'? 'active': ''}><ImUser /></a>
      <a href='#Experiances' onClick={()=>setActive('#Experiances')} className={active==='#Experiances'? 'active': ''}><BsJournalBookmarkFill /></a>
      <a href='#service' onClick={()=>setActive('#service')} className={active==='#service'? 'active': ''}><MdDesignServices /></a>
      {/* < a href='#project' onClick={()=>setActive('#project')} className={active==='#project'? 'active': ''}><AiOutlineFundProjectionScreen /></a> */}
      <a href='#contact' onClick={()=>setActive('#contact')} className={active==='#contact'? 'active': ''}><AiFillContacts /></a> 
    </nav>
  )
}
