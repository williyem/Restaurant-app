import React from "react";

const ModalOverlay = ({ children }: any) => {
  return (
    <div className="fixed inset-0 top-0 left-0 bottom-0 right-0 backdrop-blur-[2px] bg-[#0000002a] z-50 ">
      {children}
    </div>
  );
};

export default ModalOverlay;
