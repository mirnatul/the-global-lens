import React from 'react';
import logo from '../../assets/2.png'

const Banner = () => {
    return (
        <div className='mt-4'>
            <div className='grid lg:grid-cols-3 gap-3'>
                <div className='lg:h-[400px] relative col-span-2'>
                    <div className='absolute inset-0 opacity-100 bg-gradient-to-t from-black to-transparent'></div>
                    <img className='w-full h-full object-cover' src={logo} alt="" />
                    <div className='absolute bottom-0 text-white px-6 pb-3'>
                        <p className='text-3xl font-bold'>This is title, this is title test</p>
                        <p className='mt-3'>hello there i am using whats app, hello there i am using whatsapp, hello there i am using whatsapp</p>
                    </div>
                </div>
                <div className='grid lg:grid-rows-2 gap-3'>
                    <div className='border'>2</div>
                    <div className='border'>3</div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-3 mt-3'>
                <div className='border'>4</div>
                <div className='border'>5</div>
            </div>
        </div>
    );
};

export default Banner;