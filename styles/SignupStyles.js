import { StyleSheet } from "react-native";

<<<<<<< HEAD
export const getStyles = (theme, isDarkMode) => StyleSheet.create({
  // Map safe area to the theme background
  safe: { flex: 1, backgroundColor: theme.background },
=======
export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.mossGreen },
>>>>>>> 86050c5e13f1043a50127cc5873f5d1c9f168e76
  container: { flex: 1 },
  
  backgroundImg: {
    position: "absolute", width: "100%", height: "100%", top: 0, left: 0,
    // Dim the background image in Dark Mode for better text legibility
    opacity: isDarkMode ? 0.7 : 1,
  },
  
  spacer: { height: 280 },
  
  card: {
    flex: 1, 
    backgroundColor: theme.cardPrimary, // Dynamic card color
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
  
  nameRow: { flexDirection: "row", gap: 10 },
  half: { flex: 1 },
  
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
    position: "absolute", right: 14, top: 0, bottom: 0,
    justifyContent: "center", alignItems: "center",
  },
  eyeEmoji: { fontSize: 20 },
  
  agreeRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  
  checkbox: {
    width: 18, height: 18, 
    borderWidth: 2, 
    borderColor: theme.primary,
    borderRadius: 4, 
    marginRight: 8, 
    alignItems: "center",
    justifyContent: "center", 
    backgroundColor: theme.background,
  },
  checkboxChecked: {
    width: 10, height: 10, backgroundColor: theme.primary, borderRadius: 2,
  },
  
  agreeText: { fontSize: 14, color: theme.textMuted, fontWeight: "600" },
  
  primaryBtn: {
    backgroundColor: theme.primary, 
    paddingVertical: 16,
    borderRadius: 12, 
    alignItems: "center",
    marginTop: 4,
  },
  disabledBtn: { opacity: 0.5 },
  primaryBtnText: { color: "#FFFFFF", fontWeight: "800", letterSpacing: 1, fontSize: 16 },
  
  bottomRow: {
    marginTop: 24, flexDirection: "row", justifyContent: "center", alignItems: "center",
  },
  small: { fontSize: 14, color: theme.textMuted },
  link: { color: theme.primary, fontWeight: "700" },
});