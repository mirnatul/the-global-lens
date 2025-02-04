import React from 'react';
import logo from '../../assets/2.png'

const Banner = () => {
    return (
        <div className=''>
            <div className='lg:grid lg:grid-cols-2 lg:gap-2'>
                <div className='lg:h-[400px] border relative overflow-hidden'>
                    <img className='w-full h-full object-cover' src={logo} alt="" />
                    <div className='absolute bottom-0 text-white px-6 pb-3'>
                        <p className='text-3xl font-bold'>This is title, this is title</p>
                        <p className='text-xl'>hello there i am using whats app, hello there i am using whatsapp, hello there i am using whatsapp</p>
                    </div>
                </div>
                <div className='lg:grid lg:grid-rows-2 lg:gap-2'>
                    <div className='border'>2</div>
                    <div className='border'>3</div>
                </div>
            </div>
            <div className='lg:grid lg:grid-cols-2 gap-2 mt-2'>
                <div className='border'>4</div>
                <div className='border'>5</div>
            </div>
        </div>
    );
};

export default Banner;