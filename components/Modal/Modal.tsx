import { useState, useEffect } from "react";
import { SetStateAction } from "react";

import ReactDOM from "react-dom";

type ModalProps = {
  children: React.ReactNode;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  show: boolean;
};

export const Modal = ({ show, children, onClose }: ModalProps) => {
  const [sendPortal, sentSendPortal] = useState(false);

  useEffect(() => {
    sentSendPortal(true);
  }, []);

  let modalContent = show ? (
    <div className="fixed top-0 flex items-center justify-center w-screen h-screen bg-overLay">
      <div className="flex flex-col items-center bg-white rounded-md w-96 h-96 justify-evenly">
        <p className="px-16 leading-8 text-center">{children}</p>
        <button
          onClick={onClose}
          className="px-8 py-2 rounded-lg bg-lightGrayTwo"
        >
          Close
        </button>
      </div>
    </div>
  ) : null;

  if (sendPortal) {
    const portalDiv = document.getElementById("modal-root")!;

    return ReactDOM.createPortal(modalContent, portalDiv);
  } else {
    return null;
  }
};
