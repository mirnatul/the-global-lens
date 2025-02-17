import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/the-global-lens.png'
import { FaGoogle } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const LogIn = () => {
    const { loading, signInUser, handleGoogleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // console.log(e.target);
        signInUser(email, password)
            .then(result => {
                navigate('/')
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const logInWithGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                navigate('/')
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div style={{ backgroundImage: "url('https://images.pexels.com/photos/1022692/pexels-photo-1022692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }} className="max-w-[100%]">
            <div className="max-w-[1050px] mx-auto">
                <div className="grid lg:grid-cols-2 h-screen items-center">
                    {/* form */}
                    <div className='mx-auto lg:mx-0'>
                        <div className="bg-white py-20 px-6 sm:px-16 md:px-20">
                            <img className='lg:w-56 w-48' src={logo} alt="" />
                            <hr className='border-1 my-2' />
                            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center mt-10'>
                                <p className='font-bold text-xl mb-6'>Log In</p>
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Email</span>
                                    </div>
                                    <br />
                                    <input name='email' type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                                </label>
                                <br />
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">Password</span>
                                    </div>
                                    <br />
                                    <input name='password' type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
                                </label>
                                <div className='mt-4'>
                                    <input className='btn bg-black text-white w-xs' type="submit" value={loading ? "Loading..." : "Log In"} />
                                </div>
                                <div className='mt-2'>
                                    <button disabled={loading ? true : false} onClick={logInWithGoogle} className='btn bg-[#4285F4] text-white w-xs'>
                                        <FaGoogle></FaGoogle>
                                        <p>{loading ? "Loading..." : "Login with Google"}</p>
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