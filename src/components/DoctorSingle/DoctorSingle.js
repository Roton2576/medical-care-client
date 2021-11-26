import React from 'react'
import './DoctorSingle.css'

const DoctorSingle = (props) => {
     const {id, name, specialist, describe, img} = props.doc;

     return (
          <div className="singlSingleDOc">
               <img src={img} className="singleMeetImg" alt="" />
               <h4> Dr.{name} </h4>
               <p> {specialist} </p> <hr />
               <p> {describe} </p>
          </div>
     )
}

export default DoctorSingle;
