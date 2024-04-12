import React from 'react';
import './Aboutus.css'; // Import CSS file
import Gallery from '../Gallery/Gallery';
import Testimonials from '../Testimonals/Testimonals';
import Carosel from '../Carosel/Carosel';

const Aboutus = () => {
  return (
    <div>
    <Testimonials/>
    <Carosel/>
    <Gallery/>
    </div>
  );
};

export default Aboutus;





