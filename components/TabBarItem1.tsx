import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding } from "../GlobalStyles";

export type TabBarItem1Type = {
  style?: StyleProp<ViewStyle>;
};

const TabBarItem1 = ({ style }: TabBarItem1Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.tabBarItem, style]}
      onPress={() => navigation.navigate("Profile")}
    >
      <Image
        style={styles.tabBarItemChild}
        contentFit="cover"
        source={require("../assets/frame-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabBarItemChild: {
    width: 24,
    height: 24,
  },
  tabBarItem: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_7xl,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_5xs,
  },
});

export default TabBarItem1;
