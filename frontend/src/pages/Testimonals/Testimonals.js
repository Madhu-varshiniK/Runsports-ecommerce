import React from 'react';
import './Testimonals.css';

const Testimonals = () => {
  return (
    <div>
    <h1>"What our client says"!!</h1>

    <div className='test_container'>
      <figure className="snip1533">
        <figcaption>
          <blockquote>
            <p>Amazing products! I've never been so satisfied with my purchases. Highly recommend this e-commerce site!.They are Worth for money</p>
          </blockquote>
          <h3>-Kleioptra</h3>
        </figcaption>
      </figure>
      <figure className="snip1533">
        <figcaption>
          <blockquote>
            <p>"These products exceeded my expectations. Top-notch quality and great value for money!Outstanding service and quality."</p>
          </blockquote>
          <h3>-Ursula Gurnmeister</h3>
        </figcaption>
      </figure>
      <figure className="snip1533">
        <figcaption>
          <blockquote>
            <p>Shopping here was a delight. Top-notch products and swift delivery. Will definitely return! I've never been more satisfied with my purchases.HIghly recommended</p>
          </blockquote>
          <h3>-Ingredia Nutrisha</h3>
        </figcaption>
      </figure>
    </div>
    </div>
  );
}

export default Testimonals;
