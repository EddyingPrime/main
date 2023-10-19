import Home from "../pages/Home";
import Games from "../pages/Games";
import Forums from "../pages/Forums";
import Blog from "../pages/Blog";
import MainTemplate from "../Components/templates/MainTemplates";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainTemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Forums" element={<Forums />} />
          <Route path="/Blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
