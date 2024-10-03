import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';
import './login.css'; // Importa los estilos

const Login = () => {
    const auth = useAuth();
    const userLoggedIn = auth?.userLoggedIn;

    if (!auth) {
        return <div>Error: Unable to retrieve authentication context</div>;
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
            } catch (error) {
                setErrorMessage(error.message);
                setIsSigningIn(false);
            }
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithGoogle();
            } catch (error) {
                setErrorMessage(error.message);
                setIsSigningIn(false);
            }
        }
    };

    return (
        <div>
            {userLoggedIn && <Navigate to="/home" replace />}

            <main className="L-main">
                <div className="L-container">
                    <div className="L-textCenter">
                        <h3 className="L-title">Welcome Back</h3>
                    </div>
                    <form onSubmit={onSubmit} className="space-y-5">
                        <div>
                            <label className="L-label">Email</label>
                            <input
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="L-input"
                            />
                        </div>

                        <div>
                            <label className="L-label">Password</label>
                            <input
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="L-input"
                            />
                        </div>

                        {errorMessage && <span className="L-errorMessage">{errorMessage}</span>}

                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className={`L-button ${isSigningIn ? 'L-buttonDisabled' : ''}`}
                        >
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="L-textCenter L-textSm">
                        Don't have an account? <Link to="/register" className="L-link">Sign up</Link>
                    </div>

                    <div className="L-orDivider">
                        <span>OR</span>
                    </div>

                    <button
                        disabled={isSigningIn}
                        onClick={onGoogleSignIn}
                        className={`L-googleBtn ${isSigningIn ? 'L-googleBtnDisabled' : ''}`}
                    >
                        Continue with Google
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;
