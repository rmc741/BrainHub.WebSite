import {Route, Routes} from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import AppRoutes from "../routes/Routes";

const AppRouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="*" element={<AppRoutes/>}/>
    </Routes>
  );
};

export default AppRouteConfig;
