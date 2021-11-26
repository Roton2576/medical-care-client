import React from 'react'
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
     const { user, logOut } = useAuth();

     return (
          <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light ms-5 me-5">
               <div className="container-fluid">
               <a className="navbar-brand fw-bold fs-2" href="#"><i className="fas fa-clinic-medical text-success"></i> <span className="text-danger">M</span>EDICAL <span className="text-danger">Care.com</span> </a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
                    <Link to="/home">
                         <li className="nav-item">
                              <a className="nav-link active fs-5" aria-current="page" href="#">Home</a>
                         </li>
                    </Link>
                    <Link to="/doctors">
                         <li className="nav-item">
                              <a className="nav-link text-black fs-5" href="#">Doctors</a>
                         </li>
                    </Link>
                    <Link to="/features">
                         <li className="nav-item">
                              <a className="nav-link text-black fs-5" href="#">Contact Us</a>
                         </li>
                    </Link>
                    
                         <li className="nav-item">
                              <a className="nav-link text-black fs-5" href="#"> <span className="text-danger"> { user.displayName } </span> </a>
                         </li>
                    { user.email ? <Link to="/login">
                         <li className="nav-item">
                              <a onClick={ logOut } className="nav-link text-black fs-5" href="#">Log Out</a>
                         </li>
                    </Link> : <Link to="/login">
                         <li className="nav-item">
                              <a className="nav-link text-black fs-5" href="#">Login</a>
                         </li>
                    </Link>}
                    </ul>
                    
               </div>
               </div>
          </nav>
          </div>
     )
}

export default Navbar;
