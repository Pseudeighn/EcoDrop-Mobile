import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image 
} from "react-native"; 
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavBar from "../components/BottomNavBar";
import { styles } from "../styles/WalletStyles";

export default function WalletScreen({ navigation }) {
  
  const rewards = [
    {
      id: 1,
      name: 'GCash Voucher',
      image: require('../assets/gcashlogo.jpg'), 
      points: 5000,
    },
    {
      id: 2,
      name: 'GCash Load',
      image: require('../assets/gcashlogo.jpg'),
      points: 3000,
    },
    {
      id: 3,
      name: 'AirPods Pro',
      image: require('../assets/airpods.jpg'),
      points: 15000,
    },
    {
      id: 4,
      name: 'Jollibee Gift Card',
      image: require('../assets/Jollibeelogo.jpg'),
      points: 8000,
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>My Eco-Wallet</Text>
        
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>AVAILABLE ECO-POINTS</Text>
          <Text style={styles.balancePoints}>1,250</Text>
          <View style={styles.tierBadge}>
            <Text style={styles.tierText}>🥉 Bronze Tier II</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Redeem Rewards</Text>
        
        {rewards.map((reward) => (
          <View key={reward.id} style={styles.rewardCard}>
            <View style={styles.rewardInfo}>
            
               <Image source={reward.image} style={styles.rewardImg} resizeMode="cover" />
               
               <View>
                 <Text style={styles.rewardTitle}>{reward.name}</Text>
                 <Text style={styles.rewardSub}>Digital Reward</Text>
               </View>
            </View>
            <Pressable style={styles.redeemBtn}>
              <Text style={styles.redeemText}>{reward.points} pts</Text>
            </Pressable>
          </View>
        ))}

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

      <View style={styles.navWrapper}>
        <BottomNavBar navigation={navigation} activeScreen="Wallet" />
      </View>
    </SafeAreaView>
  );
}