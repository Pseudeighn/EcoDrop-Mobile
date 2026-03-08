import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Animated,
} from "react-native";

export default function EcoMapScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useState(new Animated.Value(-200))[0];

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(slideAnim, {
        toValue: -200,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleMenuNavigation = (screen) => {
    toggleMenu();
    setTimeout(() => {
      navigation.navigate(screen);
    }, 300);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Pressable
          style={styles.navButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </Pressable>

        <Pressable style={styles.navButton} onPress={toggleMenu}>
          <Text style={styles.hamburgerIcon}>☰</Text>
        </Pressable>
      </View>

      {menuVisible && (
        <Animated.View
          style={[
            styles.dropdownMenu,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <Pressable
            style={styles.menuItem}
            onPress={() => handleMenuNavigation("QRScreen")}
          >
            <Text style={styles.menuText}>QR Scan</Text>
          </Pressable>

          <Pressable
            style={styles.menuItem}
            onPress={() => handleMenuNavigation("Wallet")}
          >
            <Text style={styles.menuText}>Wallet</Text>
          </Pressable>

          <Pressable
            style={styles.menuItem}
            onPress={() => handleMenuNavigation("Profile")}
          >
            <Text style={styles.menuText}>Profile</Text>
          </Pressable>

          <Pressable style={styles.menuItem}>
            <Text style={styles.menuText}>Settings</Text>
          </Pressable>
        </Animated.View>
      )}

      <View style={styles.content}>
      </View>
    </SafeAreaView>
  );
}

const BUTTON_COLOR = "#4C3D19";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    zIndex: 10,
  },
  navButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: BUTTON_COLOR,
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
  },
  hamburgerIcon: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
  },
  dropdownMenu: {
    position: "absolute",
    top: 70,
    right: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
    zIndex: 20,
    minWidth: 160,
    overflow: "hidden",
  },
  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});