import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

const Home = (props) => {
  const [users, setUsers] = useState([]);
  console.log(props);
  useEffect(() => {
    const Fetchdata = async () => {
      await db
        .collection("Users")
        .get()
        .then((querySnapshot) => {
          // console.log(querySnapshot.docs[0].id);
          // querySnapshot.forEach((element) => {
          //   var data = element.data();
          //   setUsers((arr) => [...arr, data]);
          // });
          console.log(querySnapshot.docs[0].data());
          setUsers(querySnapshot.docs);
        });
    };
    Fetchdata();
    db.collection("Users")
      .doc(props.route.params.docID)
      .get()
      .then((currentUser) => {
        console.log("====================", currentUser);
      });
  }, [db]);

  return (
    <View style={{ padding: 100 }}>
      <Text>Home</Text>
      {users.map((item) => {
        return <Text onPress={() => {}}>{item.data().name}</Text>;
      })}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
