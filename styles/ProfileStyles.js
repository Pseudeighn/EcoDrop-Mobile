import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.darkBg },
  
  header: {
    backgroundColor: COLORS.kombuGreen,
    alignItems: "center",
    paddingVertical: 40,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(136,144,99,0.3)",
  },
  backButton: { position: "absolute", left: 16, top: 44, padding: 8 },
  backText: { fontSize: 24, color: COLORS.bone },
  avatar: { width: 104, height: 104, borderRadius: 52, borderWidth: 3, borderColor: COLORS.mossGreen, marginBottom: 12 },
  name: { fontSize: 22, fontWeight: "700", color: COLORS.bone },
  email: { fontSize: 14, color: COLORS.tan, marginTop: 4 },
  ecoBadge: { marginTop: 12, backgroundColor: "rgba(136,144,99,0.2)", paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20, borderWidth: 1, borderColor: COLORS.mossGreen },
  ecoBadgeText: { color: COLORS.mossGreen, fontSize: 12, fontWeight: "600" },
  
  statsRow: { flexDirection: "row", justifyContent: "space-between", marginTop: -28, marginHorizontal: 16 },
  statCard: { flex: 1, backgroundColor: COLORS.cafeNoir, marginHorizontal: 6, paddingVertical: 18, borderRadius: 16, alignItems: "center", elevation: 2, borderWidth: 1, borderColor: "rgba(136,144,99,0.3)" },
  statValue: { fontSize: 18, fontWeight: "700", color: COLORS.bone },
  statLabel: { fontSize: 12, marginTop: 4, color: COLORS.mossGreen },
  
  section: { marginTop: 28, marginHorizontal: 16 },
  sectionTitle: { fontSize: 14, fontWeight: "700", marginBottom: 12, color: COLORS.mossGreen, textTransform: "uppercase", letterSpacing: 1 },
  
  achievement: { backgroundColor: "#2A321F", padding: 14, borderRadius: 12, marginBottom: 8 },
  achievementText: { fontSize: 14, color: COLORS.bone, fontWeight: "600" },
  
  settingItem: { backgroundColor: COLORS.kombuGreen, padding: 16, borderRadius: 12, flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8, borderWidth: 1, borderColor: "rgba(136,144,99,0.3)" },
  settingText: { fontSize: 14, color: COLORS.bone, fontWeight: "500" },
  arrow: { fontSize: 18, color: COLORS.mossGreen },
  
  logoutButton: { marginTop: 24, marginHorizontal: 16, paddingVertical: 14, alignItems: "center" },
  logoutText: { color: "#C98B8B", fontSize: 15, fontWeight: "600" }, // Soft red for dark theme
  
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.7)", justifyContent: "center", padding: 24 },
  modalContent: { backgroundColor: COLORS.kombuGreen, borderRadius: 20, padding: 20, borderWidth: 1, borderColor: COLORS.mossGreen },
  modalTitle: { fontSize: 18, fontWeight: "700", marginBottom: 16, textAlign: "center", color: COLORS.bone },
  input: { borderWidth: 1, borderColor: "rgba(136,144,99,0.3)", borderRadius: 12, padding: 14, marginBottom: 12, backgroundColor: COLORS.darkBg, color: COLORS.bone },
  saveButton: { backgroundColor: COLORS.mossGreen, paddingVertical: 14, borderRadius: 12, alignItems: "center", marginTop: 4 },
  saveButtonText: { color: COLORS.darkBg, fontSize: 16, fontWeight: "600" },
  cancelText: { textAlign: "center", marginTop: 12, color: COLORS.tan },
});