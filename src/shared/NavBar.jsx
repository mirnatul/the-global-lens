import name from '../assets/the-global-lens.png'
import { IoMdMenu } from "react-icons/io";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import moment from 'moment';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="grid grid-cols-3 items-center mt-2">
            <div className="justify-self-start flex items-center gap-2">
                <div>
                    <IoMdMenu onClick={() => setToggleMenu(!toggleMenu)} className='text-4xl cursor-pointer hover:scale-95'></IoMdMenu>
                    {
                        toggleMenu && <div className='absolute bg-white border-r-2 border-slate-400 left-0 top-0 w-full lg:w-[600px] z-20'>
                            <div className='h-screen px-4 pt-2'>
                                <div>
                                    <div className='flex items-center gap-4'>
                                        <RxCross1 onClick={() => setToggleMenu(!toggleMenu)} title='Close the sidebar' className='text-3xl cursor-pointer hover:scale-90'></RxCross1>
                                        <img className='sm:w-60 w-36' src={name} alt="" />
                                        <div className='ml-auto flex items-center gap-2'>
                                            <div className='relative cursor-pointer'>
                                                <input placeholder='Search...' className='input w-40 lg:w-56' type="text" />
                                                <CiSearch className='absolute top-[10px] right-0 mr-2 text-xl'></CiSearch>
                                            </div>
                                            <div className='lg:hidden'>
                                                <input
                                                    type="checkbox"
                                                    value="synthwave"
                                                    className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-black bg-white [--tglbg:theme(colors.white)] checked:border-white checked:bg-black checked:[--tglbg:theme(colors.blue.900)] text-black checked:text-yellow-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='my-2 text-slate-300' />
                                    <div onClick={() => setToggleMenu(!toggleMenu)}>
                                        <NavLink className='block py-4 px-4 my-2 hover:bg-[#E2E8F0]' to='/'>Home</NavLink>
                                        <NavLink className='block py-4 px-4 my-2 hover:bg-[#E2E8F0]' to='/politics'>Politics</NavLink>
                                        <NavLink className='block py-4 px-4 my-2 hover:bg-[#E2E8F0]' to='/business'>Business</NavLink>
                                        <NavLink className='block py-4 px-4 my-2 hover:bg-[#E2E8F0]' to='/technology'>Technology</NavLink>
                                        <NavLink className='block py-4 px-4 my-2 hover:bg-[#E2E8F0]' to='/science'>Science</NavLink>
                                        <NavLink className='block py-4 px-4 my-2 hover:bg-[#E2E8F0]' to='/health'>Health</NavLink>
                                        <NavLink className='block py-4 px-4 my-2 hover:bg-[#E2E8F0]' to='/travel'>Travel</NavLink>
                                        <NavLink className='block py-4 px-4 my-2 hover:bg-[#E2E8F0]' to='/entertainment'>Entertainment</NavLink>
                                        <NavLink className='block py-4 px-4 my-2 hover:bg-[#E2E8F0]' to='/fashion'>Fashion</NavLink>
                                    </div>
                                    <hr className='my-3 text-slate-300' />
                                    <button className='py-3 w-full text-md font-semibold rounded bg-black text-white hover:bg-slate-800 cursor-pointer'>Log In</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className='hidden lg:block'>
                    <div className='font-light flex items-center gap-2'>
                        {moment().format('dddd, MMMM D, YYYY')}
                        <span><TiWeatherPartlySunny className='text-xl'></TiWeatherPartlySunny></span>
                    </div>
                </div>
            </div>
            <div className="justify-self-center">
                <img className='w-[360px]  min-w-[185px]' src={name} alt="" />
            </div>
            <div className="justify-self-end">
                <div className='flex items-center gap-1'>
                    <Link to='/login' className='py-[6px] px-4 text-sm font-semibold rounded bg-black text-white hover:scale-105 cursor-pointer'>Log In</Link>
                    <CiBellOn className='text-3xl hover:scale-110 cursor-pointer hidden md:block'></CiBellOn>
                    <div className=''>
                        <input
                            type="checkbox"
                            value="synthwave"
                            className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-black bg-white [--tglbg:theme(colors.white)] checked:border-white checked:bg-black checked:[--tglbg:theme(colors.blue.900)] text-black checked:text-yellow-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;