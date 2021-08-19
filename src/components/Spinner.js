// BeatLoader MoonLoader
import { BeatLoader, MoonLoader } from "react-spinners";
// import { css } from "@emotion/react";

const DotsSpinner = ({ loading }) => {
  return <BeatLoader color="#e04a5e" loading={loading} />;
};

const CircleSpinner = ({ loading }) => {
  return <MoonLoader color="#e04a5e" loading={loading} />;
};

export { DotsSpinner, CircleSpinner };
