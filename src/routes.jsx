import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/Home" element={<Home />} />

      <Route exact path="/" element={<Login />} />
    </Routes>
  );
};

export default Router;
