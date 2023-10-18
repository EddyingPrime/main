import Navbar from "../NavBar";
import { Outlet } from "react-router-dom";

export default function MainTemplate() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
