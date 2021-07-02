import React from "react";
import "./commentInput.styles.scss";

const CommentInput = ({ operation, ...props }) => {
  return (
    <>
      <input {...props} onChange={operation}></input>
    </>
  );
};

export default CommentInput;
