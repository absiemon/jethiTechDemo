import { Link } from 'react-router-dom'
import logo from '../assets/logo2.png'
import mail from '../assets/mail.png'
import call from '../assets/call.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import linkedIn from '../assets/linkedIn.png'


export default function Footer(){
    return(
        <div className="px-20 bg-primary text-white py-4">
            <div className="flex gap-5 mt-2">
                <div style={{width:"25%"}}>
                    <img src={logo} alt='img' />
                </div>

                <div className="flex flex-col gap-4" style={{width:"25%"}}>
                    <h1 className='text-2xl font-semibold'>Company</h1>
                    <Link className='text-lg'>Home</Link>
                    <Link className='text-lg'>Our offering</Link>
                    <Link className='text-lg'>Our team</Link>
                    <Link className='text-lg'>Contact us</Link>
                </div>
                <div className="flex flex-col gap-4" style={{width:"25%"}}>
                    <h1 className='text-2xl font-semibold'>Useful Link</h1>
                    <Link className='text-lg'>Blogs</Link>
                    <Link  className='text-lg'>FAQ's</Link>
                    
                </div>

                <div className="flex flex-col gap-4" style={{width:"25%"}}>
                    <div className='flex items-center gap-3'>
                        <img src={mail} alt='mail icon'/>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-2xl font-semibold'>Email:</h1>
                            <Link className='text-lg'>support@inreglobal.com</Link>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src={call} alt='call icon'/>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-2xl font-semibold'>Phone:</h1>
                            <Link className='text-lg'>+91 | 7019305889</Link>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='flex justify-between mt-8'>
                <p> Copyright 2023. Designed by INRE Global</p>
                <div className='flex justify-between gap-10'>
                    <Link className='flex gap-2'>
                        <img src={linkedIn} alt='icon' className='object-contain'/>
                        <p>LinkedIn</p>
                    </Link>
                    <Link className='flex gap-2'>
                        <img src={facebook} alt='icon' className='object-contain'/>
                        <p>Facebook</p>
                    </Link>
                    <Link className='flex gap-2'>
                        <img src={twitter} alt='icon' className='object-contain'/>
                        <p>Twitter</p>
                    </Link>
                    <Link className='flex gap-2'>
                        <img src={instagram} alt='icon' className='object-contain'/>
                        <p>Instagram</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}