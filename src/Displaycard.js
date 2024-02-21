import React from 'react';
import { Link } from 'react-router-dom';
import './Displaycard.css';

const Displaycard = ({ data }) => {
  return (
    <div className='c' style={{maxWidth:"1300px"}}>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-2 mx-3" style={{marginBottom: '15px', margin:' 25px'}}>
     
        {data.map((curElm) => {
          const { id, location, speciality, image, description, hospital,src1} = curElm;
          return (
            <div className="col" key={id} >
              <div className="card h-100">
                <img
                  src={image}
                  className="card-img-top"
                  alt="..."
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                

                <div className="card-body" >
                  <h4 className="card-title text" style={{ textAlign: 'center' }}><strong>{hospital}</strong></h4>
                  <h4 className="card-title text" style={{ textAlign: 'center' }}><strong>{location}</strong></h4>
                  <span className="card-subtitle " style={{ textAlign: 'center',fontSize:'1.5rem',fontFamily: 'Signika' }}>{speciality}</span>
                  <h4 className="card-title text" style={{ textAlign: 'center' }}><h5>{description}</h5></h4>
                  
                  <iframe
                    src={src1}
                    width="30"
                    height="30"
              
                    style={{ border: '0' }}
                    allowFullScreen=""
                    title="Google Maps"
                  ></iframe>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <style>
        {`
          @media (max-width: 992px) {
            .row-cols-md-3 > * {
              flex: 0 0 50%;
              max-width: 50%;
            }
          }

          @media (max-width: 768px) {
            .row-cols-md-3 > * {
              flex: 0 0 100%;
              max-width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Displaycard;