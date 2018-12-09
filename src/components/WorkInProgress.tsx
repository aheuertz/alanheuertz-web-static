import React from "react";
import WorkInProgressImage from "./work-in-progress.svg";

const WorkInProgress = () => {
  return (
    <div style={{marginTop: "20px", marginBottom: "20px"}}>
      <img src={WorkInProgressImage} alt="Work in progress" />
    </div>
  )
};

export default WorkInProgress;
