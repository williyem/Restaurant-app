import React, { ReactNode } from "react";

const ModalOverlay = ({ children }: any) => {
  return (
    <div className="fixed inset-0 top-0 left-0 bottom-0 right-0 bg-red-500">
      {children}
    </div>
  );
};

export default ModalOverlay;
