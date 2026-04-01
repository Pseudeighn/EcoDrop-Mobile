import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  StatusBar,
} from "react-native";
import { COLORS } from "../constants/theme";

export default function ProfileScreen({ navigation, route }) {
  const user = route?.params?.user || { name: "Guest", email: "guest@ecodrop.app" };
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "SignIn" }],
    });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar barStyle="light-content" backgroundColor={COLORS.kombuGreen} />

      <View style={styles.hero}>
        <View style={styles.headerBar}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.headerIcon}>←</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.actionText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.avatarBorder}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=12" }}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email || "guest@ecodrop.app"}</Text>

        <View style={styles.badgeRow}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>🌱 Eco Hero</Text>
          </View>
          <View style={styles.tierTag}>
            <Text style={styles.tierText}>Bronze Tier</Text>
          </View>
        </View>
      </View>

      <View style={styles.scoreCard}>
        <Text style={styles.cardTitle}>Eco score</Text>
        <View style={styles.scoreRow}>
          <Text style={styles.scoreValue}>84</Text>
          <Text style={styles.scoreSuffix}>/100</Text>
        </View>
        <Text style={styles.cardSubtitle}>
          Keep up the momentum — 3 more drops to reach Silver Tier.
        </Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "84%" }]} />
        </View>
      </View>

      <View style={styles.statsRow}>
        <StatCard label="Drops" value="128" />
        <StatCard label="CO₂ Saved" value="42kg" />
        <StatCard label="Streak" value="12d" />
      </View>

      <Section title="Achievements">
        <Achievement icon="♻️" title="First Drop" subtitle="Completed" />
        <Achievement icon="🌍" title="10kg CO₂ Saved" subtitle="Unlocked" />
        <Achievement icon="🔥" title="7-Day Streak" subtitle="Active" />
      </Section>

      <Section title="Quick actions">
        <ActionItem title="Redeem rewards" subtitle="Use your eco points" />
        <ActionItem title="View activity" subtitle="Track drop history" />
      </Section>

      <Section title="Settings">
        <SettingItem label="Edit Profile" onPress={() => setModalVisible(true)} />
        <SettingItem label="Notifications" />
        <SettingItem label="Privacy & Security" />
        <SettingItem label="Help Center" />
      </Section>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit profile</Text>

            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Name"
              placeholderTextColor="#9CA3AF"
            />

            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor="#9CA3AF"
            />

            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.saveButtonText}>Save changes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

function StatCard({ label, value }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Achievement({ icon, title, subtitle }) {
  return (
    <View style={styles.achievement}>
      <Text style={styles.achievementIcon}>{icon}</Text>
      <View style={styles.achievementTextWrapper}>
        <Text style={styles.achievementTitle}>{title}</Text>
        <Text style={styles.achievementSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

function ActionItem({ title, subtitle }) {
  return (
    <View style={styles.actionItem}>
      <View>
        <Text style={styles.actionTitle}>{title}</Text>
        <Text style={styles.actionSubtitle}>{subtitle}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </View>
  );
}

function SettingItem({ label, onPress = () => {} }) {
  return (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <Text style={styles.settingText}>{label}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.cream },
  contentContainer: { paddingBottom: 32 },
  hero: {
    backgroundColor: COLORS.kombuGreen,
    paddingTop: 52,
    paddingBottom: 28,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    alignItems: "center",
  },
  headerBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.18)",
    alignItems: "center",
    justifyContent: "center",
  },
  headerIcon: { color: COLORS.bone, fontSize: 20 },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255,255,255,0.18)",
    borderRadius: 14,
  },
  actionText: { color: COLORS.bone, fontSize: 14, fontWeight: "700" },
  avatarBorder: {
    width: 114,
    height: 114,
    borderRadius: 57,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.32)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: { color: COLORS.bone, fontSize: 24, fontWeight: "800" },
  email: { color: "rgba(229,215,196,0.9)", fontSize: 13, marginTop: 4 },
  badgeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  badge: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    marginRight: 10,
  },
  badgeText: { color: COLORS.kombuGreen, fontWeight: "700", fontSize: 12 },
  tierTag: {
    backgroundColor: "rgba(255,255,255,0.18)",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
  },
  tierText: { color: COLORS.bone, fontWeight: "600", fontSize: 12 },
  scoreCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginTop: -28,
    borderRadius: 24,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  cardTitle: { fontSize: 14, fontWeight: "700", color: COLORS.kombuGreen, textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 },
  scoreRow: { flexDirection: "row", alignItems: "flex-end", marginBottom: 10 },
  scoreValue: { fontSize: 40, fontWeight: "900", color: COLORS.cafeNoir },
  scoreSuffix: { fontSize: 16, color: COLORS.mossGreen, marginLeft: 8, marginBottom: 6 },
  cardSubtitle: { fontSize: 13, color: "#6B7280", lineHeight: 20 },
  progressBar: {
    height: 10,
    backgroundColor: "#E5E7EB",
    borderRadius: 999,
    marginTop: 16,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: COLORS.kombuGreen,
    borderRadius: 999,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginHorizontal: 6,
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  statValue: { fontSize: 18, fontWeight: "800", color: COLORS.kombuGreen },
  statLabel: { fontSize: 12, marginTop: 6, color: "#6B7280" },
  section: { marginTop: 28, marginHorizontal: 20 },
  sectionTitle: { fontSize: 16, fontWeight: "800", marginBottom: 14, color: COLORS.cafeNoir },
  achievement: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECFDF5",
    borderRadius: 18,
    padding: 16,
    marginBottom: 10,
  },
  achievementIcon: { fontSize: 20, marginRight: 12 },
  achievementTextWrapper: { flex: 1 },
  achievementTitle: { fontSize: 14, fontWeight: "700", color: COLORS.cafeNoir },
  achievementSubtitle: { fontSize: 12, color: COLORS.mossGreen, marginTop: 4 },
  actionItem: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  actionTitle: { fontSize: 14, fontWeight: "700", color: COLORS.cafeNoir },
  actionSubtitle: { fontSize: 12, color: "#6B7280", marginTop: 4 },
  settingItem: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  settingText: { fontSize: 14, color: COLORS.cafeNoir, fontWeight: "600" },
  arrow: { fontSize: 20, color: "#9CA3AF" },
  logoutButton: {
    marginTop: 18,
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    backgroundColor: "#FEF2F2",
  },
  logoutText: { color: "#B91C1C", fontSize: 15, fontWeight: "700" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    padding: 24,
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 22,
  },
  modalTitle: { fontSize: 18, fontWeight: "800", marginBottom: 18, textAlign: "center", color: COLORS.cafeNoir },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    backgroundColor: "#F9FAFB",
    color: COLORS.cafeNoir,
  },
  saveButton: {
    backgroundColor: COLORS.kombuGreen,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 4,
  },
  saveButtonText: { color: COLORS.white, fontSize: 15, fontWeight: "700" },
  cancelButton: { marginTop: 14, alignItems: "center" },
  cancelText: { color: "#6B7280", fontSize: 14 },
});
