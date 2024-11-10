import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const BodyType = () => {
  // State to control the visibility of CosutomComp
  const [showCustomComp, setShowCustomComp] = useState(false);
  const [showSecondModel, setShowSecondModel] = useState(false);
  const [showThirdModel, setshowThirdModel] = useState(false);

  // Image Boxes Component
  const ImageBox = () => {
    return (
      <View
        style={{
          width: 110,
          alignItems: "center",
          backgroundColor: "white",
          margin: 5,
        }}
      >
        <View style={{ padding: 8 }}>
          <Image
            style={{ width: 100, height: 150 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fe45scnFzuxFlw-LHWrQB6jPu92UkTn7kg&s",
            }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: 900 }}>Image Name </Text>
        </View>
      </View>
    );
  };
  const CardBox = () => {
    return (
      <View
        style={{
          backgroundColor: "#e0d5df",
          flex: 1,
          marginTop: 15,
          paddingBottom: 10,
          margin: 5,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 15 }}>
          {" "}
          Card Name
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingVertical: 1, paddingHorizontal: 1 }}
        >
          <View style={{ flexDirection: "row" }}>
            <ImageBox />
            <ImageBox />
            <ImageBox />
            <ImageBox />
            <ImageBox />
            <ImageBox />
          </View>
        </ScrollView>
      </View>
    );
  };

  // Custom Component
  const CosutomComp = () => {
    const SecondModel = () => {
      const ThirdModel = () => {
        return (
          <>
            <View>
              <ScrollView>
                <View style={{ marginTop: 20, padding: 10 }}>
                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Lorem Ispum
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "white",
                      paddingVertical: 50,
                      marginVertical: 30,
                    }}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        backgroundColor: "white",
                        marginVertical: 30,
                        paddingVertical: 20,
                        // borderWidth: 1,
                      }}
                    >
                      <Image
                        style={{ width: 200, height: 200 }}
                        source={{
                          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuzEoYVtXz_qlq_WR5_kwXckzpoLpiqR06A&s",
                        }}
                      />
                    </View>
                    <View style={{ margin: 5 }}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          paddingBottom: 10,
                        }}
                      >
                        Lorem Ispum
                      </Text>
                      <Text>Lorem ipsum dolor sit </Text>
                      <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus ullam minima soluta unde repellendus,
                        voluptatum, voluptatem ipsam fugiat provident eum non
                        libero delectus dicta? Voluptate fugiat ullam
                        consequatur explicabo minima.
                      </Text>
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
                      <Text>Continue</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
          </>
        );
      };
      return (
        <View style={{ marginTop: 10, padding: 0 }}>
          {showThirdModel ? (
            <ThirdModel />
          ) : (
            <View>
              <View style={{ backgroundColor: "#ede6ed", marginTop: 10 }}>
                <CardBox />
                <CardBox />
              </View>
              <View style={{ backgroundColor: "#ede6ed", marginTop: 20 }}>
                <CardBox />
                <CardBox />
              </View>
              <View
                style={{ alignItems: "center", margin: 10, marginVertical: 20 }}
              >
                <TouchableOpacity
                  style={styles.myButton}
                  onPress={() => setshowThirdModel(true)} // Show CosutomComp when clicked
                >
                  <Text>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      );
    };

    return (
      <ScrollView>
        {showSecondModel ? (
          <SecondModel />
        ) : (
          <View style={{ marginTop: 10, padding: 0 }}>
            <View style={{}}>
              <CardBox />
              <CardBox />
              <CardBox />
              <CardBox />
            </View>
            <View
              style={{ alignItems: "center", margin: 10, marginVertical: 20 }}
            >
              <TouchableOpacity
                style={styles.myButton}
                onPress={() => setShowSecondModel(true)} // Show CosutomComp when clicked
              >
                <Text>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          {/* Render CosutomComp if showCustomComp is true */}
          {showCustomComp ? (
            <CosutomComp />
          ) : (
            <View style={{ padding: 8 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                Lorem Ipsum
              </Text>
              <View style={{}}>
                <View
                  style={{
                    marginVertical: 50,
                    paddingVertical: 50,
                    backgroundColor: "white",
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      paddingVertical: 50,
                      marginVertical: 40,
                    }}
                  >
                    <Image
                      style={{ width: 120, height: 120 }}
                      source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqo7iBgRU9EZPDvZh43qUiCsKkL7SxP0ucw&s",
                      }}
                    />
                  </View>
                  <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Lorem Ipsum
                    </Text>
                    <Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                    <Text>Lorem Ipsum Lorem Ipsum Lorem Ipsum</Text>
                    <Text>Lorem Ipsum</Text>
                  </View>
                </View>
              </View>
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.myButton}
                  onPress={() => setShowCustomComp(true)} // Show CosutomComp when clicked
                >
                  <Text>Start</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default BodyType;
