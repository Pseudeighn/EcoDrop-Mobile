import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Pressable,
  Animated,
} from "react-native";
import MapScreen from "../components/MapScreen";
import { SafeAreaView } from "react-native-safe-area-context";

// 1. Import Context and dynamic styles function
import { ThemeContext } from "../context/ThemeContext";
import { getStyles } from "../styles/EcoMapStyles";

export default function EcoMapScreen({ navigation }) {
  // 2. Consume Theme Context
  const { theme } = useContext(ThemeContext);
  
  // 3. Generate dynamic styles
  const styles = getStyles(theme);

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
      {/* Top Bar Floating Over Map */}
      <View style={styles.topBar}>
        <Pressable
          style={styles.navButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </Pressable>

      <View style={styles.header}>
        <Text style={styles.headerLabel}>ECOMAP</Text>
      </View>

      {/* Animated Dropdown Menu */}
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

          <Pressable style={[styles.menuItem, { borderBottomWidth: 0 }]}>
            <Text style={styles.menuText}>Settings</Text>
          </Pressable>
        </Animated.View>
      )}

      {/* Map Content */}
      <View style={styles.content}>
        <MapScreen />
      </View>

      <BottomNavBar navigation={navigation} activeScreen="EcoMap" />
    </SafeAreaView>
  );
}