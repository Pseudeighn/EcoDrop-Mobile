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

export default function SignupScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <Image
        source={require("../assets/SignupBG.png")}
        style={styles.backgroundImg}
        resizeMode="cover"
      />
      <View style={styles.container}>
        <View style={styles.spacer} />

        <View style={styles.card}>
          <View style={styles.nameRow}>
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#6B7280"
              style={[styles.input, styles.half]}
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#6B7280"
              style={[styles.input, styles.half]}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <TextInput
            placeholder="Email Address"
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
              value={pw}
              onChangeText={setPw}
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

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#6B7280"
              style={styles.passwordInput}
              value={pw2}
              onChangeText={setPw2}
              secureTextEntry={!showConfirmPassword}
            />
            <Pressable
              style={styles.eyeIcon}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Text style={styles.eyeEmoji}>
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </Text>
            </Pressable>
          </View>

          <Pressable 
            style={styles.agreeRow} 
            onPress={() => setAgree(!agree)}
          >
            <View style={styles.checkbox}>
              {agree && <View style={styles.checkboxChecked} />}
            </View>
            <Text style={styles.agreeText}>
              I agree to the Terms and Conditions.
            </Text>
          </Pressable>

          <Pressable
            style={[styles.primaryBtn, !agree && styles.disabledBtn]}
            onPress={() => {
              if (!agree) return;
              if (pw !== pw2) return alert("Passwords do not match!");
              alert("Signed Up!");
            }}
          >
            <Text style={styles.primaryBtnText}>SIGN UP</Text>
          </Pressable>

          <View style={styles.bottomRow}>
            <Text style={styles.small}>Already have an account? </Text>
            <Pressable onPress={() => navigation.navigate("SignIn")}>
              <Text style={[styles.small, styles.link]}>Sign In.</Text>
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
  spacer: {
    height: 280,
  },

  card: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.06)",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 20,
  },
  nameRow: { flexDirection: "row", gap: 10 },
  half: { flex: 1 },

  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
  },
  passwordContainer: {
    position: "relative",
    marginBottom: 12,
  },
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
  eyeEmoji: {
    fontSize: 20,
  },

  agreeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
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
  checkboxChecked: {
    width: 10,
    height: 10,
    backgroundColor: BROWN,
    borderRadius: 1,
  },
  agreeText: { fontSize: 14, opacity: 0.75 },

  primaryBtn: {
    backgroundColor: BROWN,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  disabledBtn: { opacity: 0.5 },
  primaryBtnText: { color: "#fff", fontWeight: "800", letterSpacing: 1 },

  bottomRow: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  small: { fontSize: 14, color: "#1F2937", opacity: 0.8 },
  link: { color: BROWN, fontWeight: "700" },
});