import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

const Home = () => {
	const [info, setInfo] = useState([]);
	const Fetchdata = () => {
		db.collection("Users")
			.get()
			.then((querySnapshot) => {
				// Loop through the data and store
				// it in array to display
				querySnapshot.forEach((element) => {
					var data = element.data();
					setInfo((arr) => [...arr, data]);
				});
			});
	};
	useEffect(() => {
		Fetchdata();
	}, []);

	return (
		<View style={{ padding: 100 }}>
			<Text>Home</Text>
			{info.map((item) => {
				return <Text>{item.name}</Text>;
			})}
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
