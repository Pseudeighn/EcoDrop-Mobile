import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  StatusBar,
  Animated,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import BottomNavBar from "../components/BottomNavBar";
import { styles } from "../styles/ProfileStyles";

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
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.kombuGreen} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <View style={styles.heroBubble1} />
          <View style={styles.heroBubble2} />

          <View style={styles.heroTopRow}>
            <Text style={styles.heroEyebrow}>MY PROFILE</Text>
            <TouchableOpacity style={styles.editChip} onPress={() => setEditModal(true)}>
              <Text style={styles.editChipText}>✏️  Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.avatarRing}>
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=12" }}
              style={styles.avatar}
            />
            <View style={styles.onlineDot} />
          </View>

          <Text style={styles.heroName}>{name}</Text>
          <Text style={styles.heroEmail}>{email}</Text>

          <View style={styles.badgeRow}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>🌱  Eco Hero</Text>
            </View>
            <View style={styles.tierBadge}>
              <Text style={styles.tierText}>🥉  Bronze Tier II</Text>
            </View>
          </View>
        </View>

        <View style={styles.scoreCard}>
          <View style={styles.scoreCardLeft}>
            <Text style={styles.scoreLabel}>ECO SCORE</Text>
            <View style={styles.scoreNumRow}>
              <Text style={styles.scoreNum}>84</Text>
              <Text style={styles.scoreDenom}>/100</Text>
            </View>
            <Text style={styles.scoreHint}>3 more drops to Silver Tier</Text>
          </View>
          <View style={styles.scoreCardRight}>
            <View style={styles.ringOuter}>
              <View style={styles.ringInner}>
                <Text style={styles.ringPct}>84%</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.statsRow}>
          <StatCard emoji="♻️"  label="Drops"     value="128"  />
          <StatCard emoji="🌿"  label="CO₂ Saved" value="42kg" />
          <StatCard emoji="🔥"  label="Streak"    value="12d"  />
        </View>

        <Section title="Achievements">
          <Achievement icon="♻️" title="First Drop"     subtitle="Completed" color="#A2C523" />
          <Achievement icon="🌍" title="10kg CO₂ Saved" subtitle="Unlocked"  color="#5BB5A2" />
          <Achievement icon="🔥" title="7-Day Streak"   subtitle="Active"    color="#E8A838" />
        </Section>

        <Section title="Quick Actions">
          <ActionItem
            title="Redeem Rewards"
            subtitle="Use your eco points."
            onPress={() => navigation.navigate("Wallet")}
          />
          <ActionItem
            title="View Activity"
            subtitle="Track drop history."
            onPress={() => navigation.navigate("Dashboard")}
          />
        </Section>

        <Section title="Settings">
          <SettingItem label="Edit Profile" onPress={() => setEditModal(true)}    />
          <SettingItem label="Notifications" onPress={() => setNotifModal(true)}   />
          <SettingItem label="Privacy & Security" onPress={() => setPrivacyModal(true)} />
          <SettingItem label="Help Center" onPress={() => setHelpModal(true)}    />
        </Section>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.navWrapper}>
        <BottomNavBar navigation={navigation} activeScreen="Profile" />
      </View>

      <Modal visible={editModal} animationType="slide" transparent>
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
              placeholder="Your name"
              placeholderTextColor="#9CA3AF"
            />

            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="your@email.com"
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor="#9CA3AF"
            />

            <TouchableOpacity style={styles.saveButton} onPress={() => setEditModal(false)}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setEditModal(false)}>
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

    </SafeAreaView>
  );
}

function StatCard({ emoji, label, value }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statEmoji}>{emoji}</Text>
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

function Achievement({ icon, title, subtitle, color }) {
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

function ActionItem({ emoji, title, subtitle, onPress }) {
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

function SettingItem({ emoji, label, onPress }) {
  return (
    <TouchableOpacity style={styles.settingItem} onPress={onPress} activeOpacity={0.75}>
      <Text style={styles.settingEmoji}>{emoji}</Text>
      <Text style={styles.settingText}>{label}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}