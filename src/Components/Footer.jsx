export default function Footer() {
  return (
    <>
      <footer className="absolute inset-x-0 bottom-0">
        <div className="flex left-panel bg-bottom ps-12">
          <div>
            <div>
              <h3>GameHaven</h3>
              <p>" Your one-stop hub for updates, free game list across platforms,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and engaging gaming forums - where gamers unite. "</p>
            </div>
            <ul className="flex icons gap-10">
              <li><a href=""><img src="src/assets/Icons/steam-line.png" alt="" /></a></li>
              <li><a href=""><img src="src/assets/Icons/switch-line.png" alt="" /></a></li>
              <li><a href=""><img src="src/assets/Icons/Smartphone.png" alt="" /></a></li>
              <li><a href=""><img src="src/assets/Icons/Playstation.png" alt="" /></a></li>
              <li><a href=""><img src="src/assets/Icons/Mac.png" alt="" /></a></li>
              <li><a href=""><img src="src/assets/Icons/windows-line.png" alt="" /></a></li>
            </ul>
          </div>
          <div className="Avatar absolute end-10 bottom-12">
            <img src="src/assets/Images/Avatar.png" alt="" />
          </div>
        </div>
        <section className="flex justify-between px-12 items-center h-12">
          <span>Copyright &copy; 2023 All Rights Reserved</span>
          <div>
            <ul className="bot-nav flex gap-12">
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
