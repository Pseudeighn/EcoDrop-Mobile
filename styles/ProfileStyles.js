import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../constants/theme";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({

  safe: { flex: 1, backgroundColor: COLORS.darkBg },
  scroll: { flex: 1 },
  scrollContent: { paddingBottom: 24 },
  navWrapper: { position: "absolute", bottom: 0, left: 0, right: 0 },

  hero: {
    backgroundColor: COLORS.kombuGreen,
    paddingTop: 20,
    paddingBottom: 32,
    paddingHorizontal: 24,
    alignItems: "center",
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(136,144,99,0.25)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 12,
  },
  heroBubble1: {
    position: "absolute", width: 180, height: 180,
    borderRadius: 90, backgroundColor: "rgba(136,144,99,0.08)",
    top: -60, right: -40,
  },
  heroBubble2: {
    position: "absolute", width: 120, height: 120,
    borderRadius: 60, backgroundColor: "rgba(136,144,99,0.06)",
    bottom: -30, left: -20,
  },
  heroTopRow: {
    width: "100%", flexDirection: "row",
    justifyContent: "space-between", alignItems: "center",
    marginBottom: 20,
  },
  heroEyebrow: {
    fontSize: 11, fontWeight: "800", letterSpacing: 3,
    color: COLORS.mossGreen, textTransform: "uppercase",
  },
  editChip: {
    backgroundColor: "rgba(136,144,99,0.18)",
    paddingHorizontal: 14, paddingVertical: 6,
    borderRadius: 20, borderWidth: 1,
    borderColor: "rgba(136,144,99,0.35)",
  },
  editChipText: { fontSize: 12, color: COLORS.bone, fontWeight: "600" },

  avatarRing: {
    width: 108, height: 108, borderRadius: 54,
    borderWidth: 3, borderColor: COLORS.mossGreen,
    alignItems: "center", justifyContent: "center",
    marginBottom: 14,
    shadowColor: COLORS.mossGreen,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4, shadowRadius: 12,
  },
  avatar: { width: 98, height: 98, borderRadius: 49 },
  onlineDot: {
    position: "absolute", bottom: 6, right: 6,
    width: 14, height: 14, borderRadius: 7,
    backgroundColor: "#A2C523",
    borderWidth: 2, borderColor: COLORS.kombuGreen,
  },

  heroName: {
    fontSize: 24, fontWeight: "800",
    color: COLORS.bone, letterSpacing: 0.3, marginBottom: 4,
  },
  heroEmail: {
    fontSize: 13, color: COLORS.tan, opacity: 0.75, marginBottom: 16,
  },
  badgeRow: { flexDirection: "row", gap: 10 },
  badge: {
    backgroundColor: "rgba(162,197,35,0.15)",
    paddingHorizontal: 14, paddingVertical: 6,
    borderRadius: 20, borderWidth: 1,
    borderColor: "rgba(162,197,35,0.35)",
  },
  badgeText: { fontSize: 12, color: "#A2C523", fontWeight: "700" },
  tierBadge: {
    backgroundColor: "rgba(207,187,153,0.12)",
    paddingHorizontal: 14, paddingVertical: 6,
    borderRadius: 20, borderWidth: 1,
    borderColor: "rgba(207,187,153,0.25)",
  },
  tierText: { fontSize: 12, color: COLORS.tan, fontWeight: "600" },

  scoreCard: {
    marginHorizontal: 20, marginTop: 20,
    backgroundColor: COLORS.cafeNoir,
    borderRadius: 24, padding: 22,
    flexDirection: "row", alignItems: "center",
    borderWidth: 1, borderColor: "rgba(136,144,99,0.2)",
    shadowColor: "#000", shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3, shadowRadius: 12, elevation: 8,
  },
  scoreCardLeft: { flex: 1 },
  scoreLabel: {
    fontSize: 10, fontWeight: "800", letterSpacing: 2.5,
    color: COLORS.mossGreen, textTransform: "uppercase", marginBottom: 6,
  },
  scoreNumRow: { flexDirection: "row", alignItems: "flex-end", marginBottom: 6 },
  scoreNum: { fontSize: 48, fontWeight: "900", color: COLORS.bone, lineHeight: 52 },
  scoreDenom: { fontSize: 18, color: COLORS.tan, opacity: 0.6, marginBottom: 8, marginLeft: 4 },
  scoreHint: { fontSize: 12, color: COLORS.mossGreen, opacity: 0.85, lineHeight: 17 },
  scoreCardRight: { paddingLeft: 16 },
  ringOuter: {
    width: 76, height: 76, borderRadius: 38,
    borderWidth: 6, borderColor: COLORS.mossGreen,
    alignItems: "center", justifyContent: "center",
    opacity: 0.9,
  },
  ringInner: {
    width: 58, height: 58, borderRadius: 29,
    borderWidth: 3, borderColor: "rgba(136,144,99,0.3)",
    alignItems: "center", justifyContent: "center",
  },
  ringPct: { fontSize: 14, fontWeight: "800", color: COLORS.bone },

  statsRow: {
    flexDirection: "row", marginHorizontal: 20,
    marginTop: 14, gap: 10,
  },
  statCard: {
    flex: 1, backgroundColor: COLORS.kombuGreen,
    borderRadius: 18, paddingVertical: 16,
    alignItems: "center",
    borderWidth: 1, borderColor: "rgba(136,144,99,0.2)",
    shadowColor: "#000", shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2, shadowRadius: 6, elevation: 4,
  },
  statEmoji: { fontSize: 20, marginBottom: 6 },
  statValue: { fontSize: 17, fontWeight: "800", color: COLORS.bone },
  statLabel: { fontSize: 11, color: COLORS.mossGreen, marginTop: 3, fontWeight: "500" },

  section: { marginTop: 28, marginHorizontal: 20 },
  sectionTitle: {
    fontSize: 11, fontWeight: "800", color: COLORS.mossGreen,
    textTransform: "uppercase", letterSpacing: 2.5, marginBottom: 12,
  },

  achievement: {
    flexDirection: "row", alignItems: "center", gap: 14,
    backgroundColor: COLORS.kombuGreen,
    borderRadius: 16, padding: 14, marginBottom: 8,
    borderWidth: 1, borderColor: "rgba(136,144,99,0.18)",
  },
  achievementIconBox: {
    width: 42, height: 42, borderRadius: 12,
    alignItems: "center", justifyContent: "center",
  },
  achievementIcon: { fontSize: 20 },
  achievementTitle: { fontSize: 14, fontWeight: "700", color: COLORS.bone, marginBottom: 2 },
  achievementSubtitle: { fontSize: 12, color: COLORS.mossGreen },
  achievementDot: { width: 8, height: 8, borderRadius: 4 },

  actionItem: {
    flexDirection: "row", alignItems: "center", gap: 14,
    backgroundColor: COLORS.cafeNoir,
    borderRadius: 16, padding: 16, marginBottom: 8,
    borderWidth: 1, borderColor: "rgba(136,144,99,0.18)",
  },
  actionEmoji: { fontSize: 22 },
  actionTitle: { fontSize: 14, fontWeight: "700", color: COLORS.bone, marginBottom: 2 },
  actionSubtitle: { fontSize: 12, color: COLORS.tan, opacity: 0.7 },

  settingItem: {
    flexDirection: "row", alignItems: "center", gap: 14,
    backgroundColor: COLORS.kombuGreen,
    borderRadius: 16, paddingVertical: 15,
    paddingHorizontal: 16, marginBottom: 8,
    borderWidth: 1, borderColor: "rgba(136,144,99,0.18)",
  },
  settingEmoji: { fontSize: 18, width: 26, textAlign: "center" },
  settingText: { flex: 1, fontSize: 14, color: COLORS.bone, fontWeight: "500" },
  arrow: { fontSize: 20, color: COLORS.mossGreen },

  logoutButton: {
    marginHorizontal: 20, marginTop: 24,
    paddingVertical: 15, borderRadius: 16,
    alignItems: "center",
    backgroundColor: "rgba(201,139,139,0.1)",
    borderWidth: 1, borderColor: "rgba(201,139,139,0.3)",
  },
  logoutText: { color: "#C98B8B", fontSize: 15, fontWeight: "700", letterSpacing: 0.5 },

  modalOverlay: {
    flex: 1, backgroundColor: "rgba(0,0,0,0.72)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#1e2a1a",
    borderTopLeftRadius: 28, borderTopRightRadius: 28,
    padding: 24, paddingBottom: 36,
    borderWidth: 1, borderColor: "rgba(136,144,99,0.25)",
  },
  modalHandle: {
    width: 40, height: 4, borderRadius: 2,
    backgroundColor: "rgba(207,187,153,0.3)",
    alignSelf: "center", marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20, fontWeight: "800", color: COLORS.bone,
    textAlign: "center", marginBottom: 6,
  },
  modalSub: {
    fontSize: 13, color: COLORS.tan, opacity: 0.7,
    textAlign: "center", marginBottom: 20, lineHeight: 19,
  },
  inputLabel: {
    fontSize: 11, fontWeight: "700", color: COLORS.mossGreen,
    letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6,
  },
  input: {
    borderWidth: 1, borderColor: "rgba(136,144,99,0.3)",
    borderRadius: 12, padding: 14, marginBottom: 14,
    backgroundColor: COLORS.darkBg, color: COLORS.bone, fontSize: 15,
  },
  saveButton: {
    backgroundColor: COLORS.mossGreen, paddingVertical: 15,
    borderRadius: 14, alignItems: "center", marginTop: 4, marginBottom: 10,
  },
  saveButtonText: { color: COLORS.darkBg, fontSize: 15, fontWeight: "800", letterSpacing: 0.5 },
  cancelButton: { paddingVertical: 10, alignItems: "center" },
  cancelText: { color: COLORS.tan, fontSize: 14, opacity: 0.75 },

  toggleRow: {
    flexDirection: "row", alignItems: "center",
    paddingVertical: 14, borderBottomWidth: 1,
    borderBottomColor: "rgba(136,144,99,0.12)",
  },
  toggleLabel: { fontSize: 14, fontWeight: "600", color: COLORS.bone, marginBottom: 2 },
  toggleSublabel: { fontSize: 12, color: COLORS.tan, opacity: 0.65 },
  toggleTrack: {
    width: 46, height: 26, borderRadius: 13,
    backgroundColor: "rgba(136,144,99,0.25)",
    padding: 3, justifyContent: "center",
  },
  toggleTrackOn: { backgroundColor: COLORS.mossGreen },
  toggleThumb: {
    width: 20, height: 20, borderRadius: 10,
    backgroundColor: COLORS.tan, alignSelf: "flex-start",
  },
  toggleThumbOn: { alignSelf: "flex-end", backgroundColor: COLORS.darkBg },

  privacyItem: {
    flexDirection: "row", alignItems: "flex-start", gap: 14,
    paddingVertical: 14, borderBottomWidth: 1,
    borderBottomColor: "rgba(136,144,99,0.12)",
  },
  privacyIcon: { fontSize: 22, marginTop: 1 },
  privacyTitle: { fontSize: 14, fontWeight: "700", color: COLORS.bone, marginBottom: 3 },
  privacySub: { fontSize: 12, color: COLORS.tan, opacity: 0.7, lineHeight: 17 },
  dangerButton: {
    marginTop: 18, paddingVertical: 13, borderRadius: 12,
    alignItems: "center", borderWidth: 1,
    borderColor: "rgba(201,139,139,0.4)",
    backgroundColor: "rgba(201,139,139,0.08)",
  },
  dangerText: { color: "#C98B8B", fontWeight: "700", fontSize: 14 },

  helpItem: {
    backgroundColor: "rgba(136,144,99,0.08)",
    borderRadius: 12, padding: 14, marginBottom: 10,
    borderWidth: 1, borderColor: "rgba(136,144,99,0.15)",
  },
  helpQ: { fontSize: 13, fontWeight: "700", color: COLORS.bone, marginBottom: 5 },
  helpA: { fontSize: 12, color: COLORS.tan, opacity: 0.75, lineHeight: 18 },
  helpDivider: {
    height: 1, backgroundColor: "rgba(136,144,99,0.18)",
    marginVertical: 16,
  },
  helpContact: { fontSize: 13, color: COLORS.tan, opacity: 0.65, textAlign: "center" },
  helpEmail: {
    fontSize: 14, fontWeight: "700", color: COLORS.mossGreen,
    textAlign: "center", marginTop: 4,
  },

  contentContainer: { paddingBottom: 24 },
});