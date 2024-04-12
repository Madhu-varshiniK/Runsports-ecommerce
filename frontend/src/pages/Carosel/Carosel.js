import React from 'react';
import './carosel.css';

function Carosel() {
  return (
    <section>
      <div className="row">
        <h2 className="section-heading">Our Services</h2>
      </div>
      <div className="row">
        <ServiceCard iconClass="fas fa-hammer" heading="Product Variety" description="Explore a vast array of products ranging from electronics to fashion, ensuring there's something for everyone's needs and preferences." />
        <ServiceCard iconClass="fas fa-brush" heading="Secure Transactions" description="Rest assured with our secure payment gateway, safeguarding your financial information during every transaction for peace of mind." />
        <ServiceCard iconClass="fas fa-wrench" heading="Fast Delivery" description="Experience swift and reliable delivery services, ensuring your orders reach your doorstep in no time, enhancing convenience." />
        <ServiceCard iconClass="fas fa-truck-pickup" heading="Customer Support" description="Our dedicated customer support team is always ready to assist you, offering prompt solutions to any queries or concerns you may have." />
        <ServiceCard iconClass="fas fa-broom" heading="Easy Returns" description="Enjoy hassle-free returns and exchanges, making it simple to exchange or return products that don't meet your expectations." />
        <ServiceCard iconClass="fas fa-plug" heading="Personalized Recommendations" description="Receive personalized product recommendations based on your browsing history and preferences, enhancing your shopping experience with tailored suggestions." />
      </div>
    </section>
  );
}

function ServiceCard({ iconClass, heading, description }) {
  return (
    <div className="column">
      <div className="card">
        <div className="icon-wrapper">
          <i className={iconClass}></i>
        </div>
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Carosel;
