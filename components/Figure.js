const Figure = {
  Core: (props) => (
    <figure
      className={`bg-hatch-secondary my-10 rounded-[76%_24%_68%_32%_/_29%_67%_33%_71%] p-5 -m-5 ${props.className}`}
    >
      {props.children}
    </figure>
  ),
  Caption: (props) => (
    <figcaption
      className={"caption caption-2 text-center mt-3 [text-wrap:balance]"}
    >
      {props.children}
    </figcaption>
  ),
};

export default Figure;
