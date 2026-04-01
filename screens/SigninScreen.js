import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  StatusBar
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// 1. Import Context and dynamic styles function
import { ThemeContext } from "../context/ThemeContext";
import { getStyles } from "../styles/SigninStyles";

export default function SigninScreen({ navigation }) {
  // 2. Consume Theme Context
  const { theme, isDarkMode } = useContext(ThemeContext);
  const styles = getStyles(theme, isDarkMode);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const extractedName = email.split("@")[0];
    const user = {
      name: extractedName.charAt(0).toUpperCase() + extractedName.slice(1),
      email: email,
    };

    navigation.navigate("Dashboard", { user });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} translucent backgroundColor="transparent" />
      
      <Image
        source={require("../assets/SigninBG.png")}
        style={styles.backgroundImg}
        resizeMode="cover"
      />
      
      <View style={styles.container}>
        <View style={styles.spacer} />

        <View style={styles.card}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={theme.textMuted} // Dynamic placeholder color
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={theme.textMuted} // Dynamic placeholder color
              style={styles.passwordInput}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <Pressable
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={styles.eyeEmoji}>
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </Text>
            </Pressable>
          </View>

          <View style={styles.rowBetween}>
            <Pressable
              style={styles.checkboxRow}
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View style={styles.checkbox}>
                {rememberMe && <View style={styles.checkboxChecked} />}
              </View>
              <Text style={styles.rememberText}>Remember Me</Text>
            </Pressable>
            <Pressable onPress={() => alert("Forgot password pressed.")}>
              <Text style={[styles.rememberText, styles.link]}>Forgot Password?</Text>
            </Pressable>
          </View>

          <Pressable style={styles.primaryBtn} onPress={handleSignIn}>
            <Text style={styles.primaryBtnText}>SIGN IN</Text>
          </Pressable>

          <Text style={styles.orText}>-------------------- OR CONTINUE WITH --------------------</Text>

          <View style={styles.socialRow}>
            <Pressable
              style={styles.socialBtn}
              onPress={() => alert("Google")}
            >
              <Image
                source={require("../assets/GoogleLogo.png")}
                style={styles.socialLogo}
                resizeMode="contain"
              />
              <Text style={styles.socialText}>Google</Text>
            </Pressable>

            <Pressable
              style={styles.socialBtn}
              onPress={() => alert("Facebook")}
            >
              <Image
                source={require("../assets/FacebookLogo.png")}
                style={styles.socialLogo}
                resizeMode="contain"
              />
              <Text style={styles.socialText}>Facebook</Text>
            </Pressable>
          </View>

          <View style={styles.bottomRow}>
            <Text style={styles.small}>Don't have an account? </Text>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
              <Text style={[styles.small, styles.link]}>Sign Up.</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}