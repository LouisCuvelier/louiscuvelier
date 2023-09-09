import { createElement, useEffect } from "react";
import cardEffect from "../lib/card-effect";

export default function CardEffect(props) {
  const { as = "div", children, ...rest } = props;

  useEffect(() => {
    cardEffect(".card");
  }, []);

  return createElement(
    as,
    {
      ...rest,
      className: `border-hatch card border-hatch border-[12px] rounded hover:shadow-lg transition hover:duration-100 duration-300 ease-in-out ${rest.className}`,
    },
    children
  );
}
