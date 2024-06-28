import React, { useState } from "react";
import SettingSelection from "./SettingSelection";
import SettingSelection1 from "./SettingSelection1";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

export type DrawerMenuType = {
  state?: any;
  navigation?: any;
};

const DrawerMenu = ({ state, navigation }: DrawerMenuType) => {
  const [drawerItemsNormal] = useState([
    <SettingSelection />,
    <SettingSelection1 />,
  ]);
  const [drawerItemsActive] = useState([
    <SettingSelection />,
    <SettingSelection1 />,
  ]);
  const stateIndex = !state ? 0 : state.index - 1;

  return (
    <View style={styles.drawerMenu}>
      <View style={[styles.drawerMenuFrame, styles.menuFlexBox]}>
        <ImageBackground
          style={styles.drawerMenuHeader}
          resizeMode="cover"
          source={require("../assets/drawermenuheader.png")}
        >
          <View>
            <Image
              style={styles.graphicIcon}
              contentFit="cover"
              source={require("../assets/graphic.png")}
            />
          </View>
          <View style={styles.copy}>
            <Text style={[styles.firstLastName, styles.labelTypo]}>
              First Last Name
            </Text>
            <Text style={[styles.exampleexamplecom, styles.labelTypo]}>
              example@example.com
            </Text>
          </View>
        </ImageBackground>
        <ScrollView
          style={styles.menuFlexBox}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menuSectionsScrollViewContent}
        >
          <View style={styles.settingSelectionSection}>
            <Text style={[styles.navigation, styles.labelTypo]}>
              Navigation
            </Text>
            {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
            {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
            <View style={styles.settingSpaceBlock}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>My Orders</Text>
            </View>
            <View style={[styles.settingSelection3, styles.settingSpaceBlock]}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Label</Text>
            </View>
            <View style={[styles.settingSelection3, styles.settingSpaceBlock]}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Label</Text>
            </View>
          </View>
          <View style={styles.settingSelectionSection}>
            <Text style={[styles.navigation, styles.labelTypo]}>Examples</Text>
            <View style={styles.settingSpaceBlock}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>
                Shipping Cart
              </Text>
            </View>
            <View style={styles.settingSpaceBlock}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>My Favorites</Text>
            </View>
            <View style={[styles.settingSelection3, styles.settingSpaceBlock]}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Label</Text>
            </View>
            <View style={[styles.settingSelection3, styles.settingSpaceBlock]}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Label</Text>
            </View>
            <View style={[styles.settingSelection3, styles.settingSpaceBlock]}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Label</Text>
            </View>
          </View>
          <View style={styles.settingSelectionSection}>
            <Text style={[styles.navigation, styles.labelTypo]}>
              Material Drawer
            </Text>
            <View style={styles.settingSpaceBlock}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Home</Text>
            </View>
            <View style={styles.settingSpaceBlock}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>My Account</Text>
            </View>
            <View style={styles.settingSpaceBlock}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>My Orders</Text>
            </View>
            <View style={styles.settingSpaceBlock}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Label</Text>
            </View>
            <View style={styles.settingSpaceBlock}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Label</Text>
            </View>
          </View>
          <View style={styles.settingSelectionSection}>
            <Text style={[styles.navigation, styles.labelTypo]}>
              Material Drawer
            </Text>
            <View style={styles.settingSpaceBlock}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Home</Text>
            </View>
            <View style={styles.settingSpaceBlock}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>My Account</Text>
            </View>
            <View style={styles.settingSpaceBlock}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>My Orders</Text>
            </View>
            <View style={styles.settingSpaceBlock}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Label</Text>
            </View>
            <View style={styles.settingSpaceBlock}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Label</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt6: {
    marginTop: 6,
  },
  menuSectionsScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  menuFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.primaryText,
    fontSize: FontSize.primaryText_size,
  },
  settingSpaceBlock: {
    marginTop: 6,
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_mid,
    alignItems: "center",
    flexDirection: "row",
  },
  graphicIcon: {
    borderRadius: Border.br_29xl,
    width: 60,
    height: 62,
    overflow: "hidden",
  },
  firstLastName: {
    color: Color.colorGray_200,
  },
  exampleexamplecom: {
    color: Color.colorGray_100,
    marginTop: 7,
  },
  copy: {
    marginTop: 41,
  },
  drawerMenuHeader: {
    height: 189,
    paddingHorizontal: Padding.p_4xl,
    paddingVertical: Padding.p_lgi,
    alignSelf: "stretch",
  },
  navigation: {
    color: Color.colorBlack,
  },
  icon: {
    width: 25,
    height: 25,
    display: "none",
    overflow: "hidden",
  },
  label: {
    color: Color.colorGray_400,
    marginLeft: 18,
  },
  settingSelection3: {
    display: "none",
  },
  settingSelectionSection: {
    borderStyle: "solid",
    borderColor: Color.colorGray_500,
    borderBottomWidth: 1,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
  drawerMenuFrame: {
    borderTopRightRadius: Border.br_6xs,
    borderBottomRightRadius: Border.br_6xs,
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  drawerMenu: {
    width: 242,
    height: 814,
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default DrawerMenu;
