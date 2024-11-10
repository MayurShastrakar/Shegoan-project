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
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { LinearGradient } from "expo-linear-gradient";

const Navbar = () => {
  return (
    <>
      <View style={styles.bottomNavbar}>
        <Pressable style={styles.navbarItem} onPress={() => alert("Home")}>
        <FontAwesome name="user-circle" size={40} color="black" style={{color:'#c7c5c7',}} />
          <Text style={styles.navbarText}>Profile</Text>
        </Pressable>
        <Pressable style={styles.navbarItem} onPress={() => alert("Search")}>
          <Text style={styles.navbarText}>Shop</Text>
        </Pressable>
        <Pressable style={styles.navbarItem} onPress={() => alert("Profile")}>
          <Text style={styles.navbarText}>Diet</Text>
        </Pressable>
        <Pressable style={styles.navbarItem} onPress={() => alert("Profile")}>
          <Text style={styles.navbarText}>I am {"\n"}Feeling</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bottomNavbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems:'center',
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    elevation: 5, // Shadow for Android
    borderTopColor:"#e6e3e6",
    borderTopWidth:2,
    paddingLeft:20,
    paddingRight:20,
  },
  navbarItem: {
    alignItems: "center",
    
  },
  navbarText: {
    color: "black",
   fontWeight:"bold",
   fontSize: 16,
   textAlign:'center'
  },
});

export default Navbar;
