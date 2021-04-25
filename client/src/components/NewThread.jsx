import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

export default function NewThread({
  setBeginThread,
  addColor,
  parentId,
  setUpdate,
  setAddANewComment,
  setAddMainComment,
}) {
  const params = useParams();
  const history = useHistory();
  const [threadTitle, setThreadTitle] = useState("");
  const [threadId, setThreadId] = useState("");

  useEffect(() => {
    if (!params.threadId) {
      axios.post("http://localhost:1500/threads/").then((res) => {
        setThreadId(res.data._id);
      });
    } else {
      setThreadId(params.threadId);
    }
  }, []);

  const addThread = () => {
    // if new thread
    if (!params.threadId) {
      axios
        .put("http://localhost:1500/threads/" + threadId, {
          title: threadTitle,
        })
        .then(() => {
          setBeginThread(false);
          history.push("/" + threadId);
        });
    } else {
      // if new comment inside a thread
      axios.post("http://localhost:1500/threads/", {
        parentId: parentId,
        title: threadTitle,
      });
      setUpdate(true);
      setAddANewComment(false);
      setAddMainComment(false);
    }
  };

  return (
    <div className="thread">
      <div className="title">
        <i className="fas fa-palette" onClick={() => addColor(threadId)}></i>
        <input
          type="text"
          placeholder="type title"
          onChange={(e) => setThreadTitle(e.target.value)}
        />
        <i className="fas fa-comment-medical" onClick={(e) => addThread()}></i>
      </div>
    </div>
  );
}
