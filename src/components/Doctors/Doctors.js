import React, { useEffect } from 'react'
import './Doctors.css'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import DoctorSingle from '../DoctorSingle/DoctorSingle';
import Footer from '../Footer/Footer';

const Doctors = () => {
     const [doctores, setDoctores] = useState([]);

     useEffect(() => {
          fetch('/fakeDoctorsData.json')
          .then(res => res.json())
          .then(data => setDoctores(data))
     },[]);
     return (
          <div>
               <Navbar></Navbar>
               <div className="mt-5">
                    <h2>Meet Our Doctors</h2>
                    <p>Get to know our doctors and tell us your problems and find solutions immediately.</p> <hr />
               </div>
               <div className="singleDocGridHare">
                    {
                         doctores.map( doc => <DoctorSingle
                              key={doc.id}
                              doc={doc}
                         ></DoctorSingle>)
                    }
               </div>
               <Footer></Footer>
          </div>
     )
}

export default Doctors;
