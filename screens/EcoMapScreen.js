import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
} from "react-native";
import MapScreen from '../components/MapScreen';
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import { styles } from "../styles/EcoMapStyles";

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
        <MapScreen />
      </View>
    </SafeAreaView>
  );
}