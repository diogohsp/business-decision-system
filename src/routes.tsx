import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Dashboard } from "./pages/dashboard";
import { AppLayout } from "./pages/_layouts/app";
import { Listing } from "./pages/newDecision";
import { CheckDecision } from "./pages/checkDecision";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/listing", element: <Listing /> },
      { path: "/check", element: <CheckDecision /> },
    ],
  },
]);
