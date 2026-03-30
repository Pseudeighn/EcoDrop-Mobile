import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavBar from "../components/BottomNavBar";

const COLORS = {
  kombuGreen: "#354024",
  mossGreen:  "#889063",
  bone:       "#E5D7C4",
  darkBg:     "#1E2416",
  tan:        "#CFBB99",
};

export default function WalletScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <Text style={styles.headerTitle}>My Eco-Wallet</Text>
        
        {/* 1. The Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>AVAILABLE ECO-POINTS</Text>
          <Text style={styles.balancePoints}>1,250</Text>
          <View style={styles.tierBadge}>
            <Text style={styles.tierText}>Bronze Tier</Text>
          </View>
        </View>

        {/* 2. Available Rewards Section */}
        <Text style={styles.sectionTitle}>Redeem Rewards</Text>
        
        <View style={styles.rewardCard}>
          <View style={styles.rewardInfo}>
             <Text style={styles.rewardEmoji}>☕</Text>
             <View>
               <Text style={styles.rewardTitle}>Free Coffee Voucher (Any Size)</Text>
               <Text style={styles.rewardSub}>Local Cafe Partner</Text>
             </View>
          </View>
          <Pressable style={styles.redeemBtn}>
            <Text style={styles.redeemText}>300 pts</Text>
          </Pressable>
        </View>

        <View style={styles.rewardCard}>
          <View style={styles.rewardInfo}>
             <Text style={styles.rewardEmoji}>🌱</Text>
             <View>
               <Text style={styles.rewardTitle}>Reusable Tote Bag Voucher</Text>
               <Text style={styles.rewardSub}>EcoDrop Merch</Text>
             </View>
          </View>
          <Pressable style={styles.redeemBtn}>
            <Text style={styles.redeemText}>500 pts</Text>
          </Pressable>
        </View>

        {/* 3. Transaction History Section */}
        <Text style={[styles.sectionTitle, { marginTop: 10 }]}>Recent Transactions</Text>
        
        <View style={styles.historyItem}>
          <View>
            <Text style={styles.historyTitle}>Deposited 5kg Plastic</Text>
            <Text style={styles.historyDate}>Today, 2:30 PM</Text>
          </View>
          <Text style={styles.pointsEarned}>+ 50 pts</Text>
        </View>

        <View style={styles.historyItem}>
          <View>
            <Text style={styles.historyTitle}>Redeemed Coffee</Text>
            <Text style={styles.historyDate}>Yesterday, 9:15 AM</Text>
          </View>
          <Text style={styles.pointsSpent}>- 300 pts</Text>
        </View>

      </ScrollView>
      
      {/* 4. Footer Navigation */}
      <View style={styles.navWrapper}>
        <BottomNavBar navigation={navigation} activeScreen="Wallet" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.darkBg },
  scrollContent: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 100 },
  headerTitle: { fontSize: 24, fontWeight: "800", color: COLORS.bone, marginBottom: 20 },
  
  balanceCard: {
    backgroundColor: COLORS.kombuGreen,
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "rgba(136,144,99,0.3)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  balanceLabel: { fontSize: 12, color: COLORS.mossGreen, fontWeight: "700", letterSpacing: 1.5, marginBottom: 8 },
  balancePoints: { fontSize: 48, fontWeight: "900", color: COLORS.bone, marginBottom: 12 },
  tierBadge: { backgroundColor: "rgba(136,144,99,0.2)", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  tierText: { color: COLORS.mossGreen, fontSize: 12, fontWeight: "700" },
  
  sectionTitle: { fontSize: 14, fontWeight: "700", color: COLORS.mossGreen, textTransform: "uppercase", marginBottom: 15, letterSpacing: 1 },
  
  rewardCard: {
    flexDirection: "row",
    backgroundColor: "#2A321F",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  rewardInfo: { flexDirection: "row", alignItems: "center", gap: 12 },
  rewardEmoji: { fontSize: 28 },
  rewardTitle: { fontSize: 15, fontWeight: "700", color: COLORS.bone },
  rewardSub: { fontSize: 12, color: COLORS.mossGreen, marginTop: 4 },
  redeemBtn: { backgroundColor: COLORS.mossGreen, paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8 },
  redeemText: { color: COLORS.darkBg, fontSize: 12, fontWeight: "800" },

  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(136,144,99,0.2)",
  },
  historyTitle: { fontSize: 14, fontWeight: "600", color: COLORS.bone },
  historyDate: { fontSize: 12, color: COLORS.mossGreen, marginTop: 4 },
  pointsEarned: { fontSize: 14, fontWeight: "700", color: "#8BC98B" },
  pointsSpent: { fontSize: 14, fontWeight: "700", color: "#C98B8B" },

  navWrapper: { position: "absolute", bottom: 0, left: 0, right: 0 },
});