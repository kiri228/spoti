import React from "react";
import { ToastContainer, ToastOptions, toast } from "react-toastify";

export function notify(message, type) {
  return toast(message, { type });
}

const Toastify = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default Toastify;
