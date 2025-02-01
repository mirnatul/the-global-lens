import { Link } from 'react-router-dom';
import logo from '../../assets/the-global-lens.png'
import { FaGoogle } from 'react-icons/fa';
import { useState } from 'react';

const LogIn = () => {
    const [email, setEmail] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // console.log(e.target);

    }
    return (
        <div style={{ backgroundImage: "url('https://images.pexels.com/photos/1022692/pexels-photo-1022692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }} className="bg-slate-200">
            <div className="max-w-[1050px] mx-auto px-2">
                <div className="grid lg:grid-cols-2 h-screen items-center">
                    {/* form */}
                    <div className='mx-auto lg:mx-0'>
                        <div className="bg-white py-20 px-20">
                            <img className='w-56' src={logo} alt="" />
                            <hr className='border-1 my-2' />
                            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center mt-10'>
                                <p className='font-bold text-xl mb-6'>Log In</p>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Email</span>
                                    </div>
                                    <br />
                                    <input name='email' type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                                </label>
                                <br />
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Password</span>
                                    </div>
                                    <br />
                                    <input name='password' type="text" placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
                                </label>
                                <div className='mt-4'>
                                    <input className='btn bg-black text-white w-xs' type="submit" value="Log In" />
                                </div>
                                <div className='mt-2'>
                                    <button className='btn bg-[#4285F4] text-white w-xs'>
                                        <FaGoogle></FaGoogle>
                                        <p>Login with Google</p>
                                    </button>
                                </div>
                            </form>
                            <div className='flex gap-3 mt-4 justify-center'>
                                <p>New to The Global Lens?</p>
                                <Link className='font-bold text-blue-500 underline' to='/register'>Register</Link>
                            </div>
                        </div>
                    </div>


                    {/* pictures */}
                    <div className="h-[590px] overflow-hidden hidden lg:block">
                        <img className='' src="https://images.pexels.com/photos/4348556/pexels-photo-4348556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;