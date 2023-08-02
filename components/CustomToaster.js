"use client";
import { Transition } from "@headlessui/react";
import { resolveValue, Toaster, ToastIcon } from "react-hot-toast";

export default function CustomToaster() {
  return (
    <Toaster
      position={"bottom-right"}
      toastOptions={{
        success: {
          iconTheme: {
            primary: "#0d9488",
            secondary: "#FFF",
          },
        },
      }}
    >
      {(t) => (
        <Transition
          appear
          show={t.visible}
          className="transform p-3 flex bg-slate-50 rounded shadow-lg ring ring-slate-50"
          enter="transition-all duration-150"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-75"
        >
          <ToastIcon toast={t} />
          <p className="caption caption-2 ml-2">{resolveValue(t.message)}</p>
        </Transition>
      )}
    </Toaster>
  );
}
