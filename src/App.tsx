import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

function App() {
  return (
    <>
    <ThemeProvider storageKey="business-decision-theme" defaultTheme="dark">
      <HelmetProvider>
        <Helmet titleTemplate="%s | decisionSystem" />
        <RouterProvider router={router}></RouterProvider>
        <Toaster richColors />
      </HelmetProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
