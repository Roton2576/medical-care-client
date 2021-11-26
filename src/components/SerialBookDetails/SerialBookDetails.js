import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';

const SerialBookDetails = () => {
     const { serialbookId } = useParams();
     const [serialBooks, setSerialBooks] = useState({});

     useEffect( () => {
          fetch('/fakeDoctorsData.json')
          .then(res => res.json())
          .then(data => {
               const serialBook = data.find(elm => elm.id == serialbookId)
               setSerialBooks(serialBook);
          })
     }, []);

     return (
          <div>
               <Navbar></Navbar>
               <div>
                    <div>
                         <img src={serialBooks.img} alt="" />
                    </div>
                    <div>
                         <h3>Dr.{serialBooks.name}</h3>
                         <h6>Specilist:{serialBooks.specialist}</h6> <hr />
                         <p>{serialBooks.describe}</p>
                    </div>
               </div>
          </div>
     )
}

export default SerialBookDetails;
