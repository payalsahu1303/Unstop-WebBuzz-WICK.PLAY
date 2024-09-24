import { useState } from 'react';
import '../Contact/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Your message has been sent successfully!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-us-container">
      <h1 className="contact-title">CONTACT US</h1>
      <div className="contact-content">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
            <textarea
              name="message"
              placeholder="Enter your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
        <div className="map-section">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.9986616088377!2d72.82193997497355!3d18.931453382243507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e6302b239d%3A0x4135ddad0084bdf5!2sCricket%20Club%20of%20India%20(CCI)!5e0!3m2!1sen!2sin!4v1726293204517!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="location-text">
            Our Location: WRJG+G39 Stadium House, Veer Nariman Rd, Churchgate, Mumbai, Maharashtra 400020
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
