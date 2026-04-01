import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

// 1. Export the main styles
export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.darkBg },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingTop: 16 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 24 },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  logo: { width: 40, height: 40, borderRadius: 10 },
  greeting: { fontSize: 16, fontWeight: "700", color: COLORS.bone, letterSpacing: 0.2 },
  subGreeting: { fontSize: 12, color: COLORS.mossGreen, marginTop: 1, fontWeight: "400" },
  heroBanner: { backgroundColor: COLORS.cafeNoir, borderRadius: 24, padding: 24, marginBottom: 28, overflow: "hidden", shadowColor: "#000", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.4, shadowRadius: 16, elevation: 10, borderWidth: 1, borderColor: "rgba(136,144,99,0.2)" },
  heroBannerTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 },
  heroLabel: { fontSize: 10, fontWeight: "700", letterSpacing: 2, color: COLORS.mossGreen, textTransform: "uppercase", marginBottom: 4 },
  heroPoints: { fontSize: 46, fontWeight: "900", color: COLORS.bone, letterSpacing: -1, lineHeight: 50 },
  heroBadge: { backgroundColor: "rgba(136,144,99,0.2)", borderRadius: 20, paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1, borderColor: "rgba(136,144,99,0.35)" },
  heroBadgeText: { fontSize: 12, color: COLORS.mossGreen, fontWeight: "600" },
  progressTrack: { height: 6, backgroundColor: "rgba(255,255,255,0.08)", borderRadius: 3, marginBottom: 6, overflow: "hidden" },
  progressFill: { height: "100%", backgroundColor: COLORS.mossGreen, borderRadius: 3 },
  progressLabel: { fontSize: 11, color: COLORS.tan, opacity: 0.7, letterSpacing: 0.2 },
  heroDivider: { height: 1, backgroundColor: "rgba(207,187,153,0.12)", marginVertical: 16 },
  statsRow: { flexDirection: "row", alignItems: "center" },
  statSep: { width: 1, height: 32, backgroundColor: "rgba(207,187,153,0.15)" },
  sectionTitle: { fontSize: 13, fontWeight: "700", color: COLORS.mossGreen, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14, marginTop: 14 },
  tileRow: { flexDirection: "row", gap: 12 },
  activityCard: { backgroundColor: COLORS.kombuGreen, borderRadius: 20, paddingHorizontal: 16, paddingTop: 4, paddingBottom: 4, borderWidth: 1, borderColor: "rgba(136,144,99,0.2)", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 5 },
  viewAllBtn: { paddingVertical: 14, alignItems: "center" },
  viewAllText: { fontSize: 12, color: COLORS.mossGreen, fontWeight: "600", letterSpacing: 0.5 },
  navWrapper: { position: "absolute", bottom: 0, left: 0, right: 0 },
});

// 2. Export the Stat Pill styles
export const statStyles = StyleSheet.create({
  pill: { flex: 1, alignItems: "center", paddingVertical: 12 },
  value: { fontSize: 20, fontWeight: "800", letterSpacing: 0.5 },
  label: { fontSize: 10, color: COLORS.tan, fontWeight: "500", marginTop: 2, letterSpacing: 0.4, textTransform: "uppercase" },
});

// 3. Export the Action Tile styles
export const tileStyles = StyleSheet.create({
  tile: { backgroundColor: COLORS.bone, borderRadius: 18, padding: 18, alignItems: "flex-start", gap: 6, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 4 },
  tileDark: { backgroundColor: COLORS.kombuGreen },
  emoji: { fontSize: 28 },
  label: { fontSize: 14, fontWeight: "700", color: COLORS.cafeNoir, letterSpacing: 0.2 },
  sub: { fontSize: 11, color: COLORS.mossGreen, fontWeight: "500" },
});

// 4. Export the Activity Row styles
export const actStyles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", paddingVertical: 12, gap: 12, borderBottomWidth: 1, borderBottomColor: "rgba(207,187,153,0.2)" },
  iconBox: { width: 40, height: 40, borderRadius: 12, backgroundColor: "rgba(207,187,153,0.15)", alignItems: "center", justifyContent: "center" },
  title: { fontSize: 13, fontWeight: "600", color: COLORS.bone, letterSpacing: 0.1 },
  date: { fontSize: 11, color: COLORS.mossGreen, marginTop: 2 },
  pts: { fontSize: 13, fontWeight: "700", color: "#8BC98B" },
  ptsNeg: { color: "#C98B8B" },
});