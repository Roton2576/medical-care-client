import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Navbar from '../Navbar/Navbar';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Footer from '../Footer/Footer';

const auth = getAuth();


const Login = () => {
     const { signinUsingGoogle } = useAuth();
     const location = useLocation();
     const [emaill, setEmaill] = useState('');
     const [passs, setPasss] = useState('');
     const [errorr, setErrorr] = useState('');

     const handleEmailB = (e) => {
          setEmaill(e.target.value);
     }

     const handlePassB = (e) => {
          setPasss(e.target.value);
     }

     const handleLogin = (e) => {
          e.preventDefault();
          console.log(emaill, passs);
          signInWithEmailAndPassword(auth, emaill, passs)
          .then(userCredential => {
               const user = userCredential.user;
               console.log(user);
               setErrorr('');
          })
          .catch(error => {
               setErrorr(error.message);
          })
     }

     return (
          <div>
               <Navbar></Navbar>
               <h2>Please Login Hare!</h2>
               <form onSubmit={ handleLogin } className="w-50 mx-auto border p-5 container">

                    <div className="row mb-3">
                         <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email :</label>
                         <div className="col-sm-10">
                              <input onBlur={ handleEmailB } type="email" className="form-control" id="inputEmail3" />
                         </div>
                    </div>
                    <div className="row mb-3">
                         <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password :</label>
                         <div className="col-sm-10">
                              <input onBlur={ handlePassB } type="password" className="form-control" id="inputPassword3" />
                         </div>
                    </div>
                    
                    <div className="text-danger mb-3"> {errorr} </div>

                    <button type="submit" className="btn btn-primary mt-3">Log In</button> <br /> <br />
                    <button onClick={ signinUsingGoogle } className="btn btn-danger fs-4"><i className="fab fa-google-plus-g"></i> Sign In with Google </button> <br /> <br />
                    <Link to="/register"> <h5> <span>New User?</span> Create Account </h5> </Link>
               </form>
               <Footer></Footer>
          </div>
     )
}

export default Login;
