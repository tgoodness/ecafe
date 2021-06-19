import React from "react";

export const Button = (probs) => {
	const { label, loading = false, ...rest} = probs;
	return (
		<button
			type="submit"
			className="btn btn-danger btn-login"
			{ ...(loading && { disabled: true }) }
			{...rest}
		>
			{(loading && (
				<span>
					<span
						className="spinner-grow spinner-grow-sm"
						role="status"
						aria-hidden="true"
					></span>
					<span
						className="spinner-grow spinner-grow-sm"
						role="status"
						aria-hidden="true"
					></span>
					&nbsp;Loading...
				</span>
			)) ||
				label}
		</button>
	);
};
