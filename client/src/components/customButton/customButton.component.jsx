import React from "react";

import "./customButton.styles.scss";

const CustomButton = ({ icon, type, operation }) => {
  return (
    <div className={type} onClick={() => operation()}>
      <i className={icon}></i>
    </div>
  );
};

export default CustomButton;
