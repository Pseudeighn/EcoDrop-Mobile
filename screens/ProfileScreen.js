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
import { styles } from "../styles/ProfileStyles";

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
