import { useContext, useEffect, useRef } from "react";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Offering from "../components/Offering";
import Team from "../components/Team";
import { Context } from "../Context";

export  default function Landing(){
   const {component, setComponent} = useContext(Context)

   useEffect(()=>{
    if(component){
        const section = document.getElementById(component);
        if(section){
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        }
    }
    
   }, [component])

    return(
        <>
        <div className="flex flex-col">
            <Header/>
            <div className="w-full flex flex-col gap-5">
                <Home id="home"/>
                <Offering id="offering"/>
                <Team id="team"/>
                <Blogs id="blog"/>
                <Contact id="contact"/>
                <Footer/>
            </div>

        </div>
        </>
    )
}