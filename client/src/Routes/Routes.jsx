import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
