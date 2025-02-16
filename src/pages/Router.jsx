import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import Layout from "../layouts/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
