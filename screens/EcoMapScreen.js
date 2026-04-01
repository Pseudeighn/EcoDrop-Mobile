import React from "react";
import {
  View,
  Text,
  StatusBar,
} from "react-native";
import MapScreen from "../components/MapScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavBar from "../components/BottomNavBar";
import { styles } from "../styles/EcoMapStyles";

export default function EcoMapScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={styles.safe.backgroundColor} />

      <View style={styles.header}>
        <Text style={styles.headerLabel}>ECOMAP</Text>
      </View>

      <View style={styles.mapWrapper}>
        <MapScreen />
      </View>

      <BottomNavBar navigation={navigation} activeScreen="EcoMap" />
    </SafeAreaView>
  );
}