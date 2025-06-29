import { Routes, Route } from "react-router-dom";
import siteMap from "./siteMap";
import Dashbord from "../pages/Dashbord";
import SingUp from "../pages/SingUp";
import SingIn from "../pages/SingIn";
import Result from "../pages/Result";
import Voting from "../pages/Voting";
import ProtectedRoutes from "../middlewares/ProtectedRoutes";
import UnProtectedRoutes from "../middlewares/UnProtectedRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={siteMap.public.dashboard} element={<Dashbord />} />
      <Route path={siteMap.public.result} element={<Result />} />

      <Route element={<UnProtectedRoutes />}>
        <Route path={siteMap.public.singUp} element={<SingUp />} />
        <Route path={siteMap.public.singIn} element={<SingIn />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path={siteMap.private.vote} element={<Voting />} />
      </Route>
    </Routes>
  );
}
