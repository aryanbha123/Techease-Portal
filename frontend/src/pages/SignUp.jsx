import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, CircularProgress, Snackbar, TextField } from '@mui/material'
import ErrorToast from '../components/utils/toast';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { getUser } from '../store/api/UserApi';
import GoogleBtn from '../components/utils/GoogleBtn';
export default function SignUp() {
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
    const submitHandler = async (e) => {
        e.preventDefault();
        setRegister(true);
        if (formData.password !== formData.confirmPassword) {
            setError("Password and Confirm Password should be same");
            setOpen(true);
        }

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, formData, { withCredentials: true });
            dispatch(getUser());

        } catch (error) {
            setError(error.response.data.message);
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

            <div className="bg-white w-full md:max-w-xl lg:max-w-full md:mx-auto  xl:w-full h-screen px-6 lg:px-16 xl:px-12 flex  justify-center">
                <form onSubmit={submitHandler} className="w-full h-100 mt-10">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight">Create a new account </h1>

                    <div className="mt-6" action="#" >

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <div>
                                <TextField autoFocus fullWidth variant='standard' value={formData.name} onChange={chanegHandler} name='name' label={"Name"} required />
                            </div>
                            <div>
                                <TextField fullWidth variant='standard' value={formData.email} onChange={chanegHandler} type='email' required autoFocus label="Email" name='email' />
                            </div>
                            <div>
                                <TextField fullWidth variant='standard' value={formData.password} onChange={chanegHandler} type='password' required autoFocus label="Password" />
                            </div>
                            <div>
                                <TextField fullWidth variant='standard' name='confirmPassword' value={formData.confirmPassword} onChange={chanegHandler} type='password' required label="Confirm Password" autoFocus />
                            </div>
                            <div className="text-left mt-2">
                                <Link to="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</Link>
                            </div>

                        </div>

                        <Button fullWidth sx={{
                            margin: "10px 0 0 0 "
                        }} variant='contained'
                            type="submit"
                        >
                            {
                                registering ? <>
                                    <CircularProgress size={"25px"} sx={{ color: "white", height: "25px", width: "25px" }} />
                                </> : <>
                                    Sign Up
                                </>
                            }

                            {/* Sign Up */}
                        </Button>
                    </div>

                    <hr className="my-6 border-gray-300 w-full" />
                    <GoogleBtn />
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
