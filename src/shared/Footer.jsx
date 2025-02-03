import React from 'react';
import logoDark from '../assets/logo-dark.png'
import moment from 'moment';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='my-12'>
            <div className='md:flex gap-4 items-center'>
                <div className='md:w-2/6'>
                    <img className='w-48' src={logoDark} alt="" />
                    <p className='text-slate-400 text-lg mt-4'>Journalism without fear or favour</p>
                </div>
                <div className='flex justify-between md:w-4/6 text-sm sm:text-xl mt-8'>
                    <div>
                        <p className='hover:text-slate-400 cursor-pointer my-2'>About Us</p>
                        <p className='hover:text-slate-400 cursor-pointer my-2'>Contact Us</p>
                        <p className='hover:text-slate-400 cursor-pointer my-2'>Apps</p>
                    </div>
                    <div>
                        <p className='hover:text-slate-400 cursor-pointer my-2'>Comment Policy</p>
                        <p className='hover:text-slate-400 cursor-pointer my-2'>RSS</p>
                        <p className='hover:text-slate-400 cursor-pointer my-2'>Sitemap</p>
                    </div>
                    <div>
                        <p className='hover:text-slate-400 cursor-pointer my-2'>Advertisement</p>
                        <p className='hover:text-slate-400 cursor-pointer my-2'>Newsletter</p>
                        <p className='hover:text-slate-400 cursor-pointer my-2'>Privacy Policy</p>
                    </div>
                    <div>
                        <p className='hover:text-slate-400 cursor-pointer my-2'>Conference Hall</p>
                        <p className='hover:text-slate-400 cursor-pointer my-2'>Archives</p>
                    </div>
                </div>
            </div>
            <hr className='text-slate-600 my-6 lg:my-12' />
            <div className='md:flex justify-between gap-12'>
                <div className='text-slate-400'>
                    <p className='font-semibold text-xl'>© {moment().format('YYYY')} thegloballens.net | Powered by: mirnatul.netlify.app</p>
                    <p className='text-lg mt-3'>Copyright: Any unauthorized use or reproduction of The Global Lens content for commercial purposes is strictly prohibited and constitutes copyright infringement liable to legal action.</p>
                </div>
                <div className='flex gap-6 text-3xl mt-6 text-slate-400'>
                    <FaFacebook></FaFacebook>
                    <FaYoutube></FaYoutube>
                    <FaTwitter></FaTwitter>
                    <FaPinterest></FaPinterest>
                    <FaInstagram></FaInstagram>
                </div>
            </div>
        </div>
    );
};

export default Footer;