import { useState } from "react";
import "./Gallery.css";


const images = [
  {
    id: 1,
    src: "https://img.freepik.com/free-photo/portrait-person-playing-cricket-sport_23-2151702088.jpg?t=st=1726588850~exp=1726592450~hmac=41776da5fb8cedf4e39d7361890af7feaf3e4c1d035f3ebfa96c7b829493aeab&w=360",
    description: "Cricket player in action"
  },
  {
    id: 2,
    src: "https://img.freepik.com/free-photo/portrait-person-playing-cricket-sport_23-2151702146.jpg?t=st=1726588897~exp=1726592497~hmac=5ad4ffbd570a9da1525fc778d77ceab0004e1dacf3823fd9cbc0dd214682b533&w=360",
    description: "Cricket player during a match"
  },
  {
    id: 3,
    src: "https://img.freepik.com/free-photo/medium-shot-baseball-player-portrait_23-2151207847.jpg?t=st=1726588947~exp=1726592547~hmac=34d812e361c520f351cc5de6c9887b00829b6b0a88dbae30094329294df4c475&w=996",
    description: "Baseball player portrait"
  },
  {
    id: 4,
    src: "https://img.freepik.com/free-photo/cricket-match-with-player_23-2151702176.jpg?t=st=1726589013~exp=1726592613~hmac=82d4c8238db474adf023cdff3a8ec78fb6e89fc1ecf6870837515cba3f673dee&w=996",
    description: "Cricket match in action"
  },
  {
    id: 5,
    src: "https://img.freepik.com/free-photo/cricket-match-with-player_23-2151702212.jpg?t=st=1726589090~exp=1726592690~hmac=7e76c82010f9ebe51938b30d2547adb57ef0e2344d5096bc28651fa8094841c0&w=996",
    description: "Close-up of a cricket player"
  },
  {
    id: 6,
    src: "https://e0.pxfuel.com/wallpapers/338/656/desktop-wallpaper-indian-cricket-captain-mahendra-singh-mahendra-singh-dhoni.jpg",
    description: "Indian cricket captain Mahendra Singh Dhoni"
  },
  {
    id: 7,
    src: "https://i.pinimg.com/736x/bd/ae/fb/bdaefbadea967cf929ab850ab5ae12ac--cricket-sport.jpg",
    description: "Cricket sport action shot"
  },
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">Tournament Gallery</h1>
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            } ${index === currentIndex - 1 || (currentIndex === 0 && index === images.length - 1) ? "prev" : ""} ${
              index === currentIndex + 1 || (currentIndex === images.length - 1 && index === 0) ? "next" : ""
            }`}
          >
            <img src={image.src} alt={`Slide ${index + 1}`} />
            <p className="carousel-description">{image.description}</p>
          </div>
        ))}
      </div>

      <div className="slider-control">
        <button className="slider-button prev" onClick={handlePrevClick}>
          ❮
        </button>
        <button className="slider-button next" onClick={handleNextClick}>
          ❯
        </button>
      </div>
    </div>
  );
}

export default Gallery;
