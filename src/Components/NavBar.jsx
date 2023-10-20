export default function NavBar() {
  return (
    <>
    <nav className="flex justify-center items-center h-16">
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
    <section className="flex items-center h-12">
      <div className="news">
          Latest News
      </div>
      <div className="news-carousel">
          <ul className="flex gap-4">
              <li><a href=""></a>Racing</li>
              <li><a href=""></a>Virtual Reality (VR) continued to be integrated into racing games, providing a more immersive experience.</li>
              <li><a href=""></a>Strategy</li>
              <li><a href=""></a>Valheim released a new patch notes.</li>
          </ul>
      </div>
    </section>
  </>
  );
}
