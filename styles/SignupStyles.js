import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.signupBg },
  container: { flex: 1 },
  backgroundImg: {
    position: "absolute", width: "100%", height: "100%", top: 0, left: 0,
  },
  spacer: { height: 280 },
  card: {
    flex: 1, backgroundColor: "rgba(0,0,0,0.06)",
    borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 20,
  },
  nameRow: { flexDirection: "row", gap: 10 },
  half: { flex: 1 },
  input: {
    backgroundColor: COLORS.white, borderRadius: 10,
    paddingHorizontal: 14, paddingVertical: 12, marginBottom: 12,
  },
  passwordContainer: { position: "relative", marginBottom: 12 },
  passwordInput: {
    backgroundColor: COLORS.white, borderRadius: 10,
    paddingHorizontal: 14, paddingVertical: 12, paddingRight: 50,
  },
  eyeIcon: {
    position: "absolute", right: 14, top: 0, bottom: 0,
    justifyContent: "center", alignItems: "center",
  },
  eyeEmoji: { fontSize: 20 },
  agreeRow: { flexDirection: "row", alignItems: "center", marginBottom: 14 },
  checkbox: {
    width: 18, height: 18, borderWidth: 2, borderColor: COLORS.signupBrown,
    borderRadius: 3, marginRight: 8, alignItems: "center",
    justifyContent: "center", backgroundColor: COLORS.white,
  },
  checkboxChecked: {
    width: 10, height: 10, backgroundColor: COLORS.signupBrown, borderRadius: 1,
  },
  agreeText: { fontSize: 14, opacity: 0.75 },
  primaryBtn: {
    backgroundColor: COLORS.signupBrown, paddingVertical: 14,
    borderRadius: 10, alignItems: "center",
  },
  disabledBtn: { opacity: 0.5 },
  primaryBtnText: { color: COLORS.white, fontWeight: "800", letterSpacing: 1 },
  bottomRow: {
    marginTop: 14, flexDirection: "row", justifyContent: "center", alignItems: "center",
  },
  small: { fontSize: 14, color: COLORS.textDark, opacity: 0.8 },
  link: { color: COLORS.signupBrown, fontWeight: "700" },
});