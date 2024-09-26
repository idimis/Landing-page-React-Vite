import React from 'react';
import Header from '../../components/Header';
import './styles.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Header />
      <div className="contact-details">
        <img src={require('../../assets/Ayushphoto.svg')} alt="Ayush" className="profile-photo" />
        <div className="details">
          <h3>Contact details:</h3>
          <p>ayush.barnwal@brightscout.com</p>
          <p>+918651447521</p>
          <h3>Social:</h3>
          <p>LinkedIn, Instagram, Twitter, Webflow</p>
        </div>
      </div>
      <div className="message-form">
        <h2>Let's build something cool together</h2>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="James Robert" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="ayush.barnwal@brightscout.com" />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" placeholder="For web design work Enquire" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Type your Message"></textarea>
        </div>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default ContactUs;
