import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ScrollView,
  Image,
  Animated,
  Dimensions,
  StatusBar,
} from "react-native";
import BottomNavBar from "../components/BottomNavBar";

const { width } = Dimensions.get("window");

const C = {
  cafeNoir:   "#4C3D19",
  kombuGreen: "#354024",
  mossGreen:  "#889063",
  tan:        "#CFBB99",
  bone:       "#E5D7C4",
  white:      "#FFFFFF",
  cream:      "#F7F2EA",
  darkBg:     "#1E2416",
};

function LeafDot({ style }) {
  return (
    <View
      style={[
        {
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: C.mossGreen,
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
const statStyles = StyleSheet.create({
  pill: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
  },
  value: {
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  label: {
    fontSize: 10,
    color: C.tan,
    fontWeight: "500",
    marginTop: 2,
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },
});

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
        <Text style={[tileStyles.label, dark && { color: C.bone }]}>{label}</Text>
        <Text style={[tileStyles.sub, dark && { color: C.mossGreen }]}>{sub}</Text>
      </Animated.View>
    </Pressable>
  );
}
const tileStyles = StyleSheet.create({
  tile: {
    backgroundColor: C.bone,
    borderRadius: 18,
    padding: 18,
    alignItems: "flex-start",
    gap: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  tileDark: {
    backgroundColor: C.kombuGreen,
  },
  emoji: { fontSize: 28 },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: C.cafeNoir,
    letterSpacing: 0.2,
  },
  sub: {
    fontSize: 11,
    color: C.mossGreen,
    fontWeight: "500",
  },
});

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
const actStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(207,187,153,0.2)",
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(207,187,153,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 13,
    fontWeight: "600",
    color: C.bone,
    letterSpacing: 0.1,
  },
  date: {
    fontSize: 11,
    color: C.mossGreen,
    marginTop: 2,
  },
  pts: {
    fontSize: 13,
    fontWeight: "700",
    color: "#8BC98B",
  },
  ptsNeg: {
    color: "#C98B8B",
  },
});

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
      <StatusBar barStyle="light-content" backgroundColor={C.darkBg} />

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
              <StatPill value="12.5 kg" label="Plastic Saved"  accent={C.mossGreen} />
              <View style={styles.statSep} />
              <StatPill value="23"      label="Deposits"       accent={C.tan} />
              <View style={styles.statSep} />
              <StatPill value="4"       label="Vouchers Used"  accent="#C9A87B" />
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

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: C.darkBg,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "700",
    color: C.bone,
    letterSpacing: 0.2,
  },
  subGreeting: {
    fontSize: 12,
    color: C.mossGreen,
    marginTop: 1,
    fontWeight: "400",
  },

  heroBanner: {
    backgroundColor: C.cafeNoir,
    borderRadius: 24,
    padding: 24,
    marginBottom: 28,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
    borderWidth: 1,
    borderColor: "rgba(136,144,99,0.2)",
  },
  heroBannerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  heroLabel: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
    color: C.mossGreen,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  heroPoints: {
    fontSize: 46,
    fontWeight: "900",
    color: C.bone,
    letterSpacing: -1,
    lineHeight: 50,
  },
  heroBadge: {
    backgroundColor: "rgba(136,144,99,0.2)",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "rgba(136,144,99,0.35)",
  },
  heroBadgeText: {
    fontSize: 12,
    color: C.mossGreen,
    fontWeight: "600",
  },

  progressTrack: {
    height: 6,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 3,
    marginBottom: 6,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: C.mossGreen,
    borderRadius: 3,
  },
  progressLabel: {
    fontSize: 11,
    color: C.tan,
    opacity: 0.7,
    letterSpacing: 0.2,
  },
  heroDivider: {
    height: 1,
    backgroundColor: "rgba(207,187,153,0.12)",
    marginVertical: 16,
  },

  statsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statSep: {
    width: 1,
    height: 32,
    backgroundColor: "rgba(207,187,153,0.15)",
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: C.mossGreen,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 14,
    marginTop: 14
  },

  tileRow: {
    flexDirection: "row",
    gap: 12,
  },

  activityCard: {
    backgroundColor: C.kombuGreen,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 4,
    borderWidth: 1,
    borderColor: "rgba(136,144,99,0.2)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  viewAllBtn: {
    paddingVertical: 14,
    alignItems: "center",
  },
  viewAllText: {
    fontSize: 12,
    color: C.mossGreen,
    fontWeight: "600",
    letterSpacing: 0.5,
  },

  navWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});