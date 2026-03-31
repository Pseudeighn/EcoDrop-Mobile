import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";

export default function WalletScreen({ navigation }) {
  // Sample rewards data
  const rewards = [
    {
      id: 1,
      name: 'GCash Voucher',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/GCash_logo_2022.png',
      points: 5000,
    },
    {
      id: 2,
      name: 'GCash Load',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/GCash_logo_2022.png',
      points: 3000,
    },
    {
      id: 3,
      name: 'AirPods Pro',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV1?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1591634795000',
      points: 15000,
    },
    {
      id: 4,
      name: 'Jollibee Gift Card',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Jollibee_2011_logo.svg',
      points: 8000,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </Pressable>
        <Text style={styles.title}>Wallet</Text>
      </View>

      <View style={styles.scrollArea}>
        {/* Rewards Card */}
        <View style={styles.rewardsCard}>
          <View style={styles.rewardsCardHeader}>
            <Text style={styles.loyaltyLabel}>Loyalty Card</Text>
            <View style={styles.goldBadge}><Text style={styles.goldBadgeText}>🏅 Bronze</Text></View>
          </View>
          <Text style={styles.rewardsPointsBig}>20,525</Text>
          <Text style={styles.pointsLabel}>Current Points</Text>
          <View style={styles.trophyRow}>
            <Text style={styles.expiryText}>Expiry 06/26</Text>
            <Text style={styles.trophyIcon}>🏆</Text>
          </View>
        </View>

        {/* Best Buy Section */}
        <Text style={styles.sectionTitle}>Exchange Rewards</Text>
        <View style={styles.rewardsGrid}>
          {rewards.map((item) => (
            <View key={item.id} style={styles.rewardItem}>
              <View style={styles.rewardImageWrap}>
                <Image source={{ uri: item.image }} style={styles.rewardImage} resizeMode="contain" />
              </View>
              <Text style={styles.rewardName}>{item.name}</Text>
              <Pressable style={styles.useBtn}>
                <Text style={styles.useBtnText}>Use <Text style={styles.coin}>🪙</Text> {item.points}</Text>
              </Pressable>
            </View>
          ))}
        </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: BUTTON_COLOR,
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  backIcon: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
  scrollArea: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E5D7C4',
  },
  rewardsCard: {
    backgroundColor: '#354024',
    borderRadius: 18,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  rewardsCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  loyaltyLabel: {
    color: '#CFBB99',
    fontWeight: 'bold',
    fontSize: 16,
  },
  goldBadge: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  goldBadgeText: {
    color: '#4C3D19',
    fontWeight: 'bold',
    fontSize: 13,
  },
  rewardsPointsBig: {
    color: '#A2C523',
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 2,
    marginTop: 2,
    textAlign: 'left',
  },
  pointsLabel: {
    color: '#CFBB99',
    fontSize: 15,
    marginBottom: 2,
  },
  pointsRate: {
    color: '#E5D7C4',
    fontSize: 13,
    marginBottom: 8,
  },
  trophyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  expiryText: {
    color: '#CFBB99',
    fontSize: 13,
  },
  trophyIcon: {
    fontSize: 32,
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4C3D19',
    marginBottom: 10,
    marginTop: 10,
  },
  rewardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  rewardItem: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 14,
    marginBottom: 16,
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  rewardImageWrap: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#E5D7C4',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  rewardImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  rewardName: {
    fontSize: 14,
    color: '#354024',
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  useBtn: {
    backgroundColor: '#A2C523',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 18,
    marginTop: 2,
  },
  useBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  coin: {
    fontSize: 15,
  },
});