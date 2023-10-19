import Navbar from "../NavBar";
import News from "../News";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

export default function MainTemplate() {
  return (
    <>
      <Navbar />
      <News />
      <Outlet />
      <Footer />
    </>
  );
}
