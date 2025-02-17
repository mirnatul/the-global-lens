import React from 'react';
import logoDark from '../assets/logo-dark.png'
import moment from 'moment';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='mt-12 pt-12 pb-6 px-2'>
            <div className='md:flex gap-4 items-center'>
                <div className='md:w-2/6'>
                    <img className='w-48' src={logoDark} alt="" />
                    <p className='text-slate-400 md:text-lg mt-4'>Journalism without fear or favour</p>
                </div>
                <div className='flex justify-between md:w-4/6 text-sm md:text-lg mt-8'>
                    <div>
                        <p className='hover:text-slate-400 cursor-pointer mb-2'>About Us</p>
                        <p className='hover:text-slate-400 cursor-pointer mb-2'>Contact Us</p>
                        <p className='hover:text-slate-400 cursor-pointer mb-2'>Apps</p>
                    </div>
                    <div>
                        <p className='hover:text-slate-400 cursor-pointer mb-2'>Comment Policy</p>
                        <p className='hover:text-slate-400 cursor-pointer mb-2'>RSS</p>
                        <p className='hover:text-slate-400 cursor-pointer mb-2'>Sitemap</p>
                    </div>
                    <div>
                        <p className='hover:text-slate-400 cursor-pointer mb-2'>Advertisement</p>
                        <p className='hover:text-slate-400 cursor-pointer mb-2'>Newsletter</p>
                        <p className='hover:text-slate-400 cursor-pointer mb-2'>Privacy Policy</p>
                    </div>
                    <div className='hidden sm:block'>
                        <p className='hover:text-slate-400 cursor-pointer mb-2'>Conference Hall</p>
                        <p className='hover:text-slate-400 cursor-pointer mb-2'>Archives</p>
                    </div>
                </div>
            </div>
            <hr className='text-slate-600 my-6 lg:my-12' />
            <div className='md:flex justify-between gap-12'>
                <div className='text-slate-400'>
                    <p className='font-semibold md:text-xl'>© {moment().format('YYYY')} thegloballens.net | Powered by: mirnatul.netlify.app</p>
                    <p className='text-sm md:text-lg mt-3'>Copyright: Any unauthorized use or reproduction of The Global Lens content for commercial purposes is strictly prohibited and constitutes copyright infringement liable to legal action.</p>
                </div>
                <div className='flex gap-6 text-2xl md:text-3xl mt-6 text-slate-400'>
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