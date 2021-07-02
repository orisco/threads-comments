import axios from "axios";
import React from "r";

const getComments = (id) => {
  return axios.get("http://localhost:1500/threads/" + id);
};

export default { getComments };
