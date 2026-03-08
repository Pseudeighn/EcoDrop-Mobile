import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import ActionCard from "../components/ActionCard";
import ActivityItem from "../components/ActivityItem";

export default function DashboardScreen({ route, navigation }) {
  const userName = route.params?.user?.name || "Eco-Warrior";
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, {userName}!</Text>
          <Text style={styles.subGreeting}>Ready to recycle?</Text>
        </View>
        <Pressable
          style={styles.profileBtn}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.profileIcon}>👤</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Pressable
          style={styles.balanceCard}
          onPress={() => navigation.navigate("Wallet")}
        >
          <View>
            <Text style={styles.balanceLabel}>Your Eco-Points</Text>
            <Text style={styles.balanceValue}>1,250</Text>
            <Text style={styles.balanceSub}>≈ 12.5 kg plastic saved</Text>
          </View>
          <Text style={styles.leafIcon}>🌿</Text>
        </Pressable>

        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.gridContainer}>
          {/* Correctly using the self-closing ActionCard component */}
          <ActionCard
            icon="📷"
            text="Scan to Deposit"
            isPrimary={true}
            onPress={() => navigation.navigate("QRScreen")}
          />
          <ActionCard
            icon="🗺️"
            text="Find Bin"
            isPrimary={false}
            onPress={() => navigation.navigate("EcoMap")}
          />
        </View>

        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityList}>
          {/* Correctly replacing the long View blocks with ActivityItem */}
          <ActivityItem
            icon="♻️"
            title="Deposited Plastic"
            date="Feb 10, 2:30 PM"
            points="+10 pts"
            isNegative={false}
          />
          <ActivityItem
            icon="🎟️"
            title="Redeemed Voucher"
            date="Feb 08, 9:15 AM"
            points="-50 pts"
            isNegative={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const BROWN = "#4A3B13";
const GREEN_ACCENT = "#8A9468";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FFF9",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: BROWN,
  },
  subGreeting: {
    fontSize: 14,
    color: "#666",
  },
  profileBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E9DEC9",
    justifyContent: "center",
    alignItems: "center",
  },
  profileIcon: {
    fontSize: 20,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  balanceCard: {
    backgroundColor: BROWN,
    borderRadius: 20,
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  balanceLabel: {
    color: "#E9DEC9",
    fontSize: 14,
    marginBottom: 4,
  },
  balanceValue: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },
  balanceSub: {
    color: GREEN_ACCENT,
    fontSize: 12,
    marginTop: 4,
  },
  leafIcon: {
    fontSize: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 15,
  },
  gridContainer: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 30,
  },
  activityList: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
});