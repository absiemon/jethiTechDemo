import { Link } from "react-router-dom";

import home1 from '../assets/home1.png'
import home2 from '../assets/home2.png'
import home3 from '../assets/home3.png'
import scroll from '../assets/scroll.png'
import scroll2 from '../assets/scroll2.png'
import OfferingCard from "./OfferingCard";
import { useRef, useState } from "react";
import '../App.css';

export default function Blogs({id}) {

    const parentRef = useRef(null);
    const scrollToright = () => {
        const parentEl = parentRef.current;
        if (parentEl) {
            parentEl.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    const scrollToleft = () => {
        const parentEl = parentRef.current;
        if (parentEl) {
            parentEl.scrollBy({
                left: -300, // adjust the amount to scroll here
                behavior: 'smooth',
            });
        }
    };


    const cardDetail = [
        {
            img: home3,
            heading: "Guide for personal property buying",
            content: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..."
        },
        {
            img: home2,
            heading: "Guide for personal property buying",
            content: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..."
        },
        {
            img: home1,
            heading: "Guide for personal property buying",
            content: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..."
        },
        {
            img: home1,
            heading: "Guide for personal property buying",
            content: "Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod..."
        }
    ]
    return (
        <div className="bg-gray-100 px-20 py-3" id={id}>
            <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="text-3xl font-semibold text-center border-b-4 border-primary w-fit h-12 rounded ">Blogs</h1>
            </div>
            <div className="flex">
                <div className="absolute h-10 w-10 bg-slate-300 rounded-full py-4 px-4 left-8 mt-52" role="button" onClick={scrollToleft}>
                    <img src={scroll} alt="img" style={{ objectFit: 'contain' }} />
                </div>

                <div className="my-5 flex" id="parent" style={{ width: '100%', overflowX: 'auto' }} ref={parentRef}>
                    <div style={{ display: 'inline-flex' }} id="parent2" >
                        {cardDetail.map((item, index) => (
                            <div key={index} className="flex-shrink-0" style={{ minWidth: '33.33%' }}>
                                <OfferingCard type="blog" element={item.img} heading={item.heading} content={item.content} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute h-10 w-10 bg-slate-300 rounded-full py-4 px-4 right-8 mt-52" role="button" onClick={scrollToright}>
                    <img src={scroll2} alt="img" style={{ objectFit: 'contain' }} />
                </div>
            </div>

        </div >
    )
}