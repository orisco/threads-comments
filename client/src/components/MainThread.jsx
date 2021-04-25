import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Comment from "./Comment";
import NewThread from "./NewThread";
import ColorPicker from "./ColorPicker";

export default function MainThread() {
  const params = useParams();
  const [subComment, setSubComment] = useState({}); // comment info
  const [beginThread, setBeginThread] = useState(false); // if true, no params exist - new thread will open.
  const [colorPicker, setColorPicker] = useState(false); // color picker is clicked
  const [colorChangeId, setColorChangeId] = useState(""); // comment ID for color picker change

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setUpdate(false);
    if (params.threadId) {
      // thread exists in params
      axios.get("http://localhost:1500/threads/" + params.threadId).then(
        (res) => {
          setSubComment(res.data[0]);
        },
        (err) => {
          if (err.response.status === 404) {
            setBeginThread(true);
          }
        }
      );
    } else {
      setBeginThread(true);
    }
  }, [colorPicker, update]);

  const addColor = (_id) => {
    setColorChangeId(_id);
    if (colorChangeId === _id) {
      setColorPicker(!colorPicker);
    } else {
      setColorPicker(true);
    }
  };

  return (
    <>
      <div className="box">
        {colorPicker ? (
          <ColorPicker
            colorChangeId={colorChangeId}
            setColorPicker={setColorPicker}
          />
        ) : (
          ""
        )}
        {beginThread === true ? (
          <NewThread setBeginThread={setBeginThread} addColor={addColor} />
        ) : (
          <Comment
            subComment={subComment}
            key={subComment._id}
            addColor={addColor}
            setUpdate={setUpdate}
          />
        )}
      </div>
    </>
  );
}
