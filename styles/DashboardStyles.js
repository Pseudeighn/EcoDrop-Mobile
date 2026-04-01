import { StyleSheet } from "react-native";

const LIME = "#7BA11D";   

export const getStyles = (theme) => {
  return {
    styles: StyleSheet.create({
      safe: { flex: 1, backgroundColor: theme.background },
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
        color: theme.text, letterSpacing: 0.1,
      },
      subGreeting: {
        fontSize: 12, color: theme.primary,
        marginTop: 1, fontWeight: "500",
      },
      bellBox: {
        width: 40, height: 40, borderRadius: 12,
        backgroundColor: theme.cardSecondary,
        alignItems: "center", justifyContent: "center",
        borderWidth: 1, borderColor: theme.border,
      },
      bellIcon: { fontSize: 18 },
      bellDot: {
        position: "absolute", top: 8, right: 8,
        width: 8, height: 8, borderRadius: 4,
        backgroundColor: LIME,
        borderWidth: 1.5, borderColor: theme.cardSecondary,
      },

      heroBanner: {
        backgroundColor: theme.cardSecondary,
        borderRadius: 28, padding: 24,
        marginBottom: 24, overflow: "hidden",
        borderWidth: 1.5, borderColor: theme.border,
        shadowColor: theme.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15, shadowRadius: 20, elevation: 12,
      },
      heroWatermark: {
        position: "absolute", right: -10, bottom: -18,
        fontSize: 100, fontWeight: "900",
        color: theme.transparentMoss, letterSpacing: -4,
        lineHeight: 110,
      },
      heroBannerTop: {
        flexDirection: "row", justifyContent: "space-between",
        alignItems: "flex-start", marginBottom: 18,
      },
      heroLabel: {
        fontSize: 10, fontWeight: "800", letterSpacing: 2.5,
        color: theme.primary, textTransform: "uppercase", marginBottom: 4,
      },
      heroPoints: {
        fontSize: 52, fontWeight: "900",
        color: theme.text, letterSpacing: -2, lineHeight: 56,
      },
      heroBadge: {
        backgroundColor: theme.transparentMoss,
        borderRadius: 20, paddingHorizontal: 12, paddingVertical: 6,
        borderWidth: 1, borderColor: theme.border,
      },
      heroBadgeText: { fontSize: 12, color: theme.primary, fontWeight: "700" },

      progressTrack: {
        height: 7, backgroundColor: theme.border,
        borderRadius: 4, marginBottom: 7, overflow: "hidden",
      },
      progressFill: {
        height: "100%", backgroundColor: LIME, borderRadius: 4,
      },
      progressLabel: {
        fontSize: 11, color: theme.textMuted, opacity: 0.8, letterSpacing: 0.3,
      },
      heroDivider: {
        height: 1, backgroundColor: theme.border, marginVertical: 16,
      },
      statsRow: { flexDirection: "row", alignItems: "center" },
      statSep: {
        width: 1, height: 36,
        backgroundColor: theme.border,
      },

      sectionTitle: {
        fontSize: 11, fontWeight: "800", color: theme.primary,
        letterSpacing: 2.5, textTransform: "uppercase",
        marginBottom: 12, marginTop: 8,
      },

      tileRow: { flexDirection: "row", gap: 10 },

      tipCard: {
        flexDirection: "row", alignItems: "flex-start", gap: 14,
        backgroundColor: theme.transparentMoss,
        borderRadius: 18, padding: 16, marginTop: 4, marginBottom: 4,
        borderWidth: 1, borderColor: theme.border,
      },
      tipIcon: { fontSize: 24, marginTop: 1 },
      tipTitle: {
        fontSize: 12, fontWeight: "800", color: theme.primary,
        letterSpacing: 0.5, marginBottom: 5,
        textTransform: "uppercase",
      },
      tipBody: {
        fontSize: 13, color: theme.text, opacity: 0.85,
        lineHeight: 19,
      },

      activityCard: {
        backgroundColor: theme.cardSecondary,
        borderRadius: 22, paddingHorizontal: 16,
        paddingTop: 4, paddingBottom: 4,
        borderWidth: 1, borderColor: theme.border,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1, shadowRadius: 8, elevation: 5,
      },
      viewAllBtn: { paddingVertical: 14, alignItems: "center" },
      viewAllText: {
        fontSize: 12, color: theme.primary, fontWeight: "700", letterSpacing: 0.8,
      },
    }),

    statStyles: StyleSheet.create({
      pill: { flex: 1, alignItems: "center", paddingVertical: 10 },
      value: { fontSize: 19, fontWeight: "900", letterSpacing: 0.3 },
      label: {
        fontSize: 9, color: theme.textMuted, fontWeight: "600",
        marginTop: 3, letterSpacing: 0.8, textTransform: "uppercase",
      },
    }),

    tileStyles: StyleSheet.create({
      tile: {
        borderRadius: 20, padding: 16,
        alignItems: "flex-start", gap: 8,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1, shadowRadius: 8, elevation: 4,
      },
      emojiBox: {
        width: 44, height: 44, borderRadius: 12,
        alignItems: "center", justifyContent: "center",
        marginBottom: 2,
      },
      emoji: { fontSize: 24 },

      lime: { backgroundColor: LIME, shadowColor: LIME },
      emojiBox_lime: { backgroundColor: "rgba(0,0,0,0.12)" },
      label_lime: { fontSize: 14, fontWeight: "800", color: "#1A1A1A", letterSpacing: 0.1 },
      sub_lime:   { fontSize: 11, color: "rgba(0,0,0,0.55)", fontWeight: "600" },

      dark: { backgroundColor: theme.cardPrimary, borderWidth: 1, borderColor: theme.border, shadowColor: "#000" },
      emojiBox_dark: { backgroundColor: theme.transparentMoss },
      label_dark: { fontSize: 14, fontWeight: "800", color: theme.text, letterSpacing: 0.1 },
      sub_dark:   { fontSize: 11, color: theme.textMuted, fontWeight: "600" },

      bone: { backgroundColor: theme.cardSecondary, shadowColor: theme.cardPrimary },
      emojiBox_bone: { backgroundColor: theme.border },
      label_bone: { fontSize: 14, fontWeight: "800", color: theme.text, letterSpacing: 0.1 },
      sub_bone:   { fontSize: 11, color: theme.textMuted, opacity: 0.8, fontWeight: "600" },

      moss: { backgroundColor: theme.primary, shadowColor: theme.primary },
      emojiBox_moss: { backgroundColor: "rgba(0,0,0,0.15)" },
      label_moss: { fontSize: 14, fontWeight: "800", color: "#FFFFFF", letterSpacing: 0.1 },
      sub_moss:   { fontSize: 11, color: "rgba(255,255,255,0.7)", fontWeight: "600" },
    }),

    actStyles: StyleSheet.create({
      row: {
        flexDirection: "row", alignItems: "center",
        paddingVertical: 13, gap: 12,
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
      },
      iconBox: {
        width: 40, height: 40, borderRadius: 12,
        alignItems: "center", justifyContent: "center",
      },
      title: { fontSize: 13, fontWeight: "700", color: theme.text, letterSpacing: 0.1 },
      date:  { fontSize: 11, color: theme.textMuted, marginTop: 2 },
      ptsBadge: {
        paddingHorizontal: 10, paddingVertical: 4,
        borderRadius: 20, backgroundColor: theme.transparentMoss,
        borderWidth: 1, borderColor: theme.border,
      },
      ptsBadgeNeg: {
        backgroundColor: theme.dangerBg,
        borderColor: theme.danger,
      },
      pts:    { fontSize: 13, fontWeight: "800", color: theme.primary },
      ptsNeg: { color: theme.danger },
    })
  };
};