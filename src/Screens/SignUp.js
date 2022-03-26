import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState, useRef } from "react";
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

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(true);
  const [docID, setDocID] = useState("");
  let nameRef = useRef(null);
  let emailRef = useRef(null);
  let passwordRef = useRef(null);

  const pushNewUserInDB = async (uid) => {
    const res = await db
      .collection("Users")
      .add({ email, password, uid, name, photoURL: "" });
    //     console.log(res.id);
    setDocID(res.id);
  };

  const register = async () => {
    if (name === "") {
      nameRef.focus();
      setError("==========Name cannot be empty");
    } else if (email === "") {
      emailRef.focus();
      setError("==========Email cannot be empty");
    } else if (password === "") {
      passwordRef.focus();
      setError("==========Password cannot be empty");
    } else {
      setLoading(true);
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          // console.log(auth);
          pushNewUserInDB(auth.user.uid);
          props.navigation.navigate("Home", { docID });
        })
        .catch((e) => {
          console.log(e.message);
          setError(e.message);
        });
      setLoading(false);
    }
  };

  return (
    <Container
      style={{
        paddingTop: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/sign_up.png")}
          style={{
            width: width - 40,
            resizeMode: "cover",
            height: height - 500,
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
              }}
            >
              Welcome to Commuto!
            </Heading>
            <Simple
              style={{
                fontSize: 16,
                marginBottom: 20,
                opacity: 0.5,
              }}
            >
              Start a journey with us
            </Simple>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                ref={(input) => (nameRef = input)}
                placeholder="Enter your full name"
                placeholderTextColor={"darkgrey"}
                value={name}
                onChangeText={(text) => {
                  setName(text);
                  setError("");
                }}
              />
            </View>
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
          <TouchableOpacity style={styles.signUp} onPress={register}>
            {loading ? (
              <ActivityIndicator color="white" size="large" />
            ) : (
              <Heading style={{ color: "white" }}>Sign Up</Heading>
            )}
          </TouchableOpacity>
        </MotiView>
      </ScrollView>
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  input: {
    fontFamily: "RoboLight",
    fontSize: 14,
    flex: 1,
    color: "black",
  },
  signUp: {
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.primary,
    marginTop: 20,
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
