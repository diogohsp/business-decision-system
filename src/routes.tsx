import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Dashboard } from "./pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);
