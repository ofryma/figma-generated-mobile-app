import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const SignIn = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.signIn, styles.signInFlexBox]}>
      <View style={styles.signInInner}>
        <Image
          style={[styles.frameChild, styles.signInLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-21.png")}
        />
      </View>
      <View style={[styles.signinForm, styles.signInFlexBox]}>
        <View style={styles.formTitle}>
          <Text style={styles.title}>Hello!</Text>
          <Text style={[styles.description, styles.descriptionTypo]}>
            Sign in with your email
          </Text>
        </View>
        <TextInput
          style={[styles.textfield, styles.textfieldSpaceBlock]}
          placeholder="Email"
          placeholderTextColor="#828282"
        />
        <TextInput
          style={[styles.textfield, styles.textfieldSpaceBlock]}
          placeholder="Email"
          secureTextEntry={true}
          placeholderTextColor="#828282"
        />
        <Text style={[styles.forgotPassword, styles.textfieldSpaceBlock]}>
          Forgot password?
        </Text>
        <View style={styles.buttonsSection}>
          <Pressable
            style={styles.formBorder}
            onPress={() =>
              navigation.navigate("DrawerRoot", { screen: "MusicScreen" })
            }
          >
            <Text style={[styles.description, styles.descriptionTypo]}>
              Log in
            </Text>
          </Pressable>
          <Pressable style={[styles.formButton1, styles.formBorder]}>
            <Text style={[styles.description, styles.descriptionTypo]}>
              Creeate Account
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signInFlexBox: {
    justifyContent: "center",
    flex: 1,
  },
  signInLayout: {
    overflow: "hidden",
    width: "100%",
  },
  descriptionTypo: {
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  textfieldSpaceBlock: {
    marginTop: 24,
    fontSize: FontSize.primaryText_size,
  },
  formBorder: {
    paddingHorizontal: Padding.p_29xl,
    borderColor: Color.colorWhite,
    paddingVertical: 0,
    height: 40,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  frameChild: {
    maxWidth: "100%",
    maxHeight: "100%",
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
  signInInner: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: FontSize.size_21xl,
    lineHeight: 56,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  description: {
    fontSize: FontSize.primaryText_size,
    lineHeight: 20,
  },
  formTitle: {
    height: 100,
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
  },
  textfield: {
    borderColor: Color.colorGainsboro_100,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    fontFamily: FontFamily.interRegular,
    height: 40,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    marginTop: 24,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  forgotPassword: {
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  formButton1: {
    marginTop: 21,
  },
  buttonsSection: {
    paddingHorizontal: Padding.p_23xl,
    paddingVertical: 0,
    marginTop: 24,
    alignSelf: "stretch",
  },
  signinForm: {
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_3xl,
    marginTop: 10,
    alignSelf: "stretch",
  },
  signIn: {
    backgroundColor: Color.background,
    height: 812,
    paddingBottom: 173,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default SignIn;
