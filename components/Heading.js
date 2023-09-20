import slugify from "slugify";
import reactToText from "react-to-text";
import { LinkIcon } from "@heroicons/react/24/outline";

const Heading = {
  H2: (props) => (
    <h2
      className={"title title-3 anchor mt-20 mb-10"}
      tabIndex="-1"
      dir={"auto"}
      id={slugify(reactToText(props.children), { lower: true, strict: true })}
    >
      <a
        aria-hidden="true"
        tabIndex="-1"
        href={`#${slugify(reactToText(props.children), {
          lower: true,
          strict: true,
        })}`}
      >
        <LinkIcon />
      </a>
      <span>{props.children}</span>
    </h2>
  ),
  H3: (props) => (
    <h3
      className={"title title-4 anchor mt-20 mb-10"}
      tabIndex="-1"
      dir={"auto"}
      id={slugify(reactToText(props.children), { lower: true, strict: true })}
    >
      <a
        aria-hidden="true"
        tabIndex="-1"
        href={`#${slugify(reactToText(props.children), {
          lower: true,
          strict: true,
        })}`}
      >
        <LinkIcon />
      </a>
      <span className={"flex flex-wrap"}>{props.children}</span>
    </h3>
  ),
  H4: (props) => (
    <h4
      className={"title title-5 anchor mt-20 mb-10"}
      tabIndex="-1"
      dir={"auto"}
      id={slugify(reactToText(props.children), { lower: true, strict: true })}
    >
      <a
        aria-hidden="true"
        tabIndex="-1"
        href={`#${slugify(reactToText(props.children), {
          lower: true,
          strict: true,
        })}`}
      >
        <LinkIcon />
      </a>
      <span>{props.children}</span>
    </h4>
  ),
};

export default Heading;
