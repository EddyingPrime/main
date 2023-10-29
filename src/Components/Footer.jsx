import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
  }

  return (
    <>
      <footer>
        <div className='bg-image bg-cover
        desktop:flex desktop:justify-around desktop:h-[350px]

        '>
          <div className='
          desktop:w-[650px]'>
            <div>
              <h3 className='flex justify-center text-accent font-Bruno text-[40px] py-1
              desktop:text-[50px] desktop:px-10 desktop:pt-10'>GameHaven</h3>
              <p className="text-default font-Titilium text-center text-lg px-10 pb-6"><em>" Your one-stop hub for updates, free game list across platforms, and engaging gaming forums - where gamers unite. "</em></p>
            </div>
            <div className='flex justify-around'>
              <div className='text-center'>
                <h3 className='text-accent'>Explore more games on your preferred platform:</h3>
                <ul className='flex justify-evenly gap-2
                tablet:gap-10 tablet:p-4 tablet:w-auto
                '>
                  
                  <li className='hover:scale-125'><a href="https://store.steampowered.com/" target="_blank"><img src="src/assets/Icons/steam-line.png" alt="" /></a></li>
                  <li className='hover:scale-125'><a href="https://www.nintendo.com/us/store/games/nintendo-switch-games/#sort=df" target="_blank"><img src="src/assets/Icons/switch-line.png" alt="" /></a></li>
                  <li className='hover:scale-125'><a href="https://play.google.com/store/games?device=windows&pli=1" target="_blank"><img src="src/assets/Icons/Smartphone.png" alt="" /></a></li>
                  <li className='hover:scale-125'><a href="https://www.playstation.com/en-us/ps5/games/?smcid=pdc%3Aen-us%3Aprimary%20nav%3Amsg-games%3Aps5#out-now" target="_blank"><img src="src/assets/Icons/Playstation.png" alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded px-8 pt-6 mb-4">
              <h2 className="text-2xl text-default font-bold mb-4">Contact Us</h2>
              <form className='
              desktop:flex gap-10'>
                <div>
                  <div className="mb-4">
                    <label className="block text-accent text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-accent text-sm font-bold mb-2" htmlFor="email"> Email </label>
                    <input className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <label className="block text-accent text-sm font-bold mb-2" htmlFor="message">Message</label>
                    <textarea className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-[300px]" id="message" rows="5" placeholder="Your Message" />
                  </div>
                </div>
              </form>
              <div className="flex items-center justify-between">
                <button className="bg-dark w-full text-white hover:bg-accent hover:text-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Send</button>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center p-2
        desktop:flex bg-dark desktop:h-[50px] text-default items-center justify-between'>
          <div className='text-sm w-full'>All Rights Reserved &copy; GameHaven 2023</div>
          <div className='p-2 w-full'>
            <ul className="flex justify-center gap-4 text-default text-lg font-BrunoSC text-md h-9 , tablet:gap-4 tablet:pb-0 tablet:pt-2 , desktop:gap-14">
              <li className='hover:border-b-2 hover:border-b-accent'><Link to="/">Home</Link></li>
              <li className='hover:border-b-2 hover:border-b-accent'><Link to="/games">Games</Link></li>
              <li className='hover:border-b-2 hover:border-b-accent'><Link to="/blog">Blog</Link></li>
              <li className='hover:border-b-2 hover:border-b-accent'><Link to="/forums">Forums</Link></li>
            </ul>
        </div>
        </div>
      </footer>
    </>
  );
}
