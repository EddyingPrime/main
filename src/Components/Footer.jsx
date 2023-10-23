import React, { useState } from 'react';

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
      <footer className="ftr-content fixed bottom-0 flex, tablet:fixed tablet:bottom-0 tablet:inset-x-0">
          <div className="tablet:flex tablet:justify-around">
            <div>
              <div>
                <h1 className="text-accent font-Bruno text-2xl text-center py-2 , tablet:text-2xl tablet:py-4">GameHaven</h1>
                <p className="text-default font-Titilium text-center">" Your one-stop hub for updates, free game list across platforms, and engaging gaming forums - where gamers unite. "</p>
              </div>
              <ul className="flex justify-center py-2.5 , tablet:py-5 tablet:gap-10">
                <li><a href=""><img src="src/assets/Icons/steam-line.png" width="50px" alt="" /></a></li>
                <li><a href=""><img src="src/assets/Icons/switch-line.png" width="50px" alt="" /></a></li>
                <li><a href=""><img src="src/assets/Icons/Smartphone.png" width="50px" alt="" /></a></li>
                <li><a href=""><img src="src/assets/Icons/Playstation.png" width="50px" alt="" /></a></li>
                <li><a href=""><img src="src/assets/Icons/Mac.png" width="50px" alt="" /></a></li>
                <li><a href=""><img src="src/assets/Icons/windows-line.png" width="50px" alt="" /></a></li>
              </ul>
            </div>
            <div >
              <h2 className='text-center'>Contact Us</h2>
              <form  action="">
                  <div className='mb-4'>
                    <label className='pr-2' htmlFor="">Name:</label>
                    <input type="text" />
                  </div>
                  <div className='mb-4'>
                    <label className='pr-2' htmlFor="">Email:</label>
                    <input type="text" />
                  </div>
                  <div className='mb-4'>
                    <label className='pr-2' htmlFor="">Message:</label>
                    <input type="text" />
                  </div>
              </form>
            </div>
          </div>
          <section className=" text-center p-5 text-default , tablet:flex tablet:justify-around tablet:items-center">
            <span>All Rights Reserved &copy; 2023 GameHaven</span>
            <div>
              <ul className="flex justify-center gap-10 py-2 text-default font-BrunoSC , tablet:z-20">
                <li>Home</li>
                <li>Games</li>
                <li>Blog</li>
                <li>Forums</li>
              </ul>
            </div>
          </section>
      </footer>
    </>
  );
}
