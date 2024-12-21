import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../store/api/UserApi';
import { Button, CircularProgress, TextField } from '@mui/material';
import ErrorToast from '../components/utils/toast';
import GoogleBtn from '../components/utils/GoogleBtn';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);
    const [loggingIn, setLoggingIn] = useState(false);
    const dispatch = useDispatch();

    const submitHandel = async (e) => {
        e.preventDefault();
        setLoggingIn(true);

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password }, { withCredentials: true });
            if (res.data.status) {
                dispatch(getUser());
            }
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || 'An error occurred');
            setOpen(true);
        } finally {
            setLoggingIn(false);
        }
    };

    return (
        <section className="flex w-full lg:bg-[#f4f4f4] items-center py-10 justify-center">
            <div className="bg-[#fff] lg:rounded-md lg:shadow-lg w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                <div className="w-full py-5">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight">Log in to your account</h1>
                    <form className="mt-6" onSubmit={submitHandel}>
                        <div>
                            <TextField
                                type="email"
                                autoFocus
                                fullWidth
                                value={email}
                                label="Email"
                                required
                                error={!!error}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mt-4">
                            <TextField
                                fullWidth
                                type="password"
                                label="Password"
                                required
                                value={password}
                                error={!!error}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="text-right mt-2">
                            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                        </div>

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={loggingIn}
                            sx={{
                                margin:"10px 0",
                                padding:'10px 0'
                            }}
                        >
                            {loggingIn ? <CircularProgress color="white" size="25px" /> : "Log in"}
                        </Button>
                    </form>

                    <hr className="my-6 border-gray-300 w-full" />
                    <GoogleBtn />
                    <p className="mt-8">
                        Need an account? <Link to="/signup" className="text-[#251e6b] hover:text-blue-700 font-semibold">Create an account</Link>
                    </p>

                    {error && <ErrorToast setOpen={setOpen} open={open} msg={error} />}
                </div>
            </div>
        </section>
    );
}
