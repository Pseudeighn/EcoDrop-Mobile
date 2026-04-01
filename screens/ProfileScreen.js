import React, { useState, useContext } from "react";
import {
  View, Text, Image, TouchableOpacity, ScrollView, Modal, TextInput, StatusBar, Switch
} from "react-native";

// 1. Import Theme Context and Dynamic Styles
import { ThemeContext } from "../context/ThemeContext";
import { getStyles } from "../styles/ProfileStyles";

function InfoModal({ visible, onClose, title, children }) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHandle} />
          <Text style={styles.modalTitle}>{title}</Text>
          {children}
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

function ToggleRow({ label, sublabel, value, onToggle }) {
  return (
    <View style={styles.toggleRow}>
      <View style={{ flex: 1 }}>
        <Text style={styles.toggleLabel}>{label}</Text>
        {sublabel ? <Text style={styles.toggleSublabel}>{sublabel}</Text> : null}
      </View>
      <TouchableOpacity
        style={[styles.toggleTrack, value && styles.toggleTrackOn]}
        onPress={onToggle}
        activeOpacity={0.8}
      >
        <View style={[styles.toggleThumb, value && styles.toggleThumbOn]} />
      </TouchableOpacity>
    </View>
  );
}

export default function ProfileScreen({ navigation, route }) {
  // 2. Consume Context and generate styles
  const { theme, isDarkMode, toggleTheme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  const user = route?.params?.user || { name: "Guest", email: "guest@ecodrop.app" };

  const [name,  setName]  = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const [editModal,     setEditModal]     = useState(false);
  const [notifModal,    setNotifModal]    = useState(false);
  const [privacyModal,  setPrivacyModal]  = useState(false);
  const [helpModal,     setHelpModal]     = useState(false);

  const [pushNotif,   setPushNotif]   = useState(true);
  const [dropAlerts,  setDropAlerts]  = useState(true);
  const [weeklyReport,setWeeklyReport]= useState(false);
  const [promoNotif,  setPromoNotif]  = useState(false);

  const handleLogout = () => {
    navigation.reset({ index: 0, routes: [{ name: "SignIn" }] });
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

        <Section title="Settings">
          <SettingItem label="Edit Profile" onPress={() => setEditModal(true)}    />
          <SettingItem label="Notifications" onPress={() => setNotifModal(true)}   />
          <SettingItem label="Privacy & Security" onPress={() => setPrivacyModal(true)} />
          <SettingItem label="Help Center" onPress={() => setHelpModal(true)}    />
        </Section>

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
            <View style={styles.modalHandle} />
            <Text style={styles.modalTitle}>Edit Profile</Text>
            <Text style={styles.modalSub}>Update your display name and email address.</Text>

            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Name"
              placeholderTextColor={theme.textMuted}
            />

            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="your@email.com"
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

      <InfoModal visible={notifModal} onClose={() => setNotifModal(false)} title="Notifications">
        <Text style={styles.modalSub}>Choose what updates you'd like to receive.</Text>
        <ToggleRow
          label="Push Notifications"
          sublabel="Receive alerts on your device."
          value={pushNotif}
          onToggle={() => setPushNotif(v => !v)}
        />
        <ToggleRow
          label="Drop Alerts"
          sublabel="Notify when a nearby bin is available."
          value={dropAlerts}
          onToggle={() => setDropAlerts(v => !v)}
        />
        <ToggleRow
          label="Weekly Report"
          sublabel="Summary of your eco impact."
          value={weeklyReport}
          onToggle={() => setWeeklyReport(v => !v)}
        />
        <ToggleRow
          label="Promotions"
          sublabel="Deals and reward announcements."
          value={promoNotif}
          onToggle={() => setPromoNotif(v => !v)}
        />
      </InfoModal>

      <InfoModal visible={privacyModal} onClose={() => setPrivacyModal(false)} title="Privacy & Security">
        <Text style={styles.modalSub}>Your data is protected and never sold.</Text>

        <View style={styles.privacyItem}>
          <Text style={styles.privacyIcon}>🔐</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.privacyTitle}>Data Encryption</Text>
            <Text style={styles.privacySub}>All your data is encrypted end-to-end.</Text>
          </View>
        </View>
        <View style={styles.privacyItem}>
          <Text style={styles.privacyIcon}>📍</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.privacyTitle}>Location Access</Text>
            <Text style={styles.privacySub}>Used only to find nearby EcoDrop bins.</Text>
          </View>
        </View>
        <View style={styles.privacyItem}>
          <Text style={styles.privacyIcon}>🗑️</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.privacyTitle}>Delete Account</Text>
            <Text style={styles.privacySub}>Permanently remove your data.</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.dangerButton}>
          <Text style={styles.dangerText}>Request Account Deletion</Text>
        </TouchableOpacity>
      </InfoModal>

      <InfoModal visible={helpModal} onClose={() => setHelpModal(false)} title="Help Center">
        <Text style={styles.modalSub}>Find answers and get in touch with us.</Text>

        <View style={styles.helpItem}>
          <Text style={styles.helpQ}>How do I earn eco points?</Text>
          <Text style={styles.helpA}>Scan the QR code at any EcoDrop bin after depositing recyclables to earn points automatically.</Text>
        </View>
        <View style={styles.helpItem}>
          <Text style={styles.helpQ}>How do I redeem rewards?</Text>
          <Text style={styles.helpA}>Go to your Eco-Wallet and choose any available reward. Points are deducted instantly.</Text>
        </View>
        <View style={styles.helpItem}>
          <Text style={styles.helpQ}>What items are accepted?</Text>
          <Text style={styles.helpA}>Any types of plastic mailers and bubble wraps. Check the bin label for specifics.</Text>
        </View>

        <View style={styles.helpDivider} />
        <Text style={styles.helpContact}>Still need help? Contact us at</Text>
        <Text style={styles.helpEmail}>support@ecodrop.app</Text>
      </InfoModal>

    </ScrollView>
  );
}

// 3. Update helper components to accept the 'styles' prop
function StatCard({ label, value, styles }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statEmoji}>{emoji}</Text>
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
      <View style={[styles.achievementIconBox, { backgroundColor: color + "22" }]}>
        <Text style={styles.achievementIcon}>{icon}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.achievementTitle}>{title}</Text>
        <Text style={styles.achievementSubtitle}>{subtitle}</Text>
      </View>
      <View style={[styles.achievementDot, { backgroundColor: color }]} />
    </View>
  );
}

function ActionItem({ title, subtitle, styles }) {
  return (
    <TouchableOpacity style={styles.actionItem} onPress={onPress} activeOpacity={0.75}>
      <Text style={styles.actionEmoji}>{emoji}</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.actionTitle}>{title}</Text>
        <Text style={styles.actionSubtitle}>{subtitle}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
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