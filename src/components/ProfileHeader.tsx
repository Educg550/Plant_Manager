import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import userImg from "../../assets/userImg.png";
import colors from "../styles/colors";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import fonts from "../styles/fonts";

export function ProfileHeader() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Educg550</Text>
      </View>

      <Image source={userImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,

    // Ajuste para a tela estranha do iPhone X
    marginTop: getStatusBarHeight(),
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
  },
});
