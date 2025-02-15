import logo from '../assets/the-global-lens.png'
import avatar from '../assets/dummy_image.png'
import { IoMdMenu } from "react-icons/io";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import moment from 'moment';
import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    // console.log(name);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                alert(error.message);
            })
    }


    return (
        <div className="grid grid-cols-3 items-center mt-2">
            <div className="justify-self-start flex items-center gap-2">
                <div>
                    <IoMdMenu onClick={() => setToggleMenu(!toggleMenu)} className='text-4xl cursor-pointer hover:scale-95'></IoMdMenu>
                    {
                        toggleMenu && <div className='bg-white fixed border-r-2 border-slate-400 left-0 top-0 w-full lg:w-[600px] z-20'>
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
                                    {
                                        user ? <div className='grid grid-cols-2 gap-3 px-3'>
                                            <div className='flex items-center justify-around bg-slate-200 py-2'>
                                                <p className='text-center font-bold'> {user?.displayName?.split(' ')[0]}</p>
                                                <div className="avatar">
                                                    <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                                                        <img src={user.photoURL ? user.photoURL : avatar} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <button onClick={handleLogOut} className='btn btn-error w-full h-full font-bold'>Log Out</button>
                                            </div>
                                        </div>
                                            : <Link to='/login' >
                                                <button className='py-3 w-full text-md font-semibold rounded bg-black text-white hover:bg-slate-800 cursor-pointer' >Log In</button>
                                            </Link>
                                    }
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
                <img className='w-[360px]  min-w-[185px]' src={logo} alt="" />
            </div>
            <div className="justify-self-end">
                <div className='flex items-center gap-1'>
                    {
                        user ?
                            <div className='flex items-center gap-2'>
                                <p className='text-center font-bold hidden md:block'> {user?.displayName?.split(' ')[0]}</p>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="">
                                        <div className="avatar mr-3 cursor-pointer">
                                            <div className="ring-primary ring-offset-base-100 w-8 lg:w-10 rounded-full ring ring-offset-2">
                                                <img src={user.photoURL ? user.photoURL : avatar} />
                                            </div>
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
                                        <button onClick={handleLogOut} className='btn btn-error font-bold'>Log Out</button>
                                    </ul>
                                </div>
                            </div>
                            : <Link to='/login' className='py-[6px] px-4 text-sm font-semibold rounded bg-black text-white hover:scale-105 cursor-pointer'>Log In</Link>
                    }
                    <CiBellOn className='text-3xl hover:scale-110 cursor-pointer hidden md:block'></CiBellOn>
                    <div className='hidden sm:block'>
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