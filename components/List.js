const List = {
  UL: (props) => (
    <ul className={"list-ul body body-1 mt-5 space-y-5"}>{props.children}</ul>
  ),
  OL: (props) => (
    <ul className={"list-ol body body-1 space-y-5 mt-5"}>{props.children}</ul>
  ),
};

export default List;
