import { StyleSheet } from "react-native";

export const getStyles = (theme, isDarkMode) => StyleSheet.create({
  bg: { flex: 1, width: "100%", height: "100%", backgroundColor: theme.background },
  tint: {
    ...StyleSheet.absoluteFillObject,
    // Dynamic overlay: dark tint in dark mode, light creamy tint in light mode
    backgroundColor: isDarkMode ? "rgba(20, 28, 14, 0.55)" : "rgba(247, 242, 234, 0.65)",
  },
  safe: { flex: 1, alignItems: "center", paddingBottom: 24 },
  header: {
    width: "100%", flexDirection: "row", alignItems: "center",
    justifyContent: "space-between", paddingHorizontal: 20,
    paddingTop: 14, paddingBottom: 10,
  },
  iconBtn: {
    width: 44, height: 44, borderRadius: 22,
    backgroundColor: theme.cardSecondary,
    alignItems: "center", justifyContent: "center",
    borderWidth: 1, borderColor: theme.border,
  },
  arrowLeft: {
    width: 11, height: 11, borderLeftWidth: 2.5,
    borderBottomWidth: 2.5, borderColor: theme.text,
    transform: [{ rotate: "45deg" }, { translateX: 3 }],
  },
  scanLabel: {
    fontSize: 22, fontWeight: "900", letterSpacing: 5,
    color: theme.text, textShadowColor: "rgba(0,0,0,0.1)",
    textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 4,
  },
  card: {
    backgroundColor: theme.cardPrimary, borderRadius: 24,
    alignItems: "center", justifyContent: "space-evenly",
    paddingBottom: 32, paddingHorizontal: 28,
    paddingTop: 44, marginTop: 44, marginHorizontal: 20,
    borderWidth: 1, borderColor: theme.border,
    shadowColor: "#000", shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15, shadowRadius: 20, elevation: 12,
  },
  cameraCircle: {
    position: "absolute", top: -34, width: 68, height: 68,
    borderRadius: 34, backgroundColor: theme.cardSecondary,
    alignItems: "center", justifyContent: "center",
    borderWidth: 3, borderColor: theme.primary,
    shadowColor: "#000", shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15, shadowRadius: 8, elevation: 10,
  },
  cameraBox: {
    borderRadius: 16, overflow: "hidden", backgroundColor: theme.cardSecondary,
    alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: theme.border
  },
  scanLineBar: {
    position: "absolute", height: 2, backgroundColor: theme.primary,
    opacity: 0.75, alignSelf: "center", borderRadius: 2,
    shadowColor: theme.primary, shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9, shadowRadius: 6,
  },
  permBtn: { padding: 16, alignItems: "center" },
  permText: { color: theme.textMuted, fontSize: 14, fontWeight: "600", textAlign: "center" },
  instruction: {
    color: theme.text, fontSize: 13.5, fontWeight: "500",
    textAlign: "center", lineHeight: 20, opacity: 0.75,
    letterSpacing: 0.2, transform: [{ translateY: 80 }]
  },
  rescanBtn: {
    marginTop: 18, paddingVertical: 10, paddingHorizontal: 36,
    backgroundColor: theme.primary, borderRadius: 30,
  },
  rescanText: { color: theme.background, fontWeight: "700", fontSize: 14, letterSpacing: 1 },
});