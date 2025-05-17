import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Home.jsx";
import AddCoffe from "./components/AddCoffe.jsx";
import UpdateCoffe from "./components/UpdateCoffe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        hydrateFallbackElement: <h1>Loading...</h1>,
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffe,
      },
      {
        path: "/updateCoffee",
        Component: UpdateCoffe,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
