import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";


export const getStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    zIndex: 10,
    position: "absolute", // Keeps it floating over the map
    width: "100%",
  },
  navButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.cardSecondary,
    borderWidth: 1,
    borderColor: theme.border,
    justifyContent: "center",
    alignItems: "center",
    // Adding shadow for better visibility floating over the map
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  backIcon: {
    fontSize: 24,
    color: theme.text,
    fontWeight: "600",
  },
  hamburgerIcon: {
    fontSize: 24,
    color: theme.text,
    fontWeight: "600",
  },
  dropdownMenu: {
    position: "absolute",
    top: 70,
    right: 16,
    backgroundColor: theme.modalBg,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    zIndex: 20,
    minWidth: 160,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: theme.border,
  },
  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  menuText: {
    fontSize: 16,
    color: theme.text,
    fontWeight: "500",
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.kombuGreen,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 24,
    marginTop: -40,
    width: "100%",
    overflow: "hidden",
  },
  locationTitle: {
    color: COLORS.bone,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },
  locationLabel: {
    color: COLORS.mossGreen,
    fontSize: 13,
    marginBottom: 4,
  },
  statusLabel: {
    color: COLORS.mossGreen,
    fontSize: 13,
    marginBottom: 12,
  },
  statusValue: {
    color: "#A2C523",
    fontWeight: "600",
  },
  footerNote: {
    color: "#606C59",
    fontSize: 11,
    textAlign: "center",
    marginTop: 16,
    lineHeight: 16,
  },
});