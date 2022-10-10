import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "../page/NotFound";
import Redirect from './Redirect';

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Redirect />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
};
export default MainRoute;
