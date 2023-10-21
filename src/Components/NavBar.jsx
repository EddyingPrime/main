export default function NavBar() {
  return (
    <>
      <nav className="bg-dark border-b-4 border-accent , tablet:flex tablet:justify-around tablet:h-16 tablet:items-center">
        <div className="flex justify-between px-4">
          <h2 className="text-accent font-Bruno text-xl py-4 , tablet:py-0">GameHaven</h2>
          <div className="py-4 tablet:hidden">
            <span className="bg-accent rounded-full px-2 py-1">Log In | Register</span>
          </div>
        </div>
        <div>
          <ul className="flex justify-center gap-10 pt-2 text-default font-BrunoSC text-md , tablet:gap-14 tablet:pb-0 tablet:pt-2">
            <li>Home</li>
            <li>Games</li>
            <li>Blog</li>
            <li>Forums</li>
          </ul>
        </div>
        <div className="invisible tablet:visible">
          <span className="bg-accent rounded-full px-2 py-1">Log In | Register</span>
        </div>
      </nav>
      <section className="flex w-full h-10">
        <div className="bg-accent font-Titilium text-default w-1/4 flex justify-end items-center pr-12">Latest News</div>
        <div className="bg-dark w-3/4"></div>
      </section>
    </>
  );
}
