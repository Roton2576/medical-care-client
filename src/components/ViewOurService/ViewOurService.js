import React from 'react'
import './ViewOurService.css'

const ViewOurService = () => {
     return (
          <div className="container mt-5 pt-4">
               <div className="medicalCareCom mb-5">
                    <h2>MEDICAL CARE.COM</h2> <hr />
               </div>
               <div className="row d-flex justify-content-around">
                    <div className="col-md-3 mt-4">
                         <h2><span className="fw-bold">  Health and Medical</span><br />Care.Com </h2>
                         <p>You can get your best treatment from our health care.com, the best medical store in the world. erat volutpat.</p>
                         <button className="btn btn-danger mt-5 fs-3">VIEW OUR SERVICE</button>
                    </div>

                    <div className="col-md-3">
                         <div>
                              <div className="d-flex text-start iconContainer mb-5">
                                   <div>
                                   <i className="fas fa-plus-square iconnnnns"></i>
                                   </div>
                                   <div>
                                        <h3>Rehabilitation Center</h3>
                                        <p>You can get your best treatment from our health care.com, the best medical store in the world. ut laoreet dolore.</p>
                                   </div>
                              </div>
                              <div className="d-flex text-start iconContainer">
                                   <div>
                                   <i className="fas fa-user-md iconnnnns"></i>
                                   </div>
                                   <div>
                                        <h3>Qualified Doctors</h3>
                                        <p>You can get your best treatment from our health care.com, the best medical store in the world. ut laoreet dolore.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    
                    <div className="col-md-3">
                         <div>
                              <div className="d-flex text-start iconContainer mb-5">
                                   <div>
                                   <i className="fas fa-calendar-plus iconnnnns"></i>
                                   </div>
                                   <div>
                                        <h3>Rehabilitation Center</h3>
                                        <p>You can get your best treatment from our health care.com, the best medical store in the world. ut laoreet dolore.</p>
                                   </div>
                              </div>
                              <div className="d-flex text-start iconContainer">
                                   <div>
                                   <i className="fas fa-ambulance iconnnnns"></i>
                                   </div>
                                   <div>
                                        <h3>Qualified Doctors</h3>
                                        <p>You can get your best treatment from our health care.com, the best medical store in the world. ut laoreet dolore.</p>
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     )
}

export default ViewOurService;
