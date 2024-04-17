const List = {
  UL: (props) => (
    <ul className={"list-ul body body-1 mt-5 space-y-5 mb-11"}>
      {props.children}
    </ul>
  ),
  OL: (props) => (
    <ol className={"list-ol body body-1 space-y-5 mt-5 mb-11"}>
      {props.children}
    </ol>
  ),
};

export default List;
