import React, { useState, useEffect } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';
import { db } from '../../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import './login.css';

const Login = () => {
    const { t } = useTranslation();
    const auth = useAuth();
    const userLoggedIn = auth?.userLoggedIn;
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState(null);

    useEffect(() => {
        if (auth?.currentUser) {
            const fetchUserRole = async () => {
                try {
                    const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
                    if (userDoc.exists()) {
                        setRole(userDoc.data().role);
                    }
                    setLoading(false);
                } catch (error) {
                    console.error("Error al obtener el rol del usuario ", error);
                    setErrorMessage(t('loginErrorFetchingRole'));
                    setLoading(false);
                }
            };
            fetchUserRole();
        } else {
            setLoading(false);
        }
    }, [auth, t]);

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                const userCredential = await doSignInWithEmailAndPassword(email, password);
                const user = userCredential.user;

                if (!user) {
                    throw new Error(t('loginAuthError'));
                }

                const userDoc = await getDoc(doc(db, 'users', user.uid));

                if (userDoc.exists()) {
                    const role = userDoc.data().role;

                    if (role === 'admin') {
                        navigate('/dashboard/AdminHome');
                    } else {
                        navigate('/home');
                    }
                } else {
                    setErrorMessage(t('loginRoleNotFound'));
                }
            } catch (error) {
                console.error("Error en el inicio de sesión:", error);
                if (error.code === "auth/invalid-credential") {
                    setErrorMessage(t('loginInvalidCredentials'));
                } else {
                    setErrorMessage(t('loginError', { error: error.message }));
                }
            } finally {
                setIsSigningIn(false);
            }
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        setErrorMessage('');

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

    if (loading) {
        return <div>{t('loginLoading')}</div>;
    }

    return (
        <div>
            {userLoggedIn && <Navigate to="/home" replace />}

            <main className="L-main">
                <div className="L-container">
                    <div className="L-textCenter">
                        <h3 className="L-title">{t('loginWelcomeBack')}</h3>
                    </div>
                    <form onSubmit={onSubmit} className="space-y-5">
                        <div>
                            <label className="L-label">{t('loginEmail')}</label>
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
                            <label className="L-label">{t('loginPassword')}</label>
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
                            {isSigningIn ? t('loginSigningIn') : t('loginSignIn')}
                        </button>
                    </form>

                    <div className="L-textCenter L-textSm">
                        {t('loginNoAccount')} <Link to="/register" className="L-link">{t('loginSignUp')}</Link>
                    </div>

                    <div className="L-orDivider">
                        <span>{t('loginOr')}</span>
                    </div>

                    <button
                        disabled={isSigningIn}
                        onClick={onGoogleSignIn}
                        className={`L-googleBtn ${isSigningIn ? 'L-googleBtnDisabled' : ''}`}
                    >
                        {t('loginGoogle')}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;
