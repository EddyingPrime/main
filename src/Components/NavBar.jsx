import { Link } from 'react-router-dom';



export default function NavBar() {
  return (
    <>
      <nav className="default bg-dark border-b-4 border-accent , 
      tablet:w-full tablet:z-10 tablet:flex tablet:justify-around tablet:h-20 tablet:items-center">
        <div className="flex justify-between px-4">
          <h2 className="text-accent font-Bruno text-2xl py-4 , tablet:py-0">GameHaven</h2>
          <div className="py-5 tablet:hidden">
            <span className="bg-accent font-Titilium rounded-full px-4 py-3 , hover:text-default"><a href="">Log In | Register</a></span>
          </div>
        </div>
        <div>
          <ul className="flex justify-center gap-4 pt-2 text-default text-lg font-BrunoSC text-md h-9 , tablet:gap-4 tablet:pb-0 tablet:pt-2 , desktop:gap-14">
            <li className='hover:border-b-2 hover:border-b-accent'><Link to="/">Home</Link></li>
            <li className='hover:border-b-2 hover:border-b-accent'><Link to="/games">Games</Link></li>
            <li className='hover:border-b-2 hover:border-b-accent'><Link to="/blog">Blog</Link></li>
            <li className='hover:border-b-2 hover:border-b-accent'><Link to="/forums">Forums</Link></li>
          </ul>
        </div>
        <div className="invisible tablet:visible">
          <span className="bg-accent font-Titilium rounded-full px-4 py-3 , hover:text-default"><a href="">Log In | Register</a></span>
        </div>
      </nav>
    </>
  );
}
