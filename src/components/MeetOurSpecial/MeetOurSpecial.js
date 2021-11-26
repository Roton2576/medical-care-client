import React, { useEffect, useState } from 'react'
import SingleMeetSpecialist from '../SingleMeetSpecialist/SingleMeetSpecialist';
import './MeetOurSpecial.css'

const MeetOurSpecial = () => {
     const [doctors, setDoctors] = useState([]);

     useEffect(() => {
          fetch('./fakeDoctorsData.json')
          .then(res => res.json())
          .then(data => setDoctors(data))
     },[]);

     return (
     <div className="row">
          <div className="singleMeetSpecialGrid">
               {
                    doctors.map( doctor => <SingleMeetSpecialist
                         key={doctor.id}
                         doctor={doctor}
                    ></SingleMeetSpecialist>)
               }
          </div>
     </div>
     )
}

export default MeetOurSpecial;
