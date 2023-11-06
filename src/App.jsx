import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Blog from "./pages/Blog";
import Forums from "./pages/Forums";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ThreadPage from "./Components/Thread";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Forums" element={<Forums />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Thread/:id" element={<ThreadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
