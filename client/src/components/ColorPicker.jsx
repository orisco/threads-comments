import React from "react";
import axios from "axios";
import { GithubPicker } from "react-color";

export default function ColorPicker({ setColorPicker, colorChangeId }) {
  const changeColor = (e) => {
    axios.put("http://localhost:1500/threads/" + colorChangeId, {
      color: e.hex,
    });
    setColorPicker(false);
  };

  return (
    <div className="picker">
      <GithubPicker triangle="hide" onChange={(e) => changeColor(e)} />
    </div>
  );
}
