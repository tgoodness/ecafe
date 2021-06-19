import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

const ProgressBar = () => {
  const [progress, setProgress] = useState(100);
  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  );
};

export default ProgressBar;
