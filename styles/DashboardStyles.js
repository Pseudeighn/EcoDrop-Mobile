import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

const LIME   = "#7BA11D";   
const CREAM  = COLORS.bone; 
const MOSS   = COLORS.mossGreen; 

export const styles = StyleSheet.create({

  safe: { flex: 1, backgroundColor: COLORS.darkBg },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 18, paddingTop: 14 },
  navWrapper: { position: "absolute", bottom: 0, left: 0, right: 0 },

  header: {
    flexDirection: "row", alignItems: "center",
    justifyContent: "space-between", marginBottom: 20,
  },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  logo: { width: 42, height: 42, borderRadius: 12 },
  greeting: {
    fontSize: 17, fontWeight: "800",
    color: COLORS.bone, letterSpacing: 0.1,
  },
  subGreeting: {
    fontSize: 12, color: LIME,
    marginTop: 1, fontWeight: "500",
  },
  bellBox: {
    width: 40, height: 40, borderRadius: 12,
    backgroundColor: COLORS.kombuGreen,
    alignItems: "center", justifyContent: "center",
    borderWidth: 1, borderColor: "rgba(162,197,35,0.3)",
  },
  bellIcon: { fontSize: 18 },
  bellDot: {
    position: "absolute", top: 8, right: 8,
    width: 8, height: 8, borderRadius: 4,
    backgroundColor: LIME,
    borderWidth: 1.5, borderColor: COLORS.darkBg,
  },

  heroBanner: {
    backgroundColor: COLORS.kombuGreen,
    borderRadius: 28, padding: 24,
    marginBottom: 24, overflow: "hidden",
    borderWidth: 1.5, borderColor: "rgba(162,197,35,0.35)",
    shadowColor: LIME,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18, shadowRadius: 20, elevation: 12,
  },
  heroWatermark: {
    position: "absolute", right: -10, bottom: -18,
    fontSize: 100, fontWeight: "900",
    color: "rgba(162,197,35,0.06)", letterSpacing: -4,
    lineHeight: 110,
  },
  heroBannerTop: {
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "flex-start", marginBottom: 18,
  },
  heroLabel: {
    fontSize: 10, fontWeight: "800", letterSpacing: 2.5,
    color: LIME, textTransform: "uppercase", marginBottom: 4,
  },
  heroPoints: {
    fontSize: 52, fontWeight: "900",
    color: COLORS.bone, letterSpacing: -2, lineHeight: 56,
  },
  heroBadge: {
    backgroundColor: "rgba(162,197,35,0.18)",
    borderRadius: 20, paddingHorizontal: 12, paddingVertical: 6,
    borderWidth: 1, borderColor: "rgba(162,197,35,0.45)",
  },
  heroBadgeText: { fontSize: 12, color: LIME, fontWeight: "700" },

  progressTrack: {
    height: 7, backgroundColor: "rgba(255,255,255,0.07)",
    borderRadius: 4, marginBottom: 7, overflow: "hidden",
  },
  progressFill: {
    height: "100%", backgroundColor: LIME, borderRadius: 4,
  },
  progressLabel: {
    fontSize: 11, color: COLORS.tan, opacity: 0.75, letterSpacing: 0.3,
  },
  heroDivider: {
    height: 1, backgroundColor: "rgba(162,197,35,0.15)", marginVertical: 16,
  },
  statsRow: { flexDirection: "row", alignItems: "center" },
  statSep: {
    width: 1, height: 36,
    backgroundColor: "rgba(162,197,35,0.15)",
  },

  sectionTitle: {
    fontSize: 11, fontWeight: "800", color: LIME,
    letterSpacing: 2.5, textTransform: "uppercase",
    marginBottom: 12, marginTop: 8,
  },

  tileRow: { flexDirection: "row", gap: 10 },

  tipCard: {
    flexDirection: "row", alignItems: "flex-start", gap: 14,
    backgroundColor: "rgba(162,197,35,0.1)",
    borderRadius: 18, padding: 16, marginTop: 4, marginBottom: 4,
    borderWidth: 1, borderColor: "rgba(162,197,35,0.25)",
  },
  tipIcon: { fontSize: 24, marginTop: 1 },
  tipTitle: {
    fontSize: 12, fontWeight: "800", color: LIME,
    letterSpacing: 0.5, marginBottom: 5,
    textTransform: "uppercase",
  },
  tipBody: {
    fontSize: 13, color: COLORS.bone, opacity: 0.8,
    lineHeight: 19,
  },

  activityCard: {
    backgroundColor: COLORS.kombuGreen,
    borderRadius: 22, paddingHorizontal: 16,
    paddingTop: 4, paddingBottom: 4,
    borderWidth: 1, borderColor: "rgba(136,144,99,0.2)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2, shadowRadius: 8, elevation: 5,
  },
  viewAllBtn: { paddingVertical: 14, alignItems: "center" },
  viewAllText: {
    fontSize: 12, color: LIME, fontWeight: "700", letterSpacing: 0.8,
  },
});

export const statStyles = StyleSheet.create({
  pill: { flex: 1, alignItems: "center", paddingVertical: 10 },
  value: { fontSize: 19, fontWeight: "900", letterSpacing: 0.3 },
  label: {
    fontSize: 9, color: COLORS.tan, fontWeight: "600",
    marginTop: 3, letterSpacing: 0.8, textTransform: "uppercase",
  },
});

export const tileStyles = StyleSheet.create({
  tile: {
    borderRadius: 20, padding: 16,
    alignItems: "flex-start", gap: 8,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18, shadowRadius: 10, elevation: 6,
  },
  emojiBox: {
    width: 44, height: 44, borderRadius: 12,
    alignItems: "center", justifyContent: "center",
    marginBottom: 2,
  },
  emoji: { fontSize: 24 },

  lime: {
    backgroundColor: LIME,
    shadowColor: LIME,
  },
  emojiBox_lime: { backgroundColor: "rgba(0,0,0,0.12)" },
  label_lime: { fontSize: 14, fontWeight: "800", color: "#1A1A1A", letterSpacing: 0.1 },
  sub_lime:   { fontSize: 11, color: "rgba(0,0,0,0.55)", fontWeight: "600" },

  dark: {
    backgroundColor: COLORS.cafeNoir,
    borderWidth: 1, borderColor: "rgba(136,144,99,0.25)",
    shadowColor: "#000",
  },
  emojiBox_dark: { backgroundColor: "rgba(207,187,153,0.1)" },
  label_dark: { fontSize: 14, fontWeight: "800", color: COLORS.bone, letterSpacing: 0.1 },
  sub_dark:   { fontSize: 11, color: COLORS.mossGreen, fontWeight: "600" },

  bone: {
    backgroundColor: COLORS.bone,
    shadowColor: COLORS.cafeNoir,
  },
  emojiBox_bone: { backgroundColor: "rgba(75,56,50,0.12)" },
  label_bone: { fontSize: 14, fontWeight: "800", color: COLORS.cafeNoir, letterSpacing: 0.1 },
  sub_bone:   { fontSize: 11, color: COLORS.cafeNoir, opacity: 0.6, fontWeight: "600" },

  moss: {
    backgroundColor: COLORS.mossGreen,
    shadowColor: COLORS.mossGreen,
  },
  emojiBox_moss: { backgroundColor: "rgba(0,0,0,0.15)" },
  label_moss: { fontSize: 14, fontWeight: "800", color: COLORS.bone, letterSpacing: 0.1 },
  sub_moss:   { fontSize: 11, color: "rgba(207,187,153,0.7)", fontWeight: "600" },
});

export const actStyles = StyleSheet.create({
  row: {
    flexDirection: "row", alignItems: "center",
    paddingVertical: 13, gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(136,144,99,0.15)",
  },
  iconBox: {
    width: 40, height: 40, borderRadius: 12,
    alignItems: "center", justifyContent: "center",
  },
  title: { fontSize: 13, fontWeight: "700", color: COLORS.bone, letterSpacing: 0.1 },
  date:  { fontSize: 11, color: COLORS.mossGreen, marginTop: 2 },
  ptsBadge: {
    paddingHorizontal: 10, paddingVertical: 4,
    borderRadius: 20, backgroundColor: "rgba(162,197,35,0.15)",
    borderWidth: 1, borderColor: "rgba(162,197,35,0.3)",
  },
  ptsBadgeNeg: {
    backgroundColor: "rgba(201,139,139,0.12)",
    borderColor: "rgba(201,139,139,0.3)",
  },
  pts:    { fontSize: 13, fontWeight: "800", color: LIME },
  ptsNeg: { color: "#C98B8B" },
});