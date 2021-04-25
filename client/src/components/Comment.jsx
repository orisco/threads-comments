import React, { useEffect, useState } from "react";
import Minimize from "./Minimize";
import NewThread from "./NewThread";

export default function Comment({ subComment, addColor, setUpdate }) {
  const [children, setChildren] = useState([]);
  const [minimize, setMinimize] = useState(false);
  const [addANewComment, setAddANewComment] = useState(false);
  const [addMainComment, setAddMainComment] = useState(false);

  useEffect(() => {
    setChildren(subComment.children);
  }, [subComment.children]);

  return (
    <div className="thread" style={{ background: subComment.color }}>
      <div className="title">
        <i
          className="fas fa-palette"
          onClick={() => addColor(subComment._id)}
        ></i>
        <p className="comment">{subComment.title}</p>
        {children && children.length > 0 ? (
          <Minimize setMinimize={setMinimize} minimize={minimize} />
        ) : (
          <i
            className="fas fa-comment-medical addBtn"
            onClick={() => setAddANewComment(!addANewComment)}
          ></i>
        )}
      </div>
      {addANewComment ? (
        <NewThread
          parentId={subComment._id}
          setUpdate={setUpdate}
          setAddANewComment={setAddANewComment}
          setAddMainComment={setAddMainComment}
          addColor={addColor}
        />
      ) : (
        ""
      )}
      {children && children.length > 0 && !minimize
        ? children.map((subsubComment) => {
            return (
              <Comment
                subComment={subsubComment}
                key={subsubComment._id}
                addColor={addColor}
                setUpdate={setUpdate}
              />
            );
          })
        : ""}

      {children && children.length > 0 ? (
        addMainComment ? (
          <div className="title">
            <NewThread
              parentId={subComment._id}
              setUpdate={setUpdate}
              setAddANewComment={setAddANewComment}
              setAddMainComment={setAddMainComment}
              addColor={addColor}
            />
          </div>
        ) : (
          <div className="btm">
            <i
              className="fas fa-comment-medical"
              onClick={() => setAddMainComment(!addMainComment)}
            ></i>
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
}
