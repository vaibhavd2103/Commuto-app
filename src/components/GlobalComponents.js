import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Colors, styles } from "../constants/Constants";

const Container = (props) => {
	return (
		<View style={{ ...styles1.container, ...props.style }}>
			{props.children}
		</View>
	);
};

const Heading = (props) => {
	return (
		<Text
			onPress={props.onPress}
			style={{ ...styles1.heading, ...props.style }}
		>
			{props.children}
		</Text>
	);
};

const SubHeading = (props) => {
	return (
		<Text style={{ ...styles1.subheading, ...props.style }}>
			{props.children}
		</Text>
	);
};
const Simple = (props) => {
	return (
		<Text onPress={props.onPress} style={{ ...styles1.simple, ...props.style }}>
			{props.children}
		</Text>
	);
};

export { Container, Heading, SubHeading, Simple };

const styles1 = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: Colors.white,
		paddingTop: 30,
	},
	heading: {
		color: Colors.black,
		fontFamily: "RoboBold",
		fontSize: 18,
	},
	simple: {
		color: Colors.black,
		fontFamily: "RoboLight",
		fontSize: 14,
	},
	subheading: {
		color: Colors.black,
		fontFamily: "RoboRegular",
		fontSize: 16,
	},
});
