import React, { useState, useContext } from "react";
import {
  View, Text, Image, TouchableOpacity, ScrollView, Modal, TextInput, StatusBar, Switch
} from "react-native";

// 1. Import Theme Context and Dynamic Styles
import { ThemeContext } from "../context/ThemeContext";
import { getStyles } from "../styles/ProfileStyles";

export default function ProfileScreen({ navigation, route }) {
  // 2. Consume Context and generate styles
  const { theme, isDarkMode, toggleTheme } = useContext(ThemeContext);
  const styles = getStyles(theme);

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
      <StatusBar 
        barStyle={isDarkMode ? "light-content" : "dark-content"} 
        backgroundColor={theme.cardSecondary} 
      />

      <View style={styles.hero}>
        <View style={styles.headerBar}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
            <Text style={styles.headerIcon}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.actionText}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.avatarBorder}>
          <Image source={{ uri: "https://i.pravatar.cc/150?img=12" }} style={styles.avatar} />
        </View>

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email || "guest@ecodrop.app"}</Text>

        <View style={styles.badgeRow}>
          <View style={styles.badge}><Text style={styles.badgeText}>🌱 Eco Hero</Text></View>
          <View style={styles.tierTag}><Text style={styles.tierText}>Bronze Tier</Text></View>
        </View>
      </View>

      <View style={styles.scoreCard}>
        <Text style={styles.cardTitle}>Eco score</Text>
        <View style={styles.scoreRow}>
          <Text style={styles.scoreValue}>84</Text>
          <Text style={styles.scoreSuffix}>/100</Text>
        </View>
        <Text style={styles.cardSubtitle}>Keep up the momentum — 3 more drops to reach Silver Tier.</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "84%" }]} />
        </View>
      </View>

      <View style={styles.statsRow}>
        <StatCard label="Drops" value="128" styles={styles} />
        <StatCard label="CO₂ Saved" value="42kg" styles={styles} />
        <StatCard label="Streak" value="12d" styles={styles} />
      </View>

      <Section title="Achievements" styles={styles}>
        <Achievement icon="♻️" title="First Drop" subtitle="Completed" styles={styles} />
        <Achievement icon="🌍" title="10kg CO₂ Saved" subtitle="Unlocked" styles={styles} />
        <Achievement icon="🔥" title="7-Day Streak" subtitle="Active" styles={styles} />
      </Section>

      <Section title="Quick actions" styles={styles}>
        <ActionItem title="Redeem rewards" subtitle="Use your eco points" styles={styles} />
        <ActionItem title="View activity" subtitle="Track drop history" styles={styles} />
      </Section>

      <Section title="Settings" styles={styles}>
        <SettingItem label="Edit Profile" onPress={() => setModalVisible(true)} styles={styles} />
        
        {/* Appearance Toggle! */}
        <SettingItem 
          label="Dark Mode" 
          onPress={toggleTheme} 
          styles={styles} 
          rightElement={
            <Switch 
              value={isDarkMode} 
              onValueChange={toggleTheme} 
              trackColor={{ false: theme.border, true: theme.primary }}
              thumbColor={theme.cardPrimary}
            />
          }
        />
        
        <SettingItem label="Notifications" styles={styles} />
        <SettingItem label="Privacy & Security" styles={styles} />
      </Section>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Edit Profile Modal */}
      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit profile</Text>

            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Name"
              placeholderTextColor={theme.textMuted}
            />

            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor={theme.textMuted}
            />

            <TouchableOpacity style={styles.saveButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.saveButtonText}>Save changes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

// 3. Update helper components to accept the 'styles' prop
function StatCard({ label, value, styles }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Section({ title, children, styles }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Achievement({ icon, title, subtitle, styles }) {
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

function ActionItem({ title, subtitle, styles }) {
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

function SettingItem({ label, onPress = () => {}, rightElement, styles }) {
  return (
    <TouchableOpacity style={styles.settingItem} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.settingText}>{label}</Text>
      {rightElement ? rightElement : <Text style={styles.arrow}>›</Text>}
    </TouchableOpacity>
  );
}