import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { Pin } from "./Pin";
import { Password } from "./Password";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`nav-tabpanel-${index}`}
			aria-labelledby={`nav-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box className="mt-2">
					<div>{children}</div>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

export default function NavTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="row">
			<div className="col-12">
				<Card className={classes.root}>
					<Tabs
						value={value}
						onChange={handleChange}
						textColor="primary"
					
					>
						<Tab label="Change Password" />
						<Tab label="Change Pin" />
					</Tabs>
				</Card>
			</div>
			<div className="col-md-12 ">
				<Card className="row card card-tab" >
					<div className="col-md-6">
						<TabPanel value={value} index={0}>
							<Password />
						</TabPanel>
						<TabPanel value={value} index={1}>
							<Pin />
						</TabPanel>
					</div>
				</Card>
			</div>
		</div>
	);
}
