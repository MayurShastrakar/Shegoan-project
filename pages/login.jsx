import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text } from 'react-native';


const login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate("home");
    // Implement your login logic here
  };

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={{ uri: 'https://www.bootdey.com/image/280x280/9370DB/9370DB' }} style={styles.backgroundImage}> */}
        <View >
            <Text style={styles.textinput1}>Login</Text>
            <Text style={styles.textinput2}>Sign in to Continue</Text>
          {/* <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar3.png' }} style={styles.logo} /> */}
        </View>
        <View style={styles.formContainer}>
          <View style={styles.card}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.card}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
          <View style={{marginTop:10}}>
          <Text style={styles.textinput2}>Forgot Password ?</Text>
          <Text style={styles.textinput2}>Sign up</Text>
          </View>
        </View>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 160,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius:60,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 50,
    paddingVertical:100,
    padding:20,
    borderRadius:50,
    backgroundColor:'#fff'
  },
  textinput1:{
    fontSize: 40,
    alignContent:'center',
    textAlign: 'center',
    marginTop:100,
    fontWeight:'bold'
  },
  textinput2:{
    fontSize: 20,
    alignContent:'center',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#808080',
    borderRadius: 20,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    padding:10,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth:1,
    borderBottomColor:'#fff',
    color:'#fff'
  },
  loginButton: {
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default login;

                                          