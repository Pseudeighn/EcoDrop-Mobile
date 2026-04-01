import { StyleSheet } from "react-native";

export const getStyles = (theme, isDarkMode) => StyleSheet.create({
  // Use theme background for the safe area to match the transition
  safe: { flex: 1, backgroundColor: theme.background },
  container: { flex: 1 },
  
  backgroundImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    // Slightly dim the background image in Dark Mode for better contrast
    opacity: isDarkMode ? 0.7 : 1, 
  },
  
  spacer: { height: 280 },
  
  card: {
    flex: 1,
    backgroundColor: theme.cardPrimary, // Use dynamic card color instead of translucent black
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    borderWidth: 1,
    borderColor: theme.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 10,
  },
  
  input: {
    backgroundColor: theme.background,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 14,
    color: theme.text,
    borderWidth: 1,
    borderColor: theme.border,
  },
  
  passwordContainer: { position: "relative", marginBottom: 14 },
  
  passwordInput: {
    backgroundColor: theme.background,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    paddingRight: 50,
    color: theme.text,
    borderWidth: 1,
    borderColor: theme.border,
  },
  
  eyeIcon: {
    position: "absolute",
    right: 14,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  eyeEmoji: { fontSize: 20 },
  
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  
  checkboxRow: { flexDirection: "row", alignItems: "center" },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: theme.primary,
    borderRadius: 4,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.background,
  },
  checkboxChecked: { width: 10, height: 10, backgroundColor: theme.primary, borderRadius: 2 },
  
  rememberText: { fontSize: 14, fontWeight: '600', color: theme.textMuted },
  small: { fontSize: 14, color: theme.textMuted }, 
  link: { color: theme.primary, fontWeight: "700" },
  
  primaryBtn: { backgroundColor: theme.primary, paddingVertical: 16, borderRadius: 12, alignItems: "center", marginTop: 4 },
  primaryBtnText: { color: "#FFFFFF", fontWeight: "800", letterSpacing: 1, fontSize: 16 },
  
  orText: { textAlign: "center", marginVertical: 20, fontSize: 12, fontWeight: "600", color: theme.textMuted, letterSpacing: 1 },
  
  socialRow: { flexDirection: "row", gap: 12 },
  socialBtn: { 
    flex: 1, paddingVertical: 14, borderRadius: 12, alignItems: "center", justifyContent: "center", 
    backgroundColor: theme.cardSecondary, flexDirection: "row", gap: 8,
    borderWidth: 1, borderColor: theme.border
  },
  socialLogo: { width: 20, height: 20 },
  socialText: { fontWeight: "700", color: theme.text },
  
  bottomRow: { marginTop: 24, flexDirection: "row", justifyContent: "center", alignItems: "center" },
});