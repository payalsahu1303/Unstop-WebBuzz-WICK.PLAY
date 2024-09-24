import '../Sponsers/Sponsers.css'; // Assuming you have the CSS file in the right location

function Sponsers() {
  return (
    <div className="sponsors-section">

      <div className="header-section">
        <h1>WickPlay Sponsors</h1>
        <p>
          Thank you to our sponsors for their unwavering support and commitment to the spirit of cricket
        </p>
      </div>

      <div className="container">
        <div className="sponsors-grid">
          <div className="sponsor-card">
            <img src="https://i.pinimg.com/736x/6d/b7/51/6db7514a01775565741d4a20490352f5.jpg" alt="SportPro Gear" />
            <h3>SportPro Gear</h3>
            <p>Top provider of high-quality cricket equipment and apparel</p>
          </div>

          <div className="sponsor-card">
            <img src="https://i.pinimg.com/564x/5d/90/a8/5d90a87b1c5bc4c079f31b8fd351d5d8.jpg" alt="Victory Beverages" />
            <h3>Victory Beverages</h3>
            <p>Refreshing drinks designed to energize athletes and fans alike.</p>
          </div>

          <div className="sponsor-card">
            <img src="https://i.pinimg.com/564x/74/16/f5/7416f531a21ca9484bdc9363635d5887.jpg" alt="Cricket Stars Clothing" />
            <h3>Cricket Stars Clothing</h3>
            <p>Stylish and comfortable clothing for cricket enthusiasts and players</p>
          </div>

          <div className="sponsor-card">
            <img src="https://i.pinimg.com/564x/84/ca/74/84ca744e9518cea5d99cf9d33a4ecbee.jpg" alt="Prime Fitness Solutions" />
            <h3>Prime Fitness Solutions</h3>
            <p>Expert fitness equipment to enhance player performance and training.</p>
          </div>

          <div className="sponsor-card">
            <img src="https://i.pinimg.com/564x/16/66/30/1666307a7069a356e2a5b97d1bb9903e.jpg" alt="Elite Sports Nutrition" />
            <h3>Elite Sports Nutrition</h3>
            <p>Premium nutrition supplements tailored for peak athletic performance.</p>
          </div>

          <div className="sponsor-card">
            <img src="https://i.pinimg.com/564x/62/73/5a/62735a9a8cfcd3f64861230255ee477e.jpg" alt="Elite Sports Nutrition" />
            <h3>Elite Sports Nutrition</h3>
            <p>Premium nutrition supplements tailored for peak athletic performance.</p>
          </div>

          <div className="sponsor-card">
            <img src="https://i.pinimg.com/564x/4a/fb/75/4afb75adc6198afedfb78e85ac93a891.jpg" alt="Champion Sportswear" />
            <h3>Champion Sportswear</h3>
            <p>Durable and trendy sportswear for cricket players of all levels.</p>
          </div>

          <div className="sponsor-card">
            <img src="https://i.pinimg.com/564x/c3/1a/b3/c31ab355c6a6c06e534ba22abc11c063.jpg" alt="Dynamic Sports Tech" />
            <h3>Dynamic Sports Tech</h3>
            <p>Innovative technology solutions for enhanced game analysis and performance.</p>
          </div>

       
        </div>

        <div className="button-container">
          <a href="/contact" className="btn">Become a Sponsor</a>
        </div>
      </div>
    </div>
  );
}

export default Sponsers;
