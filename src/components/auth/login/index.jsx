import React, { useState, useEffect } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';
import { db } from '../../../firebase/firebase';
import {doc,getDoc} from 'firebase/firestore';
import './login.css'; // Importa los estilos

const Login = () => {
    const auth = useAuth();
    const userLoggedIn = auth?.userLoggedIn;
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading]= useState(true);
    const [role, setRole]=useState(null);

    useEffect(()=>{
        if(auth?.currentUser){
            const fetchUserRole = async()=>{
                try{
                    const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
                    if(userDoc.exists()){
                        setRole(userDoc.data().role);
                    }
                    setLoading(false);
                }catch (error){
                    console.error("Error al obtener el rol del usuario ", error);
                    setErrorMessage("Error al obtener el rol del usuario");
                    setLoading(false);
                }
            };
            fetchUserRole();
        }else{
            setLoading(false);
        }
    }, [auth]);

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
                console.log("Usuario autenticado con UID:", auth.currentUser.uid);

                const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
                if(userDoc.exists()){
                    const role = userDoc.data().role;
                    console.log("Rol de usuario: ", role);

                    if(role== 'admin'){
                        console.log("Redirigiendo al dashboard de admin...")
                        navigate('/dashboard');
                    }else{
                        console.log("Redirigiendo a home...")
                        navigate('/home');
                    } 
                }else{
                    setErrorMessage("No se encontro el rol del usuario.")
                    console.log("Error no se encontro el rol");
                }
            } catch (error) {
                setErrorMessage(error.message);
                console.log("Error de inicio de sesion");
                
            } finally{
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
    if(loading){
        return <div>Cargando...</div>
    }


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
