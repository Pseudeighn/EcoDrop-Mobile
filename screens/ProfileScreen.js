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
import { styles } from "../styles/ProfileStyles";

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