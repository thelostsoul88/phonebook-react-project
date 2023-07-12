import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "../Loader/Loader";
import { Header } from "../Header/Header";

import { ToastContainer } from "react-toastify";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </div>
  );
};
