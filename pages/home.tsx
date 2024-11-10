import React, { useState } from "react";
// import { SearchBar } from '@rneui/themed';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Searchbar from "../componets/SearchBar";
import ArticlesBox from "../componets/ArticlesBox";
import { LinearGradient } from "expo-linear-gradient";
import ProductBox from "../componets/ProductBox";
import PCODBox from "../componets/PCODBox";
import Navbar from "../componets/Navbar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TopCalendar from "../componets/TopCalendar";

const home = ({ navigation }) => {
  return (
    <View style={{ paddingBottom: 10, marginBottom: 10 }}>
      {/* <Searchbar/> */}

      <Text></Text>
      <Text></Text>

      {/* Scroll View Start Here  */}
      <ScrollView>
        {/* Calendar View  */}
        <TopCalendar navigation={navigation} />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 5,
            
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#11d1f2",
              padding: 12,
              borderRadius: 15,
              margin: 5,
              width: 150,
            }}
            onPress={() => alert("Pressed Play 1")}
          >
            <Text
              style={{ textAlign: "left", color: "black", fontWeight: "600" }}
            >
              Banner {"\n"}Remedy for today
            </Text>
          </Pressable>

          <Pressable
            style={{
              backgroundColor: "#11d1f2",
              padding: 12,
              borderRadius: 15,
              margin: 5,
              width: 150,
            }}
            onPress={() => alert("Pressed Play 2")}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome name="plus" size={24} color="black" />
              <Text
                style={{
                  textAlign: "left",
                  color: "black",
                  fontWeight: "600",
                  paddingLeft:10
                }}
              >
                LOG {"\n"}Your Diet
              </Text>
            </View>
          </Pressable>
        </View>

        <LinearGradient
          colors={["#f7f7f7", "#faaaeb"]} // Define the gradient colors
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 0,
            padding: 0,
            margin: 8,
            borderColor: "gray",

            shadowColor: "#4f4f4f", // Shadow color for iOS
            shadowOffset: { width: 0, height: 4 }, // Offset of the shadow for iOS
            shadowOpacity: 2, // Opacity of the shadow for iOS
            shadowRadius: 0, // Blur radius for iOS
            elevation: 5,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "",
              marginTop: 10,
              marginLeft: 5,
              marginRight: 5,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                width: "45%",
                paddingLeft: 1,
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 5 }}>
                Your Body Type
              </Text>
              <Text style={{ fontWeight: "bold", marginTop: 10 }}>
                How are you Feeling?
              </Text>
              <View>
                <Text>Answer question to know what body type you are!</Text>
                <View style={{ marginTop: 1 }}>
                  <TouchableOpacity
                    // icon={"check"}
                    // mode="contained"
                    // theme={theme}
                    onPress={() =>  navigation.navigate("bodyType")}
                    style={{
                      backgroundColor: "#b57da5",
                      width: 100,
                      padding: 5,
                      borderRadius: 20,
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <View>
                      <Text style={{ fontWeight: "bold" }}> Read more... </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{ width: "50%" }}>
              <Image
                style={{}}
                source={require("../assets/body-image.jpeg")}
              ></Image>
            </View>
          </View>
        </LinearGradient>

        {/* Here Articles   */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScrollView}
        >
          <ArticlesBox />
          <ArticlesBox />
          <ArticlesBox />
          <ArticlesBox />
          {/* Add more <ArticlesBox /> components as needed */}
        </ScrollView>
        {/* here is PCODBox  */}
        <PCODBox navigation={navigation} />

        {/* Information BOX */}
        <View style={{}}>
          <LinearGradient
            colors={["#f7f7f7", "#faaaeb"]} // Define the gradient colors
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{
              flex: 0,
              padding: 0,
              margin: 8,
              borderColor: "gray",

              shadowColor: "#4f4f4f", // Shadow color for iOS
              shadowOffset: { width: 0, height: 4 }, // Offset of the shadow for iOS
              shadowOpacity: 2, // Opacity of the shadow for iOS
              shadowRadius: 0, // Blur radius for iOS
              elevation: 5,
            }}
          >
            <View style={{ padding: 8 }}>
              <View style={{ marginTop: 10, marginBottom: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  Lorem Ispum
                </Text>
                <Text>Lorem Ispum Lorem Ispum Lorem Ispum</Text>
                <Text>Lorem Ispum Lorem Ispum Lorem Ispum</Text>
                <Text>Lorem Ispum Lorem Ispum Lorem Ispum</Text>
              </View>
              <Text>more...</Text>
            </View>
          </LinearGradient>
        </View>
        {/* Our Product  */}
        <ProductBox />
        <View style={{ paddingBottom: 100 }}></View>
        {/* Scroll View ENd Here  */}
      </ScrollView>

      {/* Navbar */}
      <Navbar navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalScrollView: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});

export default home;
