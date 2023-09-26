"use client";
import Link from 'next/link';
import { useState } from 'react';
import Socials from './Socials';


const links = [

  { href: "/", name: "Home" },
  // { href: "/agency", name: "Agency" },
  { href: "/resume", name: "Resume" },
  { href: "/about", name: "About" },
//   { href: "/contact", name: "Contact" }
]

// const subLinks=[
//   {href:"/WebDevelopment",name:" Web Development"},
//   {href:"/DigitalMarketing",name:" Digital Marketing"},
//   {href:"/WordPress",name:"  WordPress"}
// ]


export default function Modal({ openModal, opened }) {


  
// onMouseEnter={showServices(link.name)} 
  return (

    <div
      id="modal"
      className={`bg-cyan-950 flex items-center justify-center w-screen h-screen bg-tech  z-50 fixed top-[0px] left-[0px] right-0 m-0 block ${opened ? "modalAnimationClose" : "modalAnimation"
        }`}
    >

      <div className='w-1/2 md:w-1/4'>
        <ul className="font-extrabold text-neutral-200 text-4xl xs:text-5xl list-none ">
          {links.map((link,idx) => {
            return(
            <li key={`${link.name}-${idx}`} className={`mb-2 item${idx+1} ${opened ? "" : "slide"}`}  >
            <Link className="text-white " onClick={openModal}href={link.href}>
            {link.name}
            </Link>
          </li>

            )
          })}
        </ul>
      <div className='mt-10'> <Socials hover={"opacity-70"} opened={opened} color="white"></Socials></div>
      </div>

      {/* <div className='w-1/3 ml-10'>
        <ul className="font-semibold text-neutral-200 text-3xl list-none ">


        </ul>
      </div> */}

    

    </div>

  )
}
