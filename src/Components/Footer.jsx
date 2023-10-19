import { Link } from "react-router-dom";
import backgroundImage from "../assets/Images/Back-ground.jpg";
import Mac from "../assets/Icons/Mac.png";
import Playstation from "../assets/Icons/Playstation.png";
import Smartphone from "../assets/Icons/Smartphone.png";
import Steam from "../assets/Icons/steam-line.png";
import Switch from "../assets/Icons/switch-line.png";
import Windows from "../assets/Icons/windows-line.png";
import Avater from "../assets/Images/Avatar.png";
// import logo from "";

export default function Footer() {
  return (
    <footer className="">
      <div className="relative h-heightbg">
        {/* bgimage */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <img
          src={Avater}
          alt="Overlapping Image"
          className="absolute bottom-0 right-0 w-width1 h-height1 "
        />

        {/* <img
          src={}
          alt="Overlapping Image"
          className="absolute bottom-0 left-0"
        /> */}

        <p className="absolute text-white">
          YOUR ONE-STOP HUB FOR UPDATES, FREE GAMES DOWNLOADS ACROSS PLATFORMS,
          AND ENGAGING GAMING FORIMS - WHERE GAMES UNITE.
        </p>

        {/* icons */}
        <div className="absolute bottom-0 px-20 my-20">
          <ul className="flex space-x-4 ">
            <li>
              <img src={Steam} />
            </li>
            <li>
              <img src={Switch} />
            </li>
            <li>
              <img src={Smartphone} />
            </li>
            <li>
              <img src={Playstation} />
            </li>
            <li>
              <img src={Mac} />
            </li>
            <li>
              <img src={Windows} />
            </li>
          </ul>
        </div>
      </div>
      {/* navbarfooter */}
      <nav className="bg-primary py-4 px-20 h- flex justify-between">
        <div className="text-white">
          <p>Copyright &copy; 2023 All rights reserved</p>
        </div>
        <div className="flex gap-3 text-white ">
          <Link to="/">HOME</Link>
          <Link to="/Games">GAMES</Link>
          <Link to="/Blog">BLOG</Link>
          <Link to="/Forums">FORUMS</Link>
        </div>
      </nav>
    </footer>
  );
}
