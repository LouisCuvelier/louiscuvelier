import React from "react";

const Copyright = (props) => {
  return (
    <div className={`label label-base ${props.classes}`}>
      © {new Date().getFullYear()}, Louis Cuvelier
    </div>
  );
};

export default Copyright;
