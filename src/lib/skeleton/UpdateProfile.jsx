import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import "../style/skeleton/style.scss";

function UpdateProfile() {
	return (
		<div className="p2p">
			<Skeleton  className="rect" />
			<Skeleton  className="rect" />
			<Skeleton  className="rect" />
			<Skeleton className="rect" />
		</div>
	);
}

export default UpdateProfile;
