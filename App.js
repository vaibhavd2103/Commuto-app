import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Home from "./src/Screens/Home";
import Login from "./src/Screens/Login";
import SignUp from "./src/Screens/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
	const [dataLoaded, setDataLoaded] = useState(false);

	const fetchFonts = () => {
		return Font.loadAsync({
			RoboBold: require("./assets/fonts/Roboto-Bold.ttf"),
			RoboRegular: require("./assets/fonts/Roboto-Regular.ttf"),
			RoboMedium: require("./assets/fonts/Roboto-Medium.ttf"),
			RoboItalic: require("./assets/fonts/Roboto-Italic.ttf"),
			RoboLight: require("./assets/fonts/Roboto-Light.ttf"),
		});
	};

	if (!dataLoaded) {
		return (
			<AppLoading
				startAsync={() => fetchFonts()}
				onFinish={() => setDataLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				// initialRouteName="SignUp"
			>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="Home" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
