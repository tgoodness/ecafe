import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import "../style/skeleton/style.scss";

function UserAccount() {
	return (
		<div className="user-account">
			<div className="skeleton-group">
				<Skeleton variant="circle" height={55} className="circle" />
				<Skeleton height={70} className="rect" />
			</div>
		</div>
	);
}

export default UserAccount;
