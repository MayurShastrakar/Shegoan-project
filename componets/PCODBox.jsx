import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default ({navigation}) => {
  return (
    <>
      <View style={{}}>
        <Pressable  onPress={() => navigation.navigate("pcodPage")}>
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
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {" "}
              Knows about PCOD/PCOS{" "}
            </Text>
            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                Lorem Ispum
              </Text>
              <Text>Lorem Ispum Lorem Ispum Lorem Ispum</Text>
              <Text>Lorem Ispum Lorem Ispum Lorem Ispum</Text>
              <Text>Lorem Ispum Lorem Ispum </Text>
            </View>
            <Text>more...</Text>
          </View>
        </LinearGradient>
        </Pressable>
      </View>
    </>
  );
};
