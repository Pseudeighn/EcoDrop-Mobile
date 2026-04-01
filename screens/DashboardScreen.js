import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  Animated,
  Dimensions,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavBar from "../components/BottomNavBar";
import { COLORS } from "../constants/theme";
import { styles, statStyles, tileStyles, actStyles } from "../styles/DashboardStyles";

const { width } = Dimensions.get("window");

function StatPill({ value, label, accent }) {
  return (
    <View style={statStyles.pill}>
      <Text style={[statStyles.value, { color: accent }]}>{value}</Text>
      <Text style={statStyles.label}>{label}</Text>
    </View>
  );
}

function ActionTile({ emoji, label, sub, onPress, variant = "light" }) {
  const scale = useRef(new Animated.Value(1)).current;

  const press = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 0.93, duration: 70, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, duration: 130, useNativeDriver: true }),
    ]).start();
    onPress?.();
  };

  return (
    <Pressable onPress={press} style={{ flex: 1 }}>
      <Animated.View style={[tileStyles.tile, tileStyles[variant], { transform: [{ scale }] }]}>
        <Text style={tileStyles.emoji}>{emoji}</Text>
        <Text style={[tileStyles.label, tileStyles[`label_${variant}`]]}>{label}</Text>
        <Text style={[tileStyles.sub, tileStyles[`sub_${variant}`]]}>{sub}</Text>
      </Animated.View>
    </Pressable>
  );
}

function ActivityRow({ emoji, title, date, points, negative }) {
  return (
    <View style={actStyles.row}>
      <View style={[actStyles.iconBox, negative && actStyles.iconBoxNeg]}>
        <Text style={{ fontSize: 18 }}>{emoji}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={actStyles.title}>{title}</Text>
        <Text style={actStyles.date}>{date}</Text>
      </View>
      <View style={[actStyles.ptsBadge, negative && actStyles.ptsBadgeNeg]}>
        <Text style={[actStyles.pts, negative && actStyles.ptsNeg]}>{points}</Text>
      </View>
    </View>
  );
}

export default function DashboardScreen({ route, navigation }) {
  const userName = route?.params?.user?.name || "Eco-Warrior";

  const fadeHeader = useRef(new Animated.Value(0)).current;
  const slideHero = useRef(new Animated.Value(30)).current;
  const fadeHero = useRef(new Animated.Value(0)).current;
  const fadeCards = useRef(new Animated.Value(0)).current;
  const fadeList = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(100, [
      Animated.timing(fadeHeader, { toValue: 1, duration: 350, useNativeDriver: true }),
      Animated.parallel([
        Animated.timing(fadeHero, { toValue: 1, duration: 450, useNativeDriver: true }),
        Animated.timing(slideHero, { toValue: 0, duration: 450, useNativeDriver: true }),
      ]),
      Animated.timing(fadeCards, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(fadeList, { toValue: 1, duration: 400, useNativeDriver: true }),
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
              <Text style={styles.greeting}>Hey, {userName} 👋</Text>
              <Text style={styles.subGreeting}>Ready to make an impact?</Text>
            </View>
          </View>
          <View style={styles.bellBox}>
            <Text style={styles.bellIcon}>🔔</Text>
            <View style={styles.bellDot} />
          </View>
        </Animated.View>

        <Animated.View style={{ opacity: fadeHero, transform: [{ translateY: slideHero }] }}>
          <Pressable style={styles.heroBanner} onPress={() => navigation.navigate("Wallet")}>
            <Text style={styles.heroWatermark}>1,250</Text>

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
            <Text style={styles.progressLabel}>750 pts to Silver · 62.5%</Text>

            <View style={styles.heroDivider} />

            <View style={styles.statsRow}>
              <StatPill value="12.5kg" label="Plastic Saved" accent="#A2C523" />
              <View style={styles.statSep} />
              <StatPill value="23" label="Deposits" accent={COLORS.bone} />
              <View style={styles.statSep} />
              <StatPill value="4" label="Redeemed" accent={COLORS.tan} />
            </View>
          </Pressable>
        </Animated.View>

        <Animated.View style={{ opacity: fadeCards }}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <View style={styles.tileRow}>
            <ActionTile
              emoji="📷"
              label="Scan & Deposit"
              sub="Open QR Scanner"
              variant="lime"
              onPress={() => navigation.navigate("QRScreen")}
            />
            <ActionTile
              emoji="🗺️"
              label="Find a Bin"
              sub="Locate Drop-Off"
              variant="dark"
              onPress={() => navigation.navigate("EcoMap")}
            />
          </View>

          <View style={[styles.tileRow, { marginTop: 10 }]}>
            <ActionTile
              emoji="🎁"
              label="Redeem"
              sub="Use Your Points"
              variant="bone"
              onPress={() => navigation.navigate("Wallet")}
            />
            <ActionTile
              emoji="👤"
              label="Profile"
              sub="View and Edit Info"
              variant="moss"
              onPress={() => navigation.navigate("Profile")}
            />
          </View>
        </Animated.View>

        <Animated.View style={{ opacity: fadeCards }}>
          <View style={styles.tipCard}>
            <Text style={styles.tipIcon}>💡</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.tipTitle}>Today's Eco Tip</Text>
              <Text style={styles.tipBody}>
                Drying plastic before recycling prevents contamination and doubles their recycling value.
              </Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View style={{ opacity: fadeList }}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityCard}>
            <ActivityRow emoji="♻️" title="Deposited Plastic Bottle" date="Feb 10 · 2:30 PM" points="+10 pts" />
            <ActivityRow emoji="🎟️" title="Redeemed Coffee Voucher" date="Feb 08 · 9:15 AM" points="−50 pts" negative />
            <ActivityRow emoji="♻️" title="Deposited Cardboard" date="Feb 06 · 4:00 PM" points="+15 pts" />
            <Pressable style={styles.viewAllBtn} onPress={() => navigation.navigate("Wallet")}>
              <Text style={styles.viewAllText}>View all activity →</Text>
            </Pressable>
          </View>
        </Animated.View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.navWrapper}>
        <BottomNavBar navigation={navigation} activeScreen="Dashboard" />
      </View>
    </SafeAreaView>
  );
}