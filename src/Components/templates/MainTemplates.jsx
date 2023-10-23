import Navbar from "../NavBar";
// import Footer from "../Footer";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

export default function MainTemplate() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
