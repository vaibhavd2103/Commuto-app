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
    <Text style={{ ...styles1.text, ...props.style }}>{props.children}</Text>
  );
};

const SubHeading = (props) => {
  return (
    <Text style={{ ...styles1.text, ...props.style }}>{props.children}</Text>
  );
};
const Simple = (props) => {
  return (
    <Text style={{ ...styles1.text, ...props.style }}>{props.children}</Text>
  );
};

export { Container, Heading, SubHeading, Simple };

const styles1 = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.bg,
    paddingTop: 30,
  },
  text: {
    color: "white",
    fontFamily: "RoboBold",
    fontSize: 16,
  },
});
