import { useContext, useEffect, useState } from 'react';
import Who from '../assets/Who.png'
import home from '../assets/home.png'
import { Context } from '../Context';

export default function Home({id}){
    const {screenWidth}  = useContext(Context)
    return(
        <div className="flex flex-col gap-5 px-20 " id ={id}>
            <img src={Who} alt="img" />
            <div className={`${screenWidth<1000? 'block':'flex'} bg-gray-300 p-3 gap-5 `}>
                <img src={home} alt='img' className={`${screenWidth<1000 ? 'w-full': 'w-128'}`}/>
                <div className={`flex flex-col gap-3 px-2 `}>
                    <h1 className='text-3xl font-semibold '>Who we are</h1>
                    <p className='text-gray-700 '>The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.</p>

                    <div role='button' className='h-10 w-40 text-center py-1 rounded-md text-lg font-semibold' style={{border:'1px solid #01244A'}}>Contact us &#8594;</div>
                </div>
            </div>
        </div>
    )
}