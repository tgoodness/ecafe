import React, { useState } from "react";
import { DatePicker, Space } from "antd";

export const Date = () => {
	const onChange = (date, dateString) => {
		console.log(dateString);
	};

	return (
		<Space direction="vertical">
			<DatePicker
				name="dob"
				format="DD-MM-YYYY"
				onChange={onChange}
			/>
		</Space>
	);
};
