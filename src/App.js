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
import SanPham from "./component/page/san pham/SanPham";
import Price from "./component/price/Price";
import CaseStudy from "./component/page/case-study/CaseStudy";
import DichVuChuyenSau from "./component/page/dich vu chuyen sau/DichVuChuyenSau";
import BangGia from "./component/page/bang gia/BangGia";
import ScrollToTop from "./component/layout/ScrollTop";
import Blogs from "./component/page/blogs/Blogs";
import EsteeLauder from "./component/bai-viet/case-study/EsteeLauder";
const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/san-pham",
            element: <SanPham />,
          },
          {
            path: "/bang-gia",
            element: <BangGia />,
          },
          {
            path: "/case-study",
            element: <CaseStudy />,
          },
          {
            path: "dich-vu-chuyen-sau",
            element: <DichVuChuyenSau />,
          },
          {
            path: "blogs",
            element: <Blogs />,
          },
          {
            path: "/EsteeLauder",
            element: <EsteeLauder />,
          },
        ],
      },
    ],
    {
      basename: "/message",
    }
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
