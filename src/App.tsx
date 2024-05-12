import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="%s | decisionSystem" />
        <RouterProvider router={router}></RouterProvider>
        <Toaster richColors />
      </HelmetProvider>
    </>
  );
}

export default App;
