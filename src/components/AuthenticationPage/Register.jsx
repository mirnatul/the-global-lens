import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/the-global-lens.png'
import { FaGoogle } from "react-icons/fa";
import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const currentUser = result.user;
                // console.log(result.user);
                updateProfile(currentUser, {
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => {
                        navigate('/')
                    })
                    .catch()
            })
            .catch(error => {
                alert(error.message);
            })

    }
    return (
        <div style={{ backgroundImage: "url('https://images.pexels.com/photos/1022692/pexels-photo-1022692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }} className="bg-slate-200">
            <div className="max-w-[1050px] mx-auto px-2">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-screen items-center">
                    {/* form */}
                    <div className='mx-auto lg:mx-0'>
                        <div className="bg-white py-16 px-20 max-w-[550px]">
                            <img className='w-56' src={logo} alt="" />
                            <hr className='border-1 my-2' />
                            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center mt-10'>
                                <p className='font-bold text-xl mb-6'>Create account</p>
                                <label className="form-control w-full max-w-xs mb-3">
                                    <div className="label">
                                        <span className="label-text">Name</span>
                                    </div>
                                    <input name='name' type="text" placeholder="Your Name..." className="input input-bordered w-full max-w-xs" />
                                </label>
                                <label className="form-control w-full max-w-xs mb-3">
                                    <div className="label">
                                        <span className="label-text">Photo URL</span>
                                    </div>
                                    <input name='photoURL' type="text" placeholder="Photo URL..." className="input input-bordered w-full max-w-xs" />
                                </label>
                                <label className="form-control w-full max-w-xs mb-3">
                                    <div className="label">
                                        <span className="label-text">Email</span>
                                    </div>
                                    <input name='email' type="text" placeholder="Your Email..." className="input input-bordered w-full max-w-xs" />
                                </label>
                                <label className="form-control w-full max-w-xs mb-3">
                                    <div className="label">
                                        <span className="label-text">Password</span>
                                    </div>
                                    <input name='password' type="password" placeholder="Your Password..." className="input input-bordered w-full max-w-xs" />
                                </label>
                                <div className='mt-4'>
                                    <input className='btn bg-black text-white w-xs' type="submit" value="Register" />
                                </div>
                                <div className='mt-2'>
                                    <button className='btn bg-[#4285F4] text-white w-xs'>
                                        <FaGoogle></FaGoogle>
                                        <p>Login with Google</p>
                                    </button>
                                </div>
                            </form>
                            <div className='flex gap-3 mt-4 justify-center'>
                                <p>Already have an account?</p>
                                <Link className='font-bold text-blue-500 underline' to='/login'>Login</Link>
                            </div>
                        </div>
                    </div>


                    {/* pictures */}
                    <div className="h-[646px] overflow-hidden hidden lg:block">
                        <img className='' src="https://images.pexels.com/photos/4348556/pexels-photo-4348556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;