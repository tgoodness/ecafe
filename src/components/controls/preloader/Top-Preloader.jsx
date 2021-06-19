import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

const ProgressBar = () => {
	const [progress, setProgress] = useState(0);

	return (
		<div>
			<LoadingBar
				color={barColor}
				progress={progress}
				onLoaderFinished={() => setProgress(0)}
			/>
			<button onClick={() => setProgress(progress + 10)}>Add 10%</button>
			<button onClick={() => setProgress(progress + 20)}>Add 20%</button>
			<button onClick={() => setProgress(100)}>Complete</button>
			<br />
		</div>
	);
};

export default ProgressBar;
