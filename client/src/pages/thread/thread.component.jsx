import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Comment from "../../components/comment/comment.component";
import "./thread.styles.scss";
import { Box, CircularProgress } from "@material-ui/core";

const Thread = () => {
  const params = useParams();
  const [mainComment, setMainComment] = useState({});
  const [changeUpdateComment, setChangeUpdateComment] = useState("");

  useEffect(() => {
    axios.get("http://localhost:1500/threads/" + params.threadId).then(
      (res) => setMainComment(res.data[0]),
      (err) => console.log(err)
    );
  }, [changeUpdateComment]);

  const updateThread = (data) => {
    setChangeUpdateComment(data);
  };

  return (
    <Box className="wrapper">
      {Object.keys(mainComment) != 0 ? (
        <Comment
          key={mainComment._id}
          {...mainComment}
          updateThread={updateThread}
        />
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Thread;
