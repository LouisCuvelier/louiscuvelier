"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function AnimatedImage({ base64, ...rest }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Image
      ref={ref}
      {...rest}
      placeholder={"blur"}
      blurDataURL={base64}
      className={`border-offset-2 duration-300 mx-auto border-2 border-slate-700 transition ease-in-out rounded ${
        inView
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-12 opacity-0 scale-95"
      }`}
    />
  );
}
