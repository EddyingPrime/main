import React, { useState, useEffect } from 'react';


const images = [
  'src/assets/Images/image.png',
  'src/assets/Images/image2.png',
  'src/assets/Images/image3.png',
  'src/assets/Images/image4.png',
  'src/assets/Images/image5.png',
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main>
        <div>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className={`absolute transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className='absolute rounded mt-40 p-10 z-10 bg-dark w-75 opacity-60 hover:opacity-90 , tablet:left-20 tablet:mt-96 tablet:pb-10'>
          <h2 className='text-accent font-Titilium text-2xl pb-4'>THE BEST GAMES OUT THERE</h2>
          <p className='text-default font-Titilium pb-2'>Discover tons of free games sorted from all platforms - rated by the gamers.</p><br />
          <span className='font-Titilium text-dark text-lg bg-accent rounded-full p-2 , hover:text-default hover:p-2.5 hover:border-b-accent'><a  href="#">Browse Games</a></span>
        </div>
      </main>
    </>
  );
};

export default Carousel;

