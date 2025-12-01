import {Route, Routes} from "react-router-dom";
// import AppRoutes from "../routes/Routes";
// import { Home } from "../pages/home/Home";

const AppRouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home Page</div>}/>
      {/* <Route path="*" element={<AppRoutes/>}/> */}
    </Routes>
  );
};

export default AppRouteConfig;
