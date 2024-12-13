import { useState, useEffect } from "react";
import { TextField, Alert } from "@mui/material";
import { auth, googleProvider } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    sendEmailVerification,
    onAuthStateChanged,
} from "firebase/auth";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(""); // State for error messages
    const [emailVerified, setEmailVerified] = useState(false); // State to track email verification status

    // Check email verification status
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmailVerified(user.emailVerified);
                if (!user.emailVerified) {
                    alert("Please verify your email to access all features.");
                }
            }
        });
        return () => unsubscribe();
    }, []);

    // Handle user registration
    const handleSignUp = async () => {
        setError(""); // Clear previous error messages
        if (!name) {
            setError("Please enter your name.");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User signed up:", user);

            // Send email verification
            await sendEmailVerification(user);
            alert("Signup successful! Please check your email for verification.");
        } catch (error) {
            console.error("Error signing up:", error.message);
            setError(error.message);
        }
    };

    // Handle Google sign-up
    const handleGoogleSignUp = async () => {
        setError(""); // Clear previous error messages
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("Google user signed up:", result.user);
            alert("Signup successful!");
        } catch (error) {
            console.error("Error with Google sign-up:", error.message);
            setError(error.message);
        }
    };

    // Resend verification email
    const resendVerificationEmail = async () => {
        const user = auth.currentUser;
        if (user && !user.emailVerified) {
            try {
                await sendEmailVerification(user);
                alert("Verification email resent. Please check your inbox.");
            } catch (error) {
                console.error("Error resending verification email:", error.message);
                setError(error.message);
            }
        } else {
            alert("User is either not logged in or already verified.");
        }
    };

    return (
        <section className="flex flex-col md:flex-row h-screen">
            {/* Left Section */}
            <div className="flex-[0.4] h-1/3 md:h-full bg-gray-800 text-white flex flex-col items-center justify-center text-center p-6">
                <h1 className="text-4xl font-bold mb-4">Join Us</h1>
                <p className="text-base text-gray-300">
                    Create your account to start your journey with us.
                </p>
            </div>

            {/* Right Section */}
            <div className="flex-1 h-2/3 md:h-full flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md flex flex-col gap-6 p-8 bg-white shadow-lg rounded-lg">
                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-800">Sign Up</h2>
                        <p className="text-gray-500">Please fill in the details below</p>
                    </div>

                    {/* Error Alert */}
                    {error && <Alert severity="error">{error}</Alert>}

                    {/* Name Field */}
                    <TextField
                        required
                        label="Full Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    {/* Email Field */}
                    <TextField
                        required
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {/* Password Field */}
                    <TextField
                        required
                        label="Password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* Sign Up Button */}
                    <button
                        onClick={handleSignUp}
                        className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                    >
                        Sign Up
                    </button>

                    {/* OR Divider */}
                    <div className="flex items-center gap-4">
                        <hr className="flex-1 border-gray-300" />
                        <span className="text-gray-500">OR</span>
                        <hr className="flex-1 border-gray-300" />
                    </div>

                    {/* Google Sign-Up Button */}
                    <button
                        onClick={handleGoogleSignUp}
                        className="w-full bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 flex items-center justify-center gap-2 transition"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                            alt="Google"
                            className="h-5 w-5"
                        />
                        Sign up with Google
                    </button>

                    {/* Email Verification Notice */}
                    {!emailVerified && (
                        <div className="text-center mt-4">
                            <p className="text-sm text-gray-500">
                                Haven't received the verification email?
                            </p>
                            <button
                                onClick={resendVerificationEmail}
                                className="text-blue-500 hover:underline"
                            >
                                Resend Verification Email
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Signup;
