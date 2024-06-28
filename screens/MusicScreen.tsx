import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { Padding, Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const MusicScreen = () => {
  return (
    <View style={styles.musicScreen}>
      <View style={styles.musicScreenFrame}>
        <ScrollView
          style={styles.body}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.bodyScrollViewContent}
        >
          <View style={[styles.statusBar, styles.statusBarFlexBox]}>
            <View style={styles.left}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/941.png")}
              />
            </View>
            <View style={styles.right}>
              <Image
                style={styles.mobileSignalIcon}
                contentFit="cover"
                source={require("../assets/mobile-signal.png")}
              />
              <Image
                style={styles.wifiIcon}
                contentFit="cover"
                source={require("../assets/wifi.png")}
              />
              <Image
                style={styles.batteryIcon}
                contentFit="cover"
                source={require("../assets/battery.png")}
              />
            </View>
          </View>
          <View style={styles.tabs}>
            <View style={[styles.pill, styles.pillFlexBox]}>
              <Text style={[styles.tab, styles.tabTypo]}>Tab</Text>
            </View>
            <View style={[styles.pill1, styles.pillFlexBox]}>
              <Text style={[styles.tab1, styles.tabTypo]}>Tab</Text>
            </View>
            <View style={[styles.pill1, styles.pillFlexBox]}>
              <Text style={[styles.tab1, styles.tabTypo]}>Tab</Text>
            </View>
          </View>
          <View style={styles.artistCarouselRow}>
            <View>
              <Text style={[styles.knowYourStyle, styles.andreTypo]}>
                Know your style
              </Text>
              <Text
                style={[styles.bestFitFor, styles.bestFitForTypo]}
                numberOfLines={1}
              >
                Best fit for you
              </Text>
            </View>
            <ScrollView
              style={styles.artistCarousel}
              horizontal={true}
              showsVerticalScrollIndicator={true}
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={styles.artistCarouselScrollViewContent}
            >
              <View style={styles.card}>
                <ImageBackground
                  style={styles.thumbnailIcon}
                  resizeMode="cover"
                  source={require("../assets/thumbnail.png")}
                >
                  <Text style={[styles.andre, styles.andreTypo]}>Andre</Text>
                </ImageBackground>
                <View style={styles.title1}>
                  <Text
                    style={[styles.onTheBed, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    On the bed side
                  </Text>
                  <Text
                    style={[styles.description, styles.inhebAbLayout]}
                    numberOfLines={2}
                  >
                    Description
                  </Text>
                </View>
              </View>
              <View style={styles.card1}>
                <ImageBackground
                  style={styles.thumbnailIcon}
                  resizeMode="cover"
                  source={require("../assets/thumbnail1.png")}
                >
                  <Text style={[styles.andre, styles.andreTypo]}>Tiago</Text>
                </ImageBackground>
                <View style={styles.title1}>
                  <Text
                    style={[styles.onTheBed, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    Into the wild
                  </Text>
                  <Text
                    style={[styles.description, styles.inhebAbLayout]}
                    numberOfLines={2}
                  >
                    Description
                  </Text>
                </View>
              </View>
              <View style={styles.card1}>
                <ImageBackground
                  style={styles.thumbnailIcon}
                  resizeMode="cover"
                  source={require("../assets/thumbnail2.png")}
                >
                  <Text style={[styles.andre, styles.andreTypo]}>KOBU</Text>
                </ImageBackground>
                <View style={styles.title1}>
                  <Text
                    style={[styles.onTheBed, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    Last thing
                  </Text>
                  <Text
                    style={[styles.description, styles.inhebAbLayout]}
                    numberOfLines={2}
                  >
                    Description
                  </Text>
                </View>
              </View>
              <View style={styles.card1}>
                <ImageBackground
                  style={styles.thumbnailIcon}
                  resizeMode="cover"
                  source={require("../assets/thumbnail3.png")}
                >
                  <Text style={[styles.andre, styles.andreTypo]}>Giorgio</Text>
                </ImageBackground>
                <View style={styles.title1}>
                  <Text
                    style={[styles.onTheBed, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    Other side
                  </Text>
                  <Text
                    style={[styles.description, styles.inhebAbLayout]}
                    numberOfLines={2}
                  >
                    Description
                  </Text>
                </View>
              </View>
              <View style={styles.card1}>
                <ImageBackground
                  style={styles.thumbnailIcon}
                  resizeMode="cover"
                  source={require("../assets/thumbnail4.png")}
                >
                  <Text style={[styles.andre, styles.andreTypo]}>Reinhart</Text>
                </ImageBackground>
                <View style={styles.title1}>
                  <Text
                    style={[styles.onTheBed, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    The square
                  </Text>
                  <Text
                    style={[styles.description, styles.inhebAbLayout]}
                    numberOfLines={2}
                  >
                    Description
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.artistCarouselRow}>
            <View>
              <Text style={[styles.knowYourStyle, styles.andreTypo]}>
                Title
              </Text>
              <Text
                style={[styles.bestFitFor, styles.bestFitForTypo]}
                numberOfLines={1}
              >
                Subheading about this section
              </Text>
            </View>
            <ScrollView
              style={styles.artistCarousel}
              horizontal={true}
              showsVerticalScrollIndicator={true}
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={styles.avatarCarouselScrollViewContent}
            >
              <View>
                <Image
                  style={styles.graphicIcon}
                  contentFit="cover"
                  source={require("../assets/graphic1.png")}
                />
                <View style={styles.copy}>
                  <Text
                    style={[styles.inhebAb, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    Inheb AB
                  </Text>
                </View>
              </View>
              <View style={styles.card6}>
                <Image
                  style={styles.graphicIcon}
                  contentFit="cover"
                  source={require("../assets/graphic2.png")}
                />
                <View style={styles.copy}>
                  <Text
                    style={[styles.inhebAb, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    Artist Name
                  </Text>
                </View>
              </View>
              <View style={styles.card6}>
                <Image
                  style={styles.graphicIcon}
                  contentFit="cover"
                  source={require("../assets/graphic3.png")}
                />
                <View style={styles.copy}>
                  <Text
                    style={[styles.inhebAb, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    Ahmed
                  </Text>
                </View>
              </View>
              <View style={styles.card6}>
                <Image
                  style={styles.graphicIcon}
                  contentFit="cover"
                  source={require("../assets/graphic4.png")}
                />
                <View style={styles.copy}>
                  <Text
                    style={[styles.inhebAb, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    Vila
                  </Text>
                </View>
              </View>
              <View style={styles.card6}>
                <Image
                  style={styles.graphicIcon}
                  contentFit="cover"
                  source={require("../assets/graphic5.png")}
                />
                <View style={styles.copy}>
                  <Text
                    style={[styles.inhebAb, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    Polina
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.artistCarouselRow}>
            <View>
              <Text style={[styles.knowYourStyle, styles.andreTypo]}>
                Know your style
              </Text>
              <Text
                style={[styles.bestFitFor, styles.bestFitForTypo]}
                numberOfLines={1}
              >
                Best fit for you
              </Text>
            </View>
            <ScrollView
              style={styles.artistCarousel}
              horizontal={true}
              showsVerticalScrollIndicator={true}
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={styles.artistCarouselScrollView1Content}
            >
              <View style={styles.card}>
                <ImageBackground
                  style={styles.thumbnailIcon}
                  resizeMode="cover"
                  source={require("../assets/thumbnail.png")}
                >
                  <Text style={[styles.andre, styles.andreTypo]}>Andre</Text>
                </ImageBackground>
                <View style={styles.title1}>
                  <Text
                    style={[styles.onTheBed, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    On the bed side
                  </Text>
                  <Text
                    style={[styles.description, styles.inhebAbLayout]}
                    numberOfLines={2}
                  >
                    Description
                  </Text>
                </View>
              </View>
              <View style={styles.card1}>
                <ImageBackground
                  style={styles.thumbnailIcon}
                  resizeMode="cover"
                  source={require("../assets/thumbnail1.png")}
                >
                  <Text style={[styles.andre, styles.andreTypo]}>Tiago</Text>
                </ImageBackground>
                <View style={styles.title1}>
                  <Text
                    style={[styles.onTheBed, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    Into the wild
                  </Text>
                  <Text
                    style={[styles.description, styles.inhebAbLayout]}
                    numberOfLines={2}
                  >
                    Description
                  </Text>
                </View>
              </View>
              <View style={styles.card1}>
                <ImageBackground
                  style={styles.thumbnailIcon}
                  resizeMode="cover"
                  source={require("../assets/thumbnail2.png")}
                >
                  <Text style={[styles.andre, styles.andreTypo]}>KOBU</Text>
                </ImageBackground>
                <View style={styles.title1}>
                  <Text
                    style={[styles.onTheBed, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    Last thing
                  </Text>
                  <Text
                    style={[styles.description, styles.inhebAbLayout]}
                    numberOfLines={2}
                  >
                    Description
                  </Text>
                </View>
              </View>
              <View style={styles.card1}>
                <ImageBackground
                  style={styles.thumbnailIcon}
                  resizeMode="cover"
                  source={require("../assets/thumbnail3.png")}
                >
                  <Text style={[styles.andre, styles.andreTypo]}>Giorgio</Text>
                </ImageBackground>
                <View style={styles.title1}>
                  <Text
                    style={[styles.onTheBed, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    Other side
                  </Text>
                  <Text
                    style={[styles.description, styles.inhebAbLayout]}
                    numberOfLines={2}
                  >
                    Description
                  </Text>
                </View>
              </View>
              <View style={styles.card1}>
                <ImageBackground
                  style={styles.thumbnailIcon}
                  resizeMode="cover"
                  source={require("../assets/thumbnail4.png")}
                >
                  <Text style={[styles.andre, styles.andreTypo]}>Reinhart</Text>
                </ImageBackground>
                <View style={styles.title1}>
                  <Text
                    style={[styles.onTheBed, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    The square
                  </Text>
                  <Text
                    style={[styles.description, styles.inhebAbLayout]}
                    numberOfLines={2}
                  >
                    Description
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.artistCarouselRow}>
            <View>
              <Text style={[styles.knowYourStyle, styles.andreTypo]}>
                Know your style
              </Text>
              <Text
                style={[styles.bestFitFor, styles.bestFitForTypo]}
                numberOfLines={1}
              >
                Best fit for you
              </Text>
            </View>
            <ScrollView
              style={styles.artistCarousel}
              horizontal={true}
              showsVerticalScrollIndicator={true}
              showsHorizontalScrollIndicator={true}
              contentContainerStyle={styles.artistCarouselScrollView2Content}
            >
              <View style={styles.card}>
                <ImageBackground
                  style={styles.thumbnailIcon}
                  resizeMode="cover"
                  source={require("../assets/thumbnail.png")}
                >
                  <Text style={[styles.andre, styles.andreTypo]}>Andre</Text>
                </ImageBackground>
                <View style={styles.title1}>
                  <Text
                    style={[styles.onTheBed, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    On the bed side
                  </Text>
                  <Text
                    style={[styles.description, styles.inhebAbLayout]}
                    numberOfLines={2}
                  >
                    Description
                  </Text>
                </View>
              </View>
              <View style={styles.card1}>
                <ImageBackground
                  style={styles.thumbnailIcon}
                  resizeMode="cover"
                  source={require("../assets/thumbnail1.png")}
                >
                  <Text style={[styles.andre, styles.andreTypo]}>Tiago</Text>
                </ImageBackground>
                <View style={styles.title1}>
                  <Text
                    style={[styles.onTheBed, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    Into the wild
                  </Text>
                  <Text
                    style={[styles.description, styles.inhebAbLayout]}
                    numberOfLines={2}
                  >
                    Description
                  </Text>
                </View>
              </View>
              <View style={styles.card1}>
                <ImageBackground
                  style={styles.thumbnailIcon}
                  resizeMode="cover"
                  source={require("../assets/thumbnail2.png")}
                >
                  <Text style={[styles.andre, styles.andreTypo]}>KOBU</Text>
                </ImageBackground>
                <View style={styles.title1}>
                  <Text
                    style={[styles.onTheBed, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    Last thing
                  </Text>
                  <Text
                    style={[styles.description, styles.inhebAbLayout]}
                    numberOfLines={2}
                  >
                    Description
                  </Text>
                </View>
              </View>
              <View style={styles.card1}>
                <ImageBackground
                  style={styles.thumbnailIcon}
                  resizeMode="cover"
                  source={require("../assets/thumbnail3.png")}
                >
                  <Text style={[styles.andre, styles.andreTypo]}>Giorgio</Text>
                </ImageBackground>
                <View style={styles.title1}>
                  <Text
                    style={[styles.onTheBed, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    Other side
                  </Text>
                  <Text
                    style={[styles.description, styles.inhebAbLayout]}
                    numberOfLines={2}
                  >
                    Description
                  </Text>
                </View>
              </View>
              <View style={styles.card1}>
                <ImageBackground
                  style={styles.thumbnailIcon}
                  resizeMode="cover"
                  source={require("../assets/thumbnail4.png")}
                >
                  <Text style={[styles.andre, styles.andreTypo]}>Reinhart</Text>
                </ImageBackground>
                <View style={styles.title1}>
                  <Text
                    style={[styles.onTheBed, styles.inhebAbLayout]}
                    numberOfLines={1}
                  >
                    The square
                  </Text>
                  <Text
                    style={[styles.description, styles.inhebAbLayout]}
                    numberOfLines={2}
                  >
                    Description
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  artistCarouselScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  avatarCarouselScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  artistCarouselScrollView1Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  artistCarouselScrollView2Content: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bodyScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  statusBarFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  pillFlexBox: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    borderRadius: Border.br_xl,
    alignItems: "center",
    flexDirection: "row",
  },
  tabTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  andreTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: "left",
  },
  bestFitForTypo: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  inhebAbLayout: {
    display: "flex",
    lineHeight: 20,
    fontSize: FontSize.primaryText_size,
    alignItems: "center",
    overflow: "hidden",
  },
  homeIconLayout: {
    height: 24,
    width: 24,
  },
  tabItemSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_xs,
    paddingHorizontal: Padding.p_7xl,
    flexDirection: "row",
  },
  icon: {
    width: 28,
    height: 11,
  },
  left: {
    borderRadius: Border.br_13xl,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_8xs,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    marginLeft: 5,
    height: 11,
  },
  batteryIcon: {
    width: 24,
    marginLeft: 5,
    height: 11,
  },
  right: {
    flexDirection: "row",
  },
  statusBar: {
    height: 32,
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
  },
  tab: {
    color: Color.colorWhite,
    lineHeight: 20,
    fontSize: FontSize.primaryText_size,
  },
  pill: {
    backgroundColor: Color.colorBlack,
  },
  tab1: {
    color: Color.colorBlack,
    lineHeight: 20,
    fontSize: FontSize.primaryText_size,
  },
  pill1: {
    backgroundColor: Color.colorWhitesmoke,
    marginLeft: 8,
  },
  tabs: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_33xl,
    flexDirection: "row",
  },
  knowYourStyle: {
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    color: Color.colorBlack,
  },
  bestFitFor: {
    marginTop: 4,
    lineHeight: 20,
    fontSize: FontSize.primaryText_size,
    overflow: "hidden",
  },
  andre: {
    position: "absolute",
    top: 16,
    left: 16,
    fontSize: FontSize.size_5xl,
    letterSpacing: -1,
    width: 124,
    color: Color.colorWhite,
  },
  thumbnailIcon: {
    borderRadius: Border.br_5xs,
    height: 156,
    width: 156,
    overflow: "hidden",
  },
  onTheBed: {
    width: 156,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  description: {
    width: 156,
    color: Color.colorGray_300,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  title1: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  card: {
    width: 156,
  },
  card1: {
    marginLeft: 40,
    width: 156,
  },
  artistCarousel: {
    marginTop: 10,
    width: "100%",
  },
  artistCarouselRow: {
    padding: Padding.p_3xs,
    alignSelf: "stretch",
  },
  graphicIcon: {
    borderRadius: Border.br_29xl,
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  inhebAb: {
    textAlign: "center",
    width: 100,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    display: "flex",
    justifyContent: "center",
  },
  copy: {
    width: 100,
    marginTop: 8,
  },
  card6: {
    marginLeft: 12,
  },
  body: {
    alignSelf: "stretch",
    flex: 1,
  },
  musicScreenFrame: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  musicScreen: {
    flexDirection: "row",
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default MusicScreen;
