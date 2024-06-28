import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Padding, FontFamily, FontSize, Color } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profile}>
      <View style={[styles.information, styles.informationPosition]}>
        <View style={[styles.name, styles.nameSpaceBlock]}>
          <Text style={[styles.name1, styles.name1Typo]}>Name</Text>
          <View style={styles.info}>
            <Text style={[styles.helenaHills, styles.addLinkTypo]}>
              Helena Hills
            </Text>
            <Image
              style={styles.iconchevronRight}
              contentFit="cover"
              source={require("../assets/iconchevron-right.png")}
            />
          </View>
        </View>
        <View style={[styles.name, styles.nameSpaceBlock]}>
          <Text style={[styles.name1, styles.name1Typo]}>Username</Text>
          <View style={styles.info}>
            <Text style={[styles.helenaHills, styles.addLinkTypo]}>
              @username
            </Text>
            <Image
              style={styles.iconchevronRight}
              contentFit="cover"
              source={require("../assets/iconchevron-right.png")}
            />
          </View>
        </View>
        <View style={[styles.name, styles.nameSpaceBlock]}>
          <Text style={[styles.name1, styles.name1Typo]}>Email</Text>
          <View style={styles.info}>
            <Text style={[styles.helenaHills, styles.addLinkTypo]}>
              name@domain.com
            </Text>
            <Image
              style={styles.iconchevronRight}
              contentFit="cover"
              source={require("../assets/iconchevron-right.png")}
            />
          </View>
        </View>
        <View style={styles.nameSpaceBlock}>
          <Text style={[styles.name1, styles.name1Typo]}>Links</Text>
          <View style={styles.urls}>
            <Text style={styles.mylinknetTypo}>website.net</Text>
            <Text style={[styles.mylinknet, styles.mylinknetTypo]}>
              mylink.net
            </Text>
            <Text style={[styles.mylinknet, styles.mylinknetTypo]}>
              yourlink.net
            </Text>
            <View style={styles.addLinks}>
              <Image
                style={styles.iconadd}
                contentFit="cover"
                source={require("../assets/iconadd.png")}
              />
              <Text
                style={[styles.addLink, styles.addLinkTypo]}
                numberOfLines={1}
              >
                Add link
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.name, styles.nameSpaceBlock]}>
          <Text style={[styles.name1, styles.name1Typo]}>Bio</Text>
          <View style={styles.info3}>
            <Text style={[styles.helenaHills, styles.addLinkTypo]}>
              A description of this user.
            </Text>
            <Image
              style={styles.iconchevronRight}
              contentFit="cover"
              source={require("../assets/iconchevron-right.png")}
            />
          </View>
        </View>
        <View style={[styles.name, styles.nameSpaceBlock]}>
          <Pressable onPress={() => navigation.navigate("SignIn")}>
            <Text style={[styles.logout1, styles.name1Typo]}>Logout</Text>
          </Pressable>
          <View style={styles.info4} />
        </View>
      </View>
      <View style={styles.profile1}>
        <Image
          style={styles.avatarIcon}
          contentFit="cover"
          source={require("../assets/avatar.png")}
        />
        <View style={styles.action}>
          <Text
            style={[styles.editProfileImage, styles.pageTitleTypo]}
            numberOfLines={1}
          >
            Edit profile image
          </Text>
        </View>
      </View>
      <StatusBar style={styles.informationPosition} />
      <View
        style={[styles.mobileAppHeaderWithBackBu, styles.informationPosition]}
      >
        <Image
          style={[styles.iconchevronLeft, styles.pageTitlePosition]}
          contentFit="cover"
          source={require("../assets/iconchevron-left.png")}
        />
        <Text style={[styles.pageTitle, styles.pageTitlePosition]}>
          Page Title
        </Text>
        <TouchableOpacity
          style={styles.menuButton}
          activeOpacity={0.2}
          onPress={() => navigation.toggleDrawer()}
        >
          <TouchableOpacity
            style={styles.vector}
            activeOpacity={0.2}
            onPress={() => navigation.toggleDrawer()}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  informationPosition: {
    left: 0,
    position: "absolute",
  },
  nameSpaceBlock: {
    paddingVertical: Padding.p_sm,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    overflow: "hidden",
  },
  name1Typo: {
    width: 100,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.primaryText_size,
  },
  addLinkTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.primaryText_size,
  },
  mylinknetTypo: {
    width: 231,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 20,
    fontSize: FontSize.primaryText_size,
  },
  pageTitleTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  pageTitlePosition: {
    top: 9,
    position: "absolute",
  },
  name1: {
    color: Color.colorBlack,
  },
  helenaHills: {
    width: 211,
    color: Color.colorBlack,
  },
  iconchevronRight: {
    width: 20,
    opacity: 0.5,
    height: 20,
    overflow: "hidden",
  },
  info: {
    justifyContent: "flex-end",
    marginLeft: 12,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  name: {
    width: 375,
  },
  mylinknet: {
    marginTop: 12,
  },
  iconadd: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  addLink: {
    color: "#828282",
    marginLeft: 4,
    overflow: "hidden",
  },
  addLinks: {
    marginTop: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  urls: {
    justifyContent: "center",
    marginLeft: 12,
    overflow: "hidden",
  },
  info3: {
    marginLeft: 12,
    flexDirection: "row",
    flex: 1,
  },
  logout1: {
    color: "#c41616",
  },
  info4: {
    height: 20,
    marginLeft: 12,
    flex: 1,
  },
  information: {
    top: 238,
  },
  avatarIcon: {
    borderRadius: 1000,
    width: 64,
    height: 64,
    overflow: "hidden",
  },
  editProfileImage: {
    alignSelf: "stretch",
    color: "#0d99ff",
    lineHeight: 20,
    fontSize: FontSize.primaryText_size,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    overflow: "hidden",
  },
  action: {
    marginTop: 12,
  },
  profile1: {
    marginLeft: -58.5,
    top: 110,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  iconchevronLeft: {
    left: 16,
    width: 24,
    height: 24,
  },
  pageTitle: {
    left: 137,
    fontSize: 17,
    letterSpacing: -0.3,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    width: 22,
    height: 22,
  },
  menuButton: {
    top: -5,
    left: 327,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  mobileAppHeaderWithBackBu: {
    top: 46,
    borderStyle: "solid",
    borderColor: "#e6e6e6",
    borderBottomWidth: 0.5,
    height: 42,
    width: 375,
    overflow: "hidden",
  },
  profile: {
    backgroundColor: Color.colorWhite,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Profile;
