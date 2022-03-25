import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	ActivityIndicator,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
	Container,
	Heading,
	SubHeading,
	Simple,
} from "../components/GlobalComponents";
import { MotiView } from "moti";
import { Colors, height, width } from "../constants/Constants";
import { auth, db, signInWithGoogle } from "../../firebase/firebase";
import { Entypo } from "@expo/vector-icons";

const Login = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [secure, setSecure] = useState(true);

	const signIn = async () => {
		setLoading(true);
		await auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				console.log(auth);
				props.navigation.navigate("Home");
				setError("");
			})
			.catch((e) => {
				console.log(e.message);
				setError(e.message);
			});
		setLoading(false);
	};

	return (
		<Container
			style={{
				// padding: 20,
				paddingTop: 40,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Image
					source={require("../../assets/login.png")}
					style={{
						width: width - 40,
						resizeMode: "cover",
						height: height - 500,
						marginTop: 10,
					}}
				/>
				<MotiView
					from={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<View style={{ width: width - 40, alignItems: "center" }}>
						<Heading
							style={{
								fontSize: 24,
								textAlign: "center",
							}}
						>
							Welcome back to {"\n"}Commuto!
						</Heading>
						<Simple
							style={{
								fontSize: 16,
								marginBottom: 20,
								opacity: 0.5,
							}}
						>
							We missed you
						</Simple>
						<View style={styles.inputView}>
							<TextInput
								style={styles.input}
								placeholder="Enter your email"
								placeholderTextColor={"darkgrey"}
								value={email}
								onChangeText={(text) => {
									setEmail(text);
									setError("");
								}}
							/>
						</View>
						<View style={styles.inputView}>
							<TextInput
								style={styles.input}
								placeholder="Enter your password"
								placeholderTextColor={"darkgrey"}
								value={password}
								secureTextEntry={secure}
								onChangeText={(text) => {
									setPassword(text);
									setError("");
								}}
							/>
							<TouchableOpacity
								onPress={() => {
									setSecure(!secure);
								}}
							>
								<Entypo
									name={secure ? "eye" : "eye-with-line"}
									color={"darkgrey"}
									size={20}
								/>
							</TouchableOpacity>
						</View>
						{error != "" && (
							<Simple
								style={{
									color: "red",
									textAlign: "center",
									fontSize: 12,
									width: width - 60,
									marginTop: 5,
								}}
							>
								{error.slice(10)}
							</Simple>
						)}
					</View>
					<Simple style={{ textAlign: "center", marginTop: 10, color: "grey" }}>
						Don't have an account?{" "}
						<Heading
							onPress={() => {
								props.navigation.navigate("SignUp");
							}}
							style={{
								color: Colors.black,
								fontSize: 15,
							}}
						>
							Sign up
						</Heading>
					</Simple>
					<TouchableOpacity style={styles.Login} onPress={signIn}>
						{loading ? (
							<ActivityIndicator size={"large"} color="white" />
						) : (
							<Heading style={{ color: "white" }}>Login</Heading>
						)}
					</TouchableOpacity>
				</MotiView>
			</ScrollView>
		</Container>
	);
};

export default Login;

const styles = StyleSheet.create({
	input: {
		fontFamily: "RoboLight",
		fontSize: 14,
		color: "black",
		flex: 1,
	},
	Login: {
		alignSelf: "center",
		paddingVertical: 10,
		// paddingHorizontal: 20,
		backgroundColor: Colors.primary,
		marginTop: 30,
		borderRadius: 10,
		alignItems: "center",
		width: width / 2,
	},
	inputView: {
		width: width - 100,
		height: 50,
		paddingHorizontal: 15,
		borderWidth: 1,
		borderColor: "darkgrey",
		borderRadius: 10,
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
	},
});
