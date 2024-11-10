import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

const PCODPage = ({ navigation }) => {

const Tags = () => {
    return (
        <>
        <View>
            <View style={{backgroundColor:'#dbd7db', paddingVertical:8, paddingHorizontal:15,  borderWidth:1, borderColor:'#8a888a', borderRadius:10,  margin:5}}>
            <TouchableOpacity >
                <Text style={{textAlign:'center', fontSize:16}}>Name any</Text>
              </TouchableOpacity>
            </View>
        </View>
        </>
    )
}
  const handleLogin = () => {
    navigation.navigate("home");
    // Implement your login logic here
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#ede6ed", marginTop: 10, padding:10}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 900,
            paddingVertical: 20,
            padding: 5,
          }}
        >
          Understand your hormones and body better!
        </Text>

        <View style={{ marginTop: 50, paddingVertical: 20, padding:5 }}>
          <Text style={{ fontSize: 18 }}>
            Have you ever been diagnosed with {"\n"}PCOS/PCOD
          </Text>

          <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:20}}>
            <View
              style={{
                alignItems: "center",
                margin: 10,
                marginVertical: 20,
                
              }}
            >
              <TouchableOpacity
                style={{ backgroundColor: "white", paddingVertical:20, paddingHorizontal:50 }}
                onPress={() => alert("Wait..!!")} // Show CosutomComp when clicked
              >
                <Text>Yes</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: "center",
                margin: 10,
                marginVertical: 20,
                
              }}
            >
              <TouchableOpacity
                style={{ backgroundColor: "white", paddingVertical:20, paddingHorizontal:50 }}
                onPress={() => alert("Wait..!!")} // Show CosutomComp when clicked
              >
                <Text>No</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* <View  style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
            <Tags/>
            <Tags/>
            <Tags/>
            <Tags/>
            <Tags/>
            <Tags/>

          </View> */}
            <Text>hgfyf</Text>
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          margin: 10,
          marginVertical: 20,
        }}
      >
        <TouchableOpacity
          style={styles.myButton}
          onPress={() => alert("true")} // Show CosutomComp when clicked
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    paddingHorizontal: 10,
    backgroundColor: "#faaaeb",
    margin: 1,
    marginTop: 50,
    shadowColor: "#7d4b75",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 2,
    shadowRadius: 0,
    elevation: 5,
  },
  myButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#c4afc2",
    shadowColor: "#7d4b75",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 5,
    shadowRadius: 0,
    elevation: 5,
  },
});

export default PCODPage;
