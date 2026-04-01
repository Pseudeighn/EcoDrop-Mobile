import { StyleSheet } from "react-native";

export const getStyles = (theme) => StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.background },
  contentContainer: { paddingBottom: 40 },
  
  hero: {
    backgroundColor: theme.cardSecondary,
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 40,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    borderWidth: 1,
    borderColor: theme.border,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  headerBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    position: "absolute",
    top: 50,
  },
  iconButton: { padding: 8 },
  headerIcon: { fontSize: 24, color: theme.text },
  actionButton: { padding: 8 },
  actionText: { fontSize: 16, color: theme.primary, fontWeight: "600" },
  
  avatarBorder: {
    width: 110, height: 110, borderRadius: 55,
    borderWidth: 3, borderColor: theme.primary,
    marginBottom: 12, justifyContent: "center", alignItems: "center",
    backgroundColor: theme.background,
  },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  name: { fontSize: 24, fontWeight: "800", color: theme.text },
  email: { fontSize: 14, color: theme.textMuted, marginTop: 4 },
  
  badgeRow: { flexDirection: "row", gap: 10, marginTop: 16 },
  badge: { 
    backgroundColor: theme.transparentMoss, paddingHorizontal: 14, paddingVertical: 6, 
    borderRadius: 20, borderWidth: 1, borderColor: theme.border 
  },
  badgeText: { color: theme.primary, fontSize: 12, fontWeight: "700" },
  tierTag: { 
    backgroundColor: theme.background, paddingHorizontal: 14, paddingVertical: 6, 
    borderRadius: 20, borderWidth: 1, borderColor: theme.border 
  },
  tierText: { color: theme.textMuted, fontSize: 12, fontWeight: "600" },
  
  scoreCard: {
    marginHorizontal: 20, marginTop: -20,
    backgroundColor: theme.cardPrimary,
    borderRadius: 20, padding: 20,
    borderWidth: 1, borderColor: theme.border,
    elevation: 5, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8,
  },
  cardTitle: { fontSize: 12, fontWeight: "800", color: theme.primary, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 },
  scoreRow: { flexDirection: "row", alignItems: "baseline" },
  scoreValue: { fontSize: 42, fontWeight: "900", color: theme.text },
  scoreSuffix: { fontSize: 16, fontWeight: "600", color: theme.textMuted, marginLeft: 4 },
  cardSubtitle: { fontSize: 13, color: theme.textMuted, marginTop: 8, marginBottom: 16, lineHeight: 18 },
  progressBar: { height: 8, backgroundColor: theme.border, borderRadius: 4, overflow: "hidden" },
  progressFill: { height: "100%", backgroundColor: theme.primary, borderRadius: 4 },

  statsRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginHorizontal: 20, gap: 12 },
  statCard: { 
    flex: 1, backgroundColor: theme.cardSecondary, paddingVertical: 18, 
    borderRadius: 16, alignItems: "center", borderWidth: 1, borderColor: theme.border 
  },
  statValue: { fontSize: 18, fontWeight: "800", color: theme.text },
  statLabel: { fontSize: 11, marginTop: 4, color: theme.textMuted, fontWeight: "600", textTransform: "uppercase" },
  
  section: { marginTop: 28, marginHorizontal: 20 },
  sectionTitle: { fontSize: 13, fontWeight: "800", marginBottom: 12, color: theme.primary, textTransform: "uppercase", letterSpacing: 1 },
  
  achievement: { 
    flexDirection: "row", alignItems: "center", backgroundColor: theme.cardSecondary, 
    padding: 14, borderRadius: 16, marginBottom: 10, borderWidth: 1, borderColor: theme.border 
  },
  achievementIcon: { fontSize: 24, marginRight: 14 },
  achievementTextWrapper: { flex: 1 },
  achievementTitle: { fontSize: 15, color: theme.text, fontWeight: "700" },
  achievementSubtitle: { fontSize: 13, color: theme.textMuted, marginTop: 2 },
  
  actionItem: { 
    flexDirection: "row", justifyContent: "space-between", alignItems: "center", 
    backgroundColor: theme.cardSecondary, padding: 16, borderRadius: 16, marginBottom: 10, 
    borderWidth: 1, borderColor: theme.border 
  },
  actionTitle: { fontSize: 15, color: theme.text, fontWeight: "700" },
  actionSubtitle: { fontSize: 13, color: theme.textMuted, marginTop: 2 },

  settingItem: { 
    backgroundColor: theme.cardSecondary, padding: 16, borderRadius: 16, 
    flexDirection: "row", justifyContent: "space-between", alignItems: "center", 
    marginBottom: 10, borderWidth: 1, borderColor: theme.border 
  },
  settingText: { fontSize: 15, color: theme.text, fontWeight: "600" },
  arrow: { fontSize: 20, color: theme.textMuted },
  
  logoutButton: { marginTop: 30, marginHorizontal: 20, paddingVertical: 16, borderRadius: 16, backgroundColor: theme.dangerBg, alignItems: "center", borderWidth: 1, borderColor: theme.danger },
  logoutText: { color: theme.danger, fontSize: 16, fontWeight: "700" },
  
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.6)", justifyContent: "center", padding: 24 },
  modalContent: { backgroundColor: theme.modalBg, borderRadius: 24, padding: 24, borderWidth: 1, borderColor: theme.border },
  modalTitle: { fontSize: 20, fontWeight: "800", marginBottom: 20, textAlign: "center", color: theme.text },
  input: { 
    borderWidth: 1, borderColor: theme.border, borderRadius: 12, padding: 16, 
    marginBottom: 14, backgroundColor: theme.background, color: theme.text, fontSize: 15 
  },
  saveButton: { backgroundColor: theme.primary, paddingVertical: 16, borderRadius: 12, alignItems: "center", marginTop: 8 },
  saveButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" },
  cancelButton: { paddingVertical: 14, marginTop: 8 },
  cancelText: { textAlign: "center", color: theme.textMuted, fontSize: 15, fontWeight: "600" },
});