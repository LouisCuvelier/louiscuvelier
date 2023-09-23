import slugify from "slugify";
import reactToText from "react-to-text";
import { LinkIcon } from "@heroicons/react/24/outline";

const Heading = {
  H2: (props) => (
    <div className={"mt-20 mb-10"}>
      <h2
        className={"title title-3 anchor"}
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
    </div>
  ),
  H3: (props) => (
    <div className={"mt-20 mb-10"}>
      <h3
        className={"title title-4 anchor"}
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
    </div>
  ),
  H4: (props) => (
    <div className={"mt-20 mb-10"}>
      <h4
        className={"title title-5 anchor"}
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
    </div>
  ),
};

export default Heading;
