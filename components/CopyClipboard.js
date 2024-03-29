"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { ClipboardIcon } from "@heroicons/react/24/outline";

export default function CopyClipboard({ copyText, className }) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = async () => {
    try {
      await copyTextToClipboard(copyText);
      setIsCopied(true);
      toast.success("Copié dans la presse-papier", { id: "clipboard" });
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    } catch (e) {
      console.log(err);
    }
  };

  return (
    <button
      className={`action action-secondary ${className}`}
      onClick={handleCopyClick}
    >
      <ClipboardIcon className={"h-4 w-4 stroke-current stroke-teal-700"} />
    </button>
  );
}
