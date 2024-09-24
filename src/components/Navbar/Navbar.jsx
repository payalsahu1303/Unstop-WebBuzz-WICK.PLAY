import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { useSelector } from 'react-redux'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const profileData = useSelector((val) => val.profile);
  console.log(profileData)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="wick-navbar">
        <div className="wick-logo">
          WICK.PLAY
        </div>

        {/* Hamburger button for mobile view */}
        <div className="wick-hamburger" onClick={toggleMenu}>
          &#9776;
        </div>

        {/* Navigation List */}
        <div className={`wick-navlist ${menuOpen ? 'wick-open' : ''}`}>
          <ul>
            <li>
              <Link to='/' onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to='/livematches' onClick={toggleMenu}>Live Matches</Link>
            </li>
            <li>
              <Link to='/complete' onClick={toggleMenu}>Upcoming</Link>
            </li>
            <li>
              <Link to='/players' onClick={toggleMenu}>Players</Link>
            </li>
          
            <li>
              <Link to='/turnaments' onClick={toggleMenu}>Organize</Link>
            </li>
            <li>
              <Link to='/registor' onClick={toggleMenu}>Team Register</Link>
            </li>
            <li>
              <Link to='/contact' onClick={toggleMenu}>Contact us</Link>
            </li>

            {
              profileData.length > 0 ? (<li><Link to='/profile' onClick={toggleMenu} className='wick-icon'><CgProfile /></Link>
              </li>) : (<></>)
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
