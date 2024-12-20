import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, CircularProgress, TextField, Autocomplete } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from '../store/api/UserApi';
import GoogleBtn from '../components/utils/GoogleBtn';
import ErrorToast from '../components/utils/toast';

export default function SignUp() {
    useEffect(() => {
        document.title = "Register with Pareeksha";
    }, []);

    const [open, setOpen] = useState(false);
    const [error, setError] = useState(null);
    const [registering, setRegister] = useState(false);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        yearOfStudy: "",
        program: "",
        university: "",
    });

    const [universityOptions, setUniversityOptions] = useState([]);
    const [loadingUniversities, setLoadingUniversities] = useState(false);

    const programOptions = [
        "Computer Science",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Business Administration",
        "Arts and Humanities",
        "Medicine",
        "Law"
    ];

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const fetchUniversities = async (query) => {
        setLoadingUniversities(true);
        try {
            const response = await axios.get(`http://universities.hipolabs.com/search`, {
                params: { country: 'India', name: query },
            });
            const universityNames = response.data.map((uni) => uni.name);
            setUniversityOptions(universityNames);
        } catch (error) {
            console.error("Error fetching universities:", error);
        } finally {
            setLoadingUniversities(false);
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setRegister(true);
        if (formData.password !== formData.confirmPassword) {
            setError("Password and Confirm Password should be the same");
            setOpen(true);
            setRegister(false);
            return;
        }

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, formData, { withCredentials: true });
            dispatch(getUser());
        } catch (error) {
            setError(error.response?.data?.message || "Registration failed");
            setOpen(true);
        } finally {
            setRegister(false);
        }
    };

    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-blue-600 hidden lg:block lg:w-[650px] xl:w-[700px] md:w-1/2 h-screen">
                <img src="assets/image.png" alt="Background" className="w-full h-full object-cover" />
            </div>

            <div className="bg-white w-full md:max-w-xl lg:max-w-full md:mx-auto xl:w-full px-6 lg:px-16 xl:px-12 flex justify-center">
                <form onSubmit={submitHandler} className="w-full my-10">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight">Create a new account</h1>

                    <div className="mt-6">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <TextField
                                autoFocus
                                fullWidth
                                variant='standard'
                                value={formData.name}
                                onChange={changeHandler}
                                name='name'
                                label="Name"
                                required
                            />
                            <TextField
                                fullWidth
                                variant='standard'
                                value={formData.email}
                                onChange={changeHandler}
                                type='email'
                                label="Email"
                                name='email'
                                required
                            />
                            <TextField
                                fullWidth
                                variant='standard'
                                value={formData.password}
                                onChange={changeHandler}
                                type='password'
                                label="Password"
                                name='password'
                                required
                            />
                            <TextField
                                fullWidth
                                variant='standard'
                                value={formData.confirmPassword}
                                onChange={changeHandler}
                                type='password'
                                label="Confirm Password"
                                name='confirmPassword'
                                required
                            />
                            <TextField
                                type='number'
                                label='Year of Study'
                                fullWidth
                                variant='standard'
                                name='yearOfStudy'
                                value={formData.yearOfStudy}
                                autoFocus
                                required
                                onChange={changeHandler}
                            />
                            <Autocomplete
                                autoFocus
                                required
                                options={programOptions}
                                freeSolo
                                value={formData.program}
                                onChange={(event, newValue) => {
                                    setFormData({ ...formData, program: newValue });
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        autoFocus
                                        required
                                        {...params}
                                        label="Program"
                                        variant="standard"
                                        name="program"
                                    />
                                )}
                            />
                            <Autocomplete
                                autoFocus
                                required
                                options={universityOptions}
                                freeSolo
                                loading={loadingUniversities}
                                onInputChange={(event, newInputValue) => {
                                    if (newInputValue) fetchUniversities(newInputValue);
                                }}
                                onChange={(event, newValue) => {
                                    setFormData({ ...formData, university: newValue });
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        required
                                        autoFocus
                                        {...params}
                                        label="University"
                                        variant="standard"
                                        name="university"
                                        InputProps={{
                                            ...params.InputProps,
                                            endAdornment: (
                                                <>
                                                    {loadingUniversities ? <CircularProgress size={20} /> : null}
                                                    {params.InputProps.endAdornment}
                                                </>
                                            ),
                                        }}
                                    />
                                )}
                            />
                        </div>

                        <Button
                            fullWidth
                            sx={{ margin: "10px 0 0 0" }}
                            variant='contained'
                            type="submit"
                        >
                            {registering ? <CircularProgress size={25} sx={{ color: "white" }} /> : "Sign Up"}
                        </Button>
                    </div>

                    <hr className="my-6 border-gray-300 w-full" />
                    <GoogleBtn />
                    <p className="mt-8">
                        Already a user? <Link to='/' className="text-blue-500 hover:text-blue-700 font-semibold">Login</Link>
                    </p>
                </form>
                {error && <ErrorToast open={open} setOpen={setOpen} msg={error} />}
            </div>
        </section>
    )
}

