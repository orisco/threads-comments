import React, { useState } from "react";

import CustomButton from "../customButton/customButton.component";
import AddComment from "../addComment/addComment.component";
import { Box, Typography } from "@material-ui/core";

const Comment = ({ _id, title, color, children, updateThread }) => {
  const [addSubComment, setAddNewComment] = useState(false);

  const clickAddComment = (data) => {
    updateThread(data);
    setAddNewComment(false);
  };

  const toggleAddComment = () => {
    setAddNewComment(!addSubComment);
  };

  return (
    <Box className="thread" style={{ backgroundColor: color }}>
      <Box className="title" fontWeight="100">
        <Typography variant="h5">{title}</Typography>

        <CustomButton
          operation={toggleAddComment}
          type="add"
          icon="fas fa-comment-medical"
        />
      </Box>

      {addSubComment && (
        <AddComment parentCommentId={_id} clickAddComment={clickAddComment} />
      )}

      {children &&
        children.map((childComment, key) => (
          <Comment
            key={key}
            {...childComment}
            updateThread={updateThread}
            addSubComment={addSubComment}
            setAddNewComment={setAddNewComment}
          />
        ))}
    </Box>
  );
};

export default Comment;
