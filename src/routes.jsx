import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import Offers from "../src/pages/Offers";

function mainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/offers" element={<Offers />} />
    </Routes>
  );
}

export default mainRoutes;
