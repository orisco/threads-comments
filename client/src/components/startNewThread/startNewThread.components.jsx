import React from "react";
import { withRouter } from "react-router-dom";
import CustomButton from "../customButton/customButton.component";

import "./startNewThread.styles.scss";

const StartNewThread = ({ history }) => {
  return (
    <CustomButton
      icon="fas fa-plus-circle"
      type="start"
      operation={() => history.push("/add-new")}
    ></CustomButton>
  );
};

export default withRouter(StartNewThread);
