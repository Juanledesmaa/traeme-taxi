
import React from "react";
import './Services.scss'

// Import your images
import corolla from '../../img/corolla_200.png';
import driver from '../../img/driver_200.png';
import travel from '../../img/travel_200.png';


// Mapping object for image imports
const imageMap = {
  image1: corolla,
  image2: driver,
  image3: travel,
  // Add more mappings as needed
};

const Services = (props) => (
    <div className="services">
        <div id="features" className='text-center'>
            <div className='container'>
                <div className='col-md-12 section-title'>
                    <h2><span className="first-word">Nuestros</span> <span className="last-word">Servicios</span></h2>
                </div>
                <div className='row'>
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.title}-${i}`} className='col-xs-4 col-md-4'>
                                <div className="icon-center">
                                    <div className="icon-container">
                                        {/* Use dynamic image path from imageMap */}
                                        <img src={imageMap[d.image]} alt={d.title} />
                                    </div>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.text}</p>
                            </div>
                        ))
                        : 'Loading...'}
                </div>
            </div>
        </div>
    </div>
);

export default Services;
