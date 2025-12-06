import {Route, Routes} from "react-router-dom";
import { Home } from "../pages/home/Home";
import AppRoutes from "../routes/Routes";

const AppRouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<AppRoutes/>}/>
    </Routes>
  );
};

export default AppRouteConfig;
