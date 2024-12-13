import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import googlelogo from '../assets/googlelogo.png'

function Landing() {
    const handleSignIn = () => {
        // Logic for signing in
    };

    const handleGoogleSignIn = () => {
        // Logic for Google sign-in
    };

    return (
        <section className="flex flex-col md:flex-row h-screen">
            {/* Left Section */}
            <div className="flex-[0.4] h-1/3 md:h-full bg-gray-800 text-white flex flex-col items-center justify-center text-center p-6">
                <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
                <p className="text-base text-gray-300">
                    Log in to access your account and explore our features.
                </p>
            </div>

            {/* Right Section */}
            <div className="flex-1 h-2/3 md:h-full flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md flex flex-col gap-6 p-8 bg-white shadow-lg rounded-lg">
                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">Sign In</h2>
                        <p className="text-gray-500">Please enter your details below</p>
                    </div>

                    {/* Email Field */}
                    <TextField
                        required
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="outlined"
                    />

                    {/* Password Field */}
                    <TextField
                        required
                        label="Password"
                        type="password"
                        fullWidth
                        variant="outlined"
                    />

                    {/* Login Button */}
                    <button
                        onClick={handleSignIn}
                        className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                    >
                        Login
                    </button>

                    {/* OR Divider */}
                    <div className="flex items-center gap-4">
                        <hr className="flex-1 border-gray-300" />
                        <span className="text-gray-500">OR</span>
                        <hr className="flex-1 border-gray-300" />
                    </div>

                    {/* Google Sign-In Button */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition"
                    >
                        <img className='h-4 w-4' src={googlelogo} alt="" />
                        Sign in with Google
                    </button>

                    {/* Footer */}
                    <div className="text-center text-gray-600">
                        Don’t have an account?{' '}
                        <Link to={'/signup'} className="text-gray-800 font-medium hover:underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Landing;
