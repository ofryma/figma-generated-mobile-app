import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <Image
        style={styles.feda8694c6fd10a549d8835fa2102Icon}
        contentFit="cover"
        source={require("../assets/70feda-8694c6fd10a549d8835fa2102d46c9c3mv2-1.png")}
      />
      <Image
        style={styles.highLanderLogo1Icon}
        contentFit="cover"
        source={require("../assets/highlanderlogo-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  feda8694c6fd10a549d8835fa2102Icon: {
    width: 100,
    height: 97,
  },
  highLanderLogo1Icon: {
    width: 349,
    height: 57,
    marginTop: 10,
  },
  splashScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 44,
    paddingVertical: 263,
  },
});

export default SplashScreen;
