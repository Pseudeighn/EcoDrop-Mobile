import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.darkBg },
  scrollContent: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 100 },
  headerTitle: { fontSize: 24, fontWeight: "800", color: COLORS.bone, marginBottom: 20 },
  
  balanceCard: {
    backgroundColor: COLORS.kombuGreen,
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "rgba(136,144,99,0.3)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  balanceLabel: { fontSize: 12, color: COLORS.mossGreen, fontWeight: "700", letterSpacing: 1.5, marginBottom: 8 },
  balancePoints: { fontSize: 48, fontWeight: "900", color: COLORS.bone, marginBottom: 12 },
  tierBadge: { backgroundColor: "rgba(136,144,99,0.2)", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  tierText: { color: COLORS.mossGreen, fontSize: 12, fontWeight: "700" },
  
  sectionTitle: { fontSize: 14, fontWeight: "700", color: COLORS.mossGreen, textTransform: "uppercase", marginBottom: 15, letterSpacing: 1 },
  
  rewardCard: {
    flexDirection: "row",
    backgroundColor: "#2A321F",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  rewardInfo: { flexDirection: "row", alignItems: "center", gap: 12, flex: 1 }, // Added flex: 1 so long text doesn't push the button off screen
  

  rewardImg: { width: 40, height: 40, borderRadius: 8, backgroundColor: COLORS.bone },
  
  rewardTitle: { fontSize: 14, fontWeight: "700", color: COLORS.bone },
  rewardSub: { fontSize: 12, color: COLORS.mossGreen, marginTop: 4 },
  redeemBtn: { backgroundColor: COLORS.mossGreen, paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8, marginLeft: 10 },
  redeemText: { color: COLORS.darkBg, fontSize: 12, fontWeight: "800" },

  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(136,144,99,0.2)",
  },
  historyTitle: { fontSize: 14, fontWeight: "600", color: COLORS.bone },
  historyDate: { fontSize: 12, color: COLORS.mossGreen, marginTop: 4 },
  pointsEarned: { fontSize: 14, fontWeight: "700", color: "#8BC98B" },
  pointsSpent: { fontSize: 14, fontWeight: "700", color: "#C98B8B" },

  navWrapper: { position: "absolute", bottom: 0, left: 0, right: 0 },
});