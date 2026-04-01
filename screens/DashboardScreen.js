import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  Animated,
  Dimensions,
  StatusBar,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import BottomNavBar from "../components/BottomNavBar";
import { styles, statStyles, tileStyles, actStyles } from "../styles/DashboardStyles";

const { width } = Dimensions.get("window");

function LeafDot({ style }) {
  return (
    <View
      style={[
        {
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: COLORS.mossGreen,
          opacity: 0.35,
        },
        style,
      ]}
    />
  );
}

function StatPill({ value, label, accent }) {
  return (
    <View style={statStyles.pill}>
      <Text style={[statStyles.value, { color: accent }]}>{value}</Text>
      <Text style={statStyles.label}>{label}</Text>
    </View>
  );
}

function ActionTile({ emoji, label, sub, onPress, dark }) {
  const scale = useRef(new Animated.Value(1)).current;
  const press = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 0.94, duration: 80, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1,    duration: 120, useNativeDriver: true }),
    ]).start();
    onPress?.();
  };
  return (
    <Pressable onPress={press} style={{ flex: 1 }}>
      <Animated.View style={[tileStyles.tile, dark && tileStyles.tileDark, { transform: [{ scale }] }]}>
        <Text style={tileStyles.emoji}>{emoji}</Text>
        <Text style={[tileStyles.label, dark && { color: COLORS.bone }]}>{label}</Text>
        <Text style={[tileStyles.sub, dark && { color: COLORS.mossGreen }]}>{sub}</Text>
      </Animated.View>
    </Pressable>
  );
}

function ActivityRow({ emoji, title, date, points, negative }) {
  return (
    <View style={actStyles.row}>
      <View style={actStyles.iconBox}>
        <Text style={{ fontSize: 18 }}>{emoji}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={actStyles.title}>{title}</Text>
        <Text style={actStyles.date}>{date}</Text>
      </View>
      <Text style={[actStyles.pts, negative && actStyles.ptsNeg]}>{points}</Text>
    </View>
  );
}

export default function DashboardScreen({ route, navigation }) {
  const userName = route?.params?.user?.name || "Eco-Warrior";

  const fadeHeader = useRef(new Animated.Value(0)).current;
  const fadeHero   = useRef(new Animated.Value(0)).current;
  const fadeCards  = useRef(new Animated.Value(0)).current;
  const fadeList   = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(120, [
      Animated.timing(fadeHeader, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(fadeHero,   { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(fadeCards,  { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(fadeList,   { toValue: 1, duration: 400, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.darkBg} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={[styles.header, { opacity: fadeHeader }]}>
          <View style={styles.headerLeft}>
            <Image
              source={require("../assets/EcoDropLogo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.greeting}>Hello, {userName} 👋</Text>
              <Text style={styles.subGreeting}>Ready to make an impact?</Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View style={{ opacity: fadeHero }}>
          <Pressable
            style={styles.heroBanner}
            onPress={() => navigation.navigate("Wallet")}
          >
            <LeafDot style={{ position: "absolute", top: 16, right: 48 }} />
            <LeafDot style={{ position: "absolute", top: 32, right: 32, width: 14, height: 14, borderRadius: 7, opacity: 0.2 }} />
            <LeafDot style={{ position: "absolute", bottom: 20, left: 24, width: 6, height: 6, borderRadius: 3 }} />

            <View style={styles.heroBannerTop}>
              <View>
                <Text style={styles.heroLabel}>YOUR ECO-POINTS</Text>
                <Text style={styles.heroPoints}>1,250</Text>
              </View>
              <View style={styles.heroBadge}>
                <Text style={styles.heroBadgeText}>🌿 Active</Text>
              </View>
            </View>

            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: "62.5%" }]} />
            </View>
            <Text style={styles.progressLabel}>750 pts to Silver Tier · 62.5%</Text>

            <View style={styles.heroDivider} />

            <View style={styles.statsRow}>
              <StatPill value="12.5 kg" label="Plastic Saved"  accent={COLORS.mossGreen} />
              <View style={styles.statSep} />
              <StatPill value="23"      label="Deposits"       accent={COLORS.tan} />
              <View style={styles.statSep} />
              <StatPill value="4"       label="Vouchers Used"  accent={COLORS.bone} />
            </View>
          </Pressable>
        </Animated.View>

        <Animated.View style={{ opacity: fadeCards }}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.tileRow}>
            <ActionTile
              emoji="📷"
              label="Scan to Deposit"
              sub="Open QR scanner"
              dark
              onPress={() => navigation.navigate("QRScreen")}
            />
            <ActionTile
              emoji="🗺️"
              label="Find a Bin"
              sub="Locate drop-off"
              onPress={() => navigation.navigate("EcoMap")}
            />
          </View>
          <View style={[styles.tileRow, { marginTop: 12 }]}>
            <ActionTile
              emoji="🎁"
              label="Redeem Rewards"
              sub="Use your points"
              onPress={() => navigation.navigate("Wallet")}
            />
            <ActionTile
              emoji="👤"
              label="My Profile"
              sub="View & edit info"
              dark
              onPress={() => navigation.navigate("Profile")}
            />
          </View>
        </Animated.View>

        <Animated.View style={{ opacity: fadeList }}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityCard}>
            <ActivityRow
              emoji="♻️"
              title="Deposited Plastic Bottle"
              date="Feb 10 · 2:30 PM"
              points="+10 pts"
              negative={false}
            />
            <ActivityRow
              emoji="🎟️"
              title="Redeemed Coffee Voucher"
              date="Feb 08 · 9:15 AM"
              points="−50 pts"
              negative={true}
            />
            <ActivityRow
              emoji="♻️"
              title="Deposited Cardboard"
              date="Feb 06 · 4:00 PM"
              points="+15 pts"
              negative={false}
            />
            <Pressable
              style={styles.viewAllBtn}
              onPress={() => navigation.navigate("Wallet")}
            >
              <Text style={styles.viewAllText}>View all activity →</Text>
            </Pressable>
          </View>
        </Animated.View>

        <View style={{ height: 90 }} />
      </ScrollView>

      <View style={styles.navWrapper}>
        <BottomNavBar navigation={navigation} activeScreen="Dashboard" />
      </View>
    </SafeAreaView>
  );
}