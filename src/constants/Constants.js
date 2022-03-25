import { Dimensions } from "react-native";

const Colors = {
	primary: "#FF0000",
	secondary: "#950101",
	bg: "#000",
	black: "#000",
	white: "#fff",
	grey: "#ddd",
};

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;

const styles = {
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: Colors.bg,
	},
	text: {
		color: "white",
		fontFamily: "RoboItalic",
	},
};

export { styles, Colors };
