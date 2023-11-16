import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import AdminPage from "./component/route/Admin";
import LoginPage from "./component/route/Login";
import Layout from "./component/layout/Layout";
import Header from "./component/layout/Header";
import { useState } from "react";
import Home from "./component/route/Home";
const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/home",
            element: <Header />,
          },
        ],
      },
    ],
    {
      basename: "/message",
    }
  );
  return <RouterProvider router={router} />;
};

export default App;
