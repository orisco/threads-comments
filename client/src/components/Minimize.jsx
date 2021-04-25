import React from "react";

export default function Minimize({ setMinimize, minimize }) {
  return (
    <>
      {minimize ? (
        <i
          className="fas fa-chevron-down"
          onClick={() => setMinimize(false)}
        ></i>
      ) : (
        <i className="fas fa-chevron-up" onClick={() => setMinimize(true)}></i>
      )}
    </>
  );
}
