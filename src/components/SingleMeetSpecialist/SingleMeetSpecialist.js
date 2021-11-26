import React from 'react'
import { Link } from 'react-router-dom';
import './SingleMeetSpecialist.css'

const SingleMeetSpecialist = (props) => {
     const {id, name, specialist, describe, img} = props.doctor;

     return (
          <div className="nameImgDesParaCon">
                    <div>
                         <div> <img src={img} className="singleMeetImg" alt="" /> </div>
                    </div>
                    <div>
                         <h4 className="mt-2"> <span className="dr fw-bold">Dr.</span> {name} </h4>
                         <h6 className="mt-3"> <span className="specilistDes"> <span className="text-success"> Specilist: </span>  {specialist} </span> </h6> <hr className="mt-4 bg-seccess" />
                         <p> {describe} </p>
                         <Link to={`/serialbook/${id}`}>
                              <button className="btn allBtnColorHare"> SERIAL BOOKING NOW </button>
                         </Link>
                    </div>
          </div>
     )
}

export default SingleMeetSpecialist;
