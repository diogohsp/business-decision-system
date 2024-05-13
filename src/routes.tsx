import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Dashboard } from "./pages/dashboard";
import { AppLayout } from "./pages/_layouts/app";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{path: '/', element: <Dashboard />}]
  },
]);
