import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Navbar from '../Navbar/Navbar';
import './RegisterHare.css'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification  } from "firebase/auth";
import Footer from '../Footer/Footer';

const auth = getAuth();


const RegisterHare = () => {
     const { signinUsingGoogle } = useAuth();
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState('');

     const handleEmailBlur = (e) => {
          setEmail(e.target.value);
     }

     const handlePassBlur = (e) => {
          setPassword(e.target.value);
     }

     const verifyEmailA = () => {
          sendEmailVerification(auth.currentUser)
          .then(result => {

          })
     }

     const handleRegister = (e) => {
          e.preventDefault();
          console.log(email, password);
          if(password.length < 6) {
               setError('password should be at least 6 characters');
               return;
          }
          if(!/(?=.*[A-Z].*[A-Z])/.test(password)) {
               setError('password should have at least two UPPERCASE letter');
               return;
          }
          createUserWithEmailAndPassword(auth, email, password)
          .then(result => {
               const user = result.user;
               setError('');
               verifyEmailA();
          })
          .catch(error => {
               setError(error.message);
          })
     }


     return (
          <div>
               <Navbar></Navbar>
               <h2 className="mt-4 mb-3">Please Register Now!</h2>
               <form onSubmit={ handleRegister } className="w-50 mx-auto border p-5 container">
                    <div className="row mb-3">
                         <label htmlhtmlFor="inputText" className="col-sm-2 col-form-label">Name :</label>
                         <div className="col-sm-10">
                              <input type="text" className="form-control" id="inputText" placeholder="Enter your name" />
                         </div>
                    </div>

                    <div className="row mb-3">
                         <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email :</label>
                         <div className="col-sm-10">
                              <input onBlur={ handleEmailBlur } type="email" className="form-control" id="inputEmail3" placeholder="Enter your Email" required />
                         </div>
                    </div>

                    <div className="row mb-3">
                         <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password :</label>
                         <div className="col-sm-10">
                              <input onBlur={ handlePassBlur } type="password" className="form-control" id="inputPassword3" placeholder="Enter your password" required />
                         </div>
                    </div>

                    <div className="text-danger mb-3"> {error} </div>
                    
                    <button type="submit" className="btn btn-primary">Sign Un</button> <br /> <br />
                    <button onClick={ signinUsingGoogle } className="btn btn-danger fs-4"><i class="fab fa-google-plus-g"></i> Sign In with Google </button> <br /> <br />
                    <Link to="login"> <h5> Already Registered ? </h5> </Link>
               </form>
               <Footer></Footer>
          </div>
     )
}

export default RegisterHare;
