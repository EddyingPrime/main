export default function NavBar() {
  return (
    <nav className="flex justify-center items-center h-14">
      <div className="flex container justify-between items-center">
        <div className="logo">
          <a href="">GameHaven</a>
        </div>
        <div className="pages">
          <ul className="flex justify-around gap-12">
            <li>Home</li>
            <li>Games</li>
            <li>Blog</li>
            <li>Forums</li>
          </ul>
        </div>
        <div className="login">
          <a href="">Log In | Register</a>
        </div>
      </div>
    </nav>
  );
}
