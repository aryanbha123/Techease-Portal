import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress, Snackbar } from '@mui/material'
import ErrorToast from '../components/utils/toast';
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { getUser } from '../store/api/UserApi';
export default  function SignUp() {
    useEffect(() => {
        document.title = "Register with Pareeksha"
    }, []);
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState(null);
    const [registering, setRegister] = useState(false);
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const chanegHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const submitHandler =async  (e) => {
        e.preventDefault();
        setRegister(true);
        if (formData.password !== formData.confirmPassword) {
            setError("Password and Confirm Password should be same");
            setOpen(true);
        }

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register` , formData , {withCredentials:true});
            if(res.status == 200){
                dispatch(getUser());
            }
        } catch (error) {
            setError(error.message);
            setOpen(true);
        } finally {
            setRegister(false);
        }
    }
    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-blue-600 hidden lg:block lg:w-[650px] xl:w-[700px] md:w-1/2  h-screen">
                <img src="assets/image.png" alt="Background" className="w-full h-full object-cover" />
            </div>

            <div className="bg-white w-full md:max-w-xl lg:max-w-full md:mx-auto  xl:w-full h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                <form onSubmit={submitHandler} className="w-full h-100">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Create a new account </h1>

                    <div className="mt-6" action="#" >

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <div>
                                <label htmlFor="email" className="block text-gray-700"> Name</label>
                                <input
                                    type=""
                                    id="name"
                                    name="name"
                                    placeholder="Enter Name"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    value={formData.name} onChange={chanegHandler}
                                    autoFocus
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Email Address"
                                    value={formData.email} onChange={chanegHandler}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    autoFocus
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password} onChange={chanegHandler}
                                    placeholder="Enter Password"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    autoFocus
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Enter Passsword again"
                                    value={formData.confirmPassword} onChange={chanegHandler}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    autoFocus
                                    required
                                />
                            </div>
                            <div className="text-left mt-2">
                                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                            </div>

                        </div>

                        <button
                            type="submit"
                            className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                        >
                            {
                                registering ? <>
                                    <CircularProgress size={"25px"} sx={{ color: "white", height: "25px", width: "25px" }} />
                                </> : <>
                                    Sign Up
                                </>
                            }

                            {/* Sign Up */}
                        </button>
                    </div>

                    <hr className="my-6 border-gray-300 w-full" />

                    <button
                        type="button"
                        className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
                    >
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48">
                                <defs>
                                    <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                                </defs>
                                <clipPath id="b">
                                    <use xlinkHref="#a" overflow="visible" />
                                </clipPath>
                                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                                <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                                <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                                <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                            </svg>
                            <span className="ml-4">Log in with Google</span>
                        </div>
                    </button>

                    <p className="mt-8">
                        Already user ? <Link to={'/'} className="text-blue-500 hover:text-blue-700 font-semibold">Login </Link>
                    </p>
                </form>
                {
                    error &&
                    <ErrorToast open={open} setOpen={setOpen} msg={error} />
                }
            </div>
        </section>
    );
}
