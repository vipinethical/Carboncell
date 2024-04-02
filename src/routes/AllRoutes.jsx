import {
  Route,
  Routes,
  createRoutesFromElements,
  redirect,
  useLocation,
} from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="home">
          <Route path="" element={<Home />} />
        </Route>
        <Route path="organization" element={<Home />} />
        <Route path="assets" element={<Home />} />
        <Route path="trade" element={<Home />} />
        <Route path="history" element={<Home />} />
        <Route path="notifications" element={<Home />} />
        <Route path="support" element={<Home />} />
        <Route path="settings" element={<Home />} />
      </Route>

      <Route path="*" loader={() => redirect("/")} />
    </>
  )
);
