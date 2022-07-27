import React from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className="overlay">{children}</div>,
    document.getElementById("overlay")
  );
}

export default Modal;
