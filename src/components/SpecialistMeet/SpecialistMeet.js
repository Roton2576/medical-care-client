import React from 'react'
import MeetOurSpecial from '../MeetOurSpecial/MeetOurSpecial';
import './SpecialistMeet.css'

const SpecialistMeet = () => {
     return (
     <div className="container">
          <div className="row">
               <div className="col-md-3 emergencyCare">
                    <i className="fas fa-stethoscope emergencyCareIcon"></i>
                    <h4> EMERGENCY CARE </h4>
               </div>
               <div className="col-md-3 onlineService">
                    <i className="fab fa-servicestack onlineServiceIcon"></i>
                    <h3> ONLINE SERVICE </h3>
               </div>
               <div className="col-md-3 qualifiedDoc">
                    <i className="fas fa-user-md qualifiedDocIcon"></i>
                    <h3> QUALIFIED DOCTORS </h3>
               </div>
               <div className="col-md-3 hoursService">
                    <i className="fas fa-ambulance hoursServiceIcon"></i>
                    <h3> 24 HOURS SERVICE </h3>
               </div>
          </div>
          <div className="row">
               <h3 className="mt-5"> Meet our <span className="fw-bold"> Medical Specialists</span> </h3>
               <p>If you want to know and understand about our medical, find out all our benefits from here ut laoreet dolore magna aliquam erat volutpat.</p>
               <MeetOurSpecial></MeetOurSpecial>
          </div>
     </div>
     )
}

export default SpecialistMeet;
