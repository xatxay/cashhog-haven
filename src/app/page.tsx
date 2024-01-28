import "@/styles/globals.css";
import React from "react";
import WholePage from "./_components/wholepage/page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default async function Home() {
  return (
    <div>
      <WholePage />
      <ToastContainer autoClose={3000} theme="dark" closeOnClick />
    </div>
  );
}
