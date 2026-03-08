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
} from "react-native";

export default function ProfileScreen({ navigation, route }) {
  const user = route?.params?.user || { name: "Guest", email: "" };

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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>

        <View style={styles.ecoBadge}>
          <Text style={styles.ecoBadgeText}>🌱 Eco Hero</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <StatCard label="Drops" value="128" />
        <StatCard label="CO₂ Saved" value="42kg" />
        <StatCard label="Streak" value="12 days" />
      </View>

      <Section title="Achievements">
        <Achievement text="♻️ First Drop" />
        <Achievement text="🌍 10kg CO₂ Saved" />
        <Achievement text="🔥 7-Day Streak" />
      </Section>

      <Section title="Settings">
        <SettingItem label="Edit Profile" onPress={() => setModalVisible(true)} />
        <SettingItem label="Notifications" />
        <SettingItem label="Privacy & Security" />
        <SettingItem label="Help & Support" />
      </Section>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Profile</Text>

            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Name"
            />

            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              autoCapitalize="none"
            />

            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
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

function Achievement({ text }) {
  return (
    <View style={styles.achievement}>
      <Text style={styles.achievementText}>{text}</Text>
    </View>
  );
}

function SettingItem({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <Text style={styles.settingText}>{label}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F6" },
  header: {
    backgroundColor: "#15803D",
    alignItems: "center",
    paddingVertical: 40,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  backButton: {
    position: "absolute",
    left: 16,
    top: 44,
    padding: 8,
  },
  backText: { fontSize: 24, color: "#fff" },
  avatar: { width: 104, height: 104, borderRadius: 52, borderWidth: 3, borderColor: "#fff", marginBottom: 12 },
  name: { fontSize: 22, fontWeight: "700", color: "#fff" },
  email: { fontSize: 14, color: "#DCFCE7", marginTop: 4 },
  ecoBadge: { marginTop: 12, backgroundColor: "#22C55E", paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20 },
  ecoBadgeText: { color: "#fff", fontSize: 12, fontWeight: "600" },
  statsRow: { flexDirection: "row", justifyContent: "space-between", marginTop: -28, marginHorizontal: 16 },
  statCard: { flex: 1, backgroundColor: "#fff", marginHorizontal: 6, paddingVertical: 18, borderRadius: 16, alignItems: "center", elevation: 2 },
  statValue: { fontSize: 18, fontWeight: "700", color: "#15803D" },
  statLabel: { fontSize: 12, marginTop: 4, color: "#6B7280" },
  section: { marginTop: 28, marginHorizontal: 16 },
  sectionTitle: { fontSize: 16, fontWeight: "700", marginBottom: 12, color: "#111827" },
  achievement: { backgroundColor: "#ECFDF5", padding: 14, borderRadius: 12, marginBottom: 8 },
  achievementText: { fontSize: 14, color: "#065F46", fontWeight: "600" },
  settingItem: { backgroundColor: "#fff", padding: 16, borderRadius: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  settingText: { fontSize: 14, color: "#111827", fontWeight: "500" },
  arrow: { fontSize: 18, color: "#9CA3AF" },
  logoutButton: { marginTop: 24, marginHorizontal: 16, paddingVertical: 14, alignItems: "center" },
  logoutText: { color: "#DC2626", fontSize: 15, fontWeight: "600" },
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.45)", justifyContent: "center", padding: 24 },
  modalContent: { backgroundColor: "#fff", borderRadius: 20, padding: 20 },
  modalTitle: { fontSize: 18, fontWeight: "700", marginBottom: 16, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#E5E7EB", borderRadius: 12, padding: 14, marginBottom: 12, backgroundColor: "#F9FAFB" },
  saveButton: { backgroundColor: "#15803D", paddingVertical: 14, borderRadius: 12, alignItems: "center", marginTop: 4 },
  saveButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  cancelText: { textAlign: "center", marginTop: 12, color: "#6B7280" },
});
