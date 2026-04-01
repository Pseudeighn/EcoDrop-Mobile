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
import { styles } from "../styles/SignupStyles";

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