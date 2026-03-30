import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,   
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SigninScreen({ navigation }) {
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
            placeholderTextColor="#6B7280"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#6B7280"
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
              style={[styles.socialBtn, styles.google]}
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
              style={[styles.socialBtn, styles.facebook]}
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

const BG = "#8A9468";
const BROWN = "#4A3B13";

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: BG },
  container: { flex: 1 },
  backgroundImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  spacer: { height: 280 },
  card: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.06)",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
  },
  passwordContainer: { position: "relative", marginBottom: 12 },
  passwordInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    paddingRight: 50,
  },
  eyeIcon: {
    position: "absolute",
    right: 14,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  eyeEmoji: { fontSize: 20 },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  checkboxRow: { flexDirection: "row", alignItems: "center" },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: BROWN,
    borderRadius: 3,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  checkboxChecked: { width: 10, height: 10, backgroundColor: BROWN, borderRadius: 1 },
  rememberText: { fontSize: 15, fontWeight: 'bold', color: "#4A3B13", opacity: 0.8 },
  small: { fontSize: 15, color: "#1F2937", opacity: 0.8 },
  link: { color: BROWN, fontWeight: "700" },
  primaryBtn: { backgroundColor: BROWN, paddingVertical: 14, borderRadius: 10, alignItems: "center", marginTop: 2 },
  primaryBtnText: { color: "#fff", fontWeight: "800", letterSpacing: 1 },
  orText: { textAlign: "center", marginVertical: 12, fontSize: 12, opacity: 0.6 },
  socialRow: { flexDirection: "row", gap: 12 },
  socialBtn: { flex: 1, paddingVertical: 12, borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#fff", flexDirection: "row", gap: 8 },
  google: { opacity: 0.95 },
  facebook: { opacity: 0.95 },
  socialLogo: { width: 20, height: 20 },
  socialText: { fontWeight: "700", opacity: 0.75 },
  bottomRow: { marginTop: 14, flexDirection: "row", justifyContent: "center", alignItems: "center" },
});
