"use client";

import CloseIcon from "@/components/Icon/CloseIcon";
import Button from "@/components/common/Button/Button";
import cn from "@/utils/style/cn";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import WhiteShadowUp from "@/components/common/WhiteShadow/WhiteShadowUp";
import PaymentSuccessIcon from "@/components/Icon/PaySuccessIcon";

const modalStyle = {
  overlayContainer: "fixed inset-0 z-[100] overflow-y-auto bg-white/60",
  containerWrapper: "min-h-screen flex justify-center items-center",
  contentContainer:
    "max-w-[416px] h-screen fixed bottom-[62px] max-h-[362px] w-full bg-white drop-shadow-poke rounded-[20px] pt-[34px] pb-[40px] px-[40px] flex justify-center items-center flex-col",

  // Actions
  closeButton:
    "drop-shadow-poke w-[35px] h-[35px] bg-alert flex justify-center items-center rounded-[10px] absolute -bottom-[22.5px] left-[50%] -translate-x-1/2 cursor-pointer hover:opacity-90",
};

interface PaymentSuccessProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentSuccess = (props: PaymentSuccessProps) => {
  return (
    <Dialog
      as="div"
      className={cn(modalStyle.overlayContainer)}
      open={props.isOpen}
      onClose={() => {}}
    >
      <div className={cn(modalStyle.containerWrapper)}>
        <Dialog.Panel className={cn(modalStyle.contentContainer)}>
          <PaymentSuccessIcon />
          <h1 className="text-xl font-medium mt-[25px]">Payment Success!</h1>
          {/* Close Button: Start */}
          <button
            type="button"
            onClick={props.onClose}
            className={cn(modalStyle.closeButton)}
          >
            <CloseIcon className="text-white w-[14px] h-[14px]" />
          </button>
          {/* Close Button: End */}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PaymentSuccess;
