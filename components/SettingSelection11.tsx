import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type SettingSelection1Type = {
  style?: StyleProp<ViewStyle>;
};

const SettingSelection1 = ({ style }: SettingSelection1Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.settingSelection, style]}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "Profile" })
      }
    >
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
      <Text style={styles.label}>My Account</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    overflow: "hidden",
    display: "none",
  },
  label: {
    fontSize: FontSize.primaryText_size,
    fontFamily: FontFamily.primaryText,
    color: Color.colorGray_400,
    textAlign: "left",
    marginLeft: 18,
  },
  settingSelection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_10xs,
  },
});

export default SettingSelection1;
