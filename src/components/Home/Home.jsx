import '../Home/Home.css';
import Sponsers from '../Sponsers/Sponsers';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Home() {
  const [backgroundImage, setBackgroundImage] = useState(''); // Add useState for backgroundImage

  useEffect(() => {
    const images = [
      'https://images.augustman.com/wp-content/uploads/sites/6/2023/04/16072649/Untitled-design-2023-04-16T071319.214.jpg?tr=w-1920',
      'https://images.adsttc.com/media/images/62fb/da85/dfae/2a01/6f1d/1adc/large_jpg/compton-and-edrich-stands-lords-cricket-ground-wilkinsoneyre_1.jpg?1660672666',
      'https://images.pexels.com/photos/41257/pexels-photo-41257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3452544/pexels-photo-3452544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ];
    let currentIndex = 0;

    const changeBackground = () => {
      setBackgroundImage(images[currentIndex]);
      currentIndex = (currentIndex + 1) % images.length;
    };

    // Set initial image
    changeBackground();

    // Change the background every 1 second
    const interval = setInterval(changeBackground, 3000);

    // Clean up interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  const profileData = useSelector((val) => val.profile);
  
  return (
    <div>
      <div>
        <div
          className="home-container"
          style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} // Added styles for better appearance
        >
          <header className="hero-section">
            <h1>Welcome to Cricket Tournaments</h1>
            <h1>WickPlay.com</h1>
            <p>Join and compete in the most exciting cricket tournaments!</p>
            {
              profileData.length > 0 ? (
                <h2 className='namehead'>Welcome @{profileData[0].name}</h2>
              ) : (
                <div className="btns">
                  <Link to='/signup' className='signupbtn'>Sign UP</Link>
                </div>
              )
            }
          </header>
        </div>
      </div>
      <Gallery />
      <Sponsers />
      <Footer />
    </div>
  );
}

export default Home;
