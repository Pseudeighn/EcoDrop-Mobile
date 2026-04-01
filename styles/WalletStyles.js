import { StyleSheet } from "react-native";

export const getStyles = (theme) => StyleSheet.create({
  safe: { flex: 1, backgroundColor: theme.background },
  scrollContent: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 100 },
  headerTitle: { fontSize: 24, fontWeight: "800", color: theme.text, marginBottom: 20 },
  
  balanceCard: {
    backgroundColor: theme.cardSecondary,
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 1,
    borderColor: theme.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  balanceLabel: { fontSize: 12, color: theme.primary, fontWeight: "700", letterSpacing: 1.5, marginBottom: 8 },
  balancePoints: { fontSize: 48, fontWeight: "900", color: theme.text, marginBottom: 12 },
  tierBadge: { backgroundColor: theme.transparentMoss, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  tierText: { color: theme.primary, fontSize: 12, fontWeight: "700" },
  
  sectionTitle: { fontSize: 14, fontWeight: "700", color: theme.primary, textTransform: "uppercase", marginBottom: 15, letterSpacing: 1 },
  
  rewardCard: {
    flexDirection: "row",
    backgroundColor: theme.cardSecondary,
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.border,
  },
  rewardInfo: { flexDirection: "row", alignItems: "center", gap: 12, flex: 1 }, 
  
  rewardImg: { width: 40, height: 40, borderRadius: 8, backgroundColor: theme.border },
  
  rewardTitle: { fontSize: 14, fontWeight: "700", color: theme.text },
  rewardSub: { fontSize: 12, color: theme.textMuted, marginTop: 4 },
  redeemBtn: { backgroundColor: theme.primary, paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8, marginLeft: 10 },
  redeemText: { color: "#FFFFFF", fontSize: 12, fontWeight: "800" },

  historyItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  historyTitle: { fontSize: 14, fontWeight: "600", color: theme.text },
  historyDate: { fontSize: 12, color: theme.textMuted, marginTop: 4 },
  pointsEarned: { fontSize: 14, fontWeight: "700", color: theme.primary }, // Maps to your moss green
  pointsSpent: { fontSize: 14, fontWeight: "700", color: theme.danger },    // Maps to your soft red

  navWrapper: { position: "absolute", bottom: 0, left: 0, right: 0 },
});