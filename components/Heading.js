const Heading = {
  H2: (props) => (
    <h2 className={"title title-3 mt-20 mb-10"}>{props.children}</h2>
  ),
  H3: (props) => (
    <h3 className={"title title-4 mt-20 mb-10"}>{props.children}</h3>
  ),
  H4: (props) => (
    <h4 className={"title title-5 mt-20 mb-10"}>{props.children}</h4>
  ),
  H5: (props) => (
    <h5 className={"title title-5-light mt-20 mb-10"}>{props.children}</h5>
  ),
};

export default Heading;
