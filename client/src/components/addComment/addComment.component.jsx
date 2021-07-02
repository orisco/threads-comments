import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import CustomButton from "../customButton/customButton.component";
import CommentInput from "../commentInput/commentInput.component";
import { Box } from "@material-ui/core";

const AddComment = ({ parentCommentId, clickAddComment, history }) => {
  const [commentTitle, addCommentTitle] = useState("");

  const handleChange = (event) => {
    addCommentTitle(event.target.value);
  };

  const submitComment = () => {
    axios
      .post("http://localhost:1500/threads/", {
        parentId: parentCommentId,
        title: commentTitle,
      })
      .then((newComment) =>
        parentCommentId
          ? clickAddComment(newComment.data._id)
          : history.push(`${newComment.data._id}`)
      );
  };

  return (
    <Box className="thread">
      <Box className="title">
        <CommentInput
          type="text"
          placeholder={
            parentCommentId ? "add a sub comment" : "start a new thread"
          }
          operation={handleChange}
        />
        <CustomButton
          type="add"
          icon="fas fa-comment-medical fa-xl"
          operation={submitComment}
        />
      </Box>
    </Box>
  );
};

export default withRouter(AddComment);
