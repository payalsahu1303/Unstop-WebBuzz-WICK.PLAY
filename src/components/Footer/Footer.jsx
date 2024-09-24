import '../Footer/Footer.css'; // Ensure your CSS file is imported

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-heading">FOLLOW US</h2>
      <div className="footer-container">
       
        {/* Quick Links */}
        <div className="footer-column">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Tournaments</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Social Media Links</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h2 className="footer-heading">Social Media</h2>
          <ul className="social-links">
            <li><a href="#" className="social-icon sl"><i className="fab fa-facebook"></i> Facebook</a></li>
            <li><a href="#" className="social-icon sl"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#" className="social-icon sl"><i className="fab fa-instagram"></i> Instagram</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-column">
          <h2 className="footer-heading">Contact Information</h2>
          <p>Address: WRJG+G39 Stadium House, Veer Nariman Rd, Churchgate, Mumbai, Maharashtra 400020</p>
          <p>Phone: +91 123-456-7890</p>
          <p>Email: wickyplay@gmail.com</p>
          <p>Office Hours: Mon-Fri 9:00am - 6:00pm IST</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2024 WickPlay Organizations. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
