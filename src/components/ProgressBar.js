import React from "react";
import {
  ProgressChild,
  ProgressParent,
  ProgressSpan,
} from "../styles/progressBar";

const ProgressBar = ({ completed }) => {
  return (
    <ProgressParent>
      <ProgressChild completed={completed}>
        <ProgressSpan></ProgressSpan>
      </ProgressChild>
    </ProgressParent>
  );
};

export default ProgressBar;
