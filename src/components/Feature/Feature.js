import React from 'react'
import './Feature.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Feature = () => {
     return (
          <div>
               <Navbar></Navbar>
               <div className="row container d-flex justify-content-around justify-content-center align-items-center mx-auto mt-4">
                    <div className="col-md-5">
                         <h2>Get in Touch</h2>
                         <p>Introduce yourself then join here for safety, otherwise you will not get the solution.</p>

                         <form className="row g-3">
                              <div className="col-md-6">
                              <label htmlFor="inputEmail4" className="form-label">Email</label>
                              <input type="email" className="form-control" id="inputEmail4" />
                              </div>
                              <div className="col-md-6">
                              <label htmlFor="inputPassword4" className="form-label">Password</label>
                              <input type="password" className="form-control" id="inputPassword4" />
                              </div>
                              <div className="col-12">
                              <label htmlFor="inputAddress" className="form-label">Address</label>
                              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                              </div>
                              <div className="col-12">
                              <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                              </div>
                              <div className="col-md-6">
                              <label htmlFor="inputCity" className="form-label">City</label>
                              <input type="text" className="form-control" id="inputCity" />
                              </div>
                              <div className="col-md-4">
                              <label htmlFor="inputState" className="form-label">State</label>
                              <select id="inputState" className="form-select">
                                   <option selected>Country</option>
                                   <option>Bangladesh</option>
                                   <option>India</option>
                                   <option>Vutan</option>
                                   <option>China</option>
                                   <option>Japan</option>
                                   <option>Pakisthan</option>
                              </select>
                              </div>
                              <div className="col-md-2">
                              <label htmlFor="inputZip" className="form-label">Zip</label>
                              <input type="text" className="form-control" id="inputZip" />
                              </div>
                              <div className="col-12">
                              </div>
                              <div className="col-12">
                              <button type="submit" className="btn btn-primary">Submit</button>
                              </div>
                         </form>

                    </div>
                    <div className="col-md-5">
                         <h2 className="mb-4">Medical Press</h2>
                         <div className="d-flex">
                              <div>
                                   <p>121 King Street, Melbourne Victoria 3000 Australia</p>
                              </div>
                              <div>
                                   <p>Phone :+1-800-123-4567</p>
                                   <p>Fax :+1-123-456-7890</p>
                              </div>
                         </div>
                    </div>
               </div>
               <Footer></Footer>
          </div>
     )
}

export default Feature;
