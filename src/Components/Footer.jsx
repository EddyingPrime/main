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
        <div className='bg-image bg-cover h-[350px] tablet:flex tablet:justify-around'>
          <div className='w-[700px]'>
            <div>
              <h3 className='text-accent font-Bruno text-center text-[50px] px-10 pt-10'>GameHaven</h3>
              <p className="text-default font-Titilium text-center text-lg px-10 pt-4 pb-6"><em>" Your one-stop hub for updates, free game list across platforms, and engaging gaming forums - where gamers unite. "</em></p>
            </div>
            <div>
              <ul className='flex gap-2
              tablet:gap-10 tablet:p-10'>
                <li><a href=""><img src="src/assets/Icons/steam-line.png" alt="" /></a></li>
                <li><a href=""><img src="src/assets/Icons/switch-line.png" alt="" /></a></li>
                <li><a href=""><img src="src/assets/Icons/Smartphone.png" alt="" /></a></li>
                <li><a href=""><img src="src/assets/Icons/Playstation.png" alt="" /></a></li>
                <li><a href=""><img src="src/assets/Icons/windows-line.png" alt="" /></a></li>
                <li><a href=""><img src="src/assets/Icons/Mac.png" alt="" /></a></li>
              </ul>
            </div>
          </div>
          <div className="flex w-[500px] h-[200px] items-center justify-center">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-accent text-sm font-bold mb-2" htmlFor="name">Name</label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <label className="block text-accent text-sm font-bold mb-2" htmlFor="email"> Email </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                </div>
                <div className="mb-6">
                  <label className="block text-accent text-sm font-bold mb-2" htmlFor="message">Message</label>
                  <textarea className="shadow appearance-none border rounded w-full py-2 px-3leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Your Message" />
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-dark text-white hover:bg-accent hover:text-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='flex bg-dark h-[50px] text-default items-center justify-between px-20'>
          <div>All Rights Reserved &copy; GameHaven 2023</div>
          <div>
          <ul className="flex justify-center gap-4 pt-2 text-default text-lg font-BrunoSC text-md h-9 , tablet:gap-4 tablet:pb-0 tablet:pt-2 , desktop:gap-14">
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
