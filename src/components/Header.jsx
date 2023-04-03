import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'
import {Button} from '@mui/material';
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../Context";
import '../App.css'

export default function Header(){
   const {component, setComponent} = useContext(Context)

    return(
        <header className='sticky top-0 z-30 my-4 flex justify-between border-b-2 bg-white w-full' style={{height:'9vh', alignItems:'stretch'}}>
            <Link to={'/'} href="" className='flex items-center gap-1 ml-5 '>
                <img src={logo} alt="icon" className="h-12 w-12 mb-2"/>
            </Link>

            <div className="flex gap-6 items-center justify-center text-md font-semibold">
                <div role="button" className={`${component === 'home' && 'active'} h-full pt-3`} onClick={()=> setComponent("home")}>Home</div>
                <div role="button" className={`${component === 'offering' && 'active'} h-full pt-3`} onClick={()=> setComponent("offering")}>Our offering</div>
                <div role="button" className={`${component === 'team' && 'active'} h-full pt-3`} onClick={()=> setComponent("team")}>Our team</div>
                <div role="button" className={`${component === 'contact' && 'active'} h-full pt-3`} onClick={()=> setComponent("contact")}>Contact us</div>
                <div role="button" className={`${component === 'blog' && 'active'} h-full pt-3`} onClick={()=> setComponent("blog")}>Blog</div>
            </div>

            <button className="text-white font-semibold px-3 h-10 mr-4 rounded-sm" style={{backgroundColor: '#002550'}}>Register Now</button>
        </header>
    )
}