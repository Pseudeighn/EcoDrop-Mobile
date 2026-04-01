import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    zIndex: 10,
  },
  navButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.cafeNoir,
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    fontSize: 24,
    color: COLORS.white,
    fontWeight: "600",
  },
  hamburgerIcon: {
    fontSize: 24,
    color: COLORS.white,
    fontWeight: "600",
  },
  dropdownMenu: {
    position: "absolute",
    top: 70,
    right: 16,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
    zIndex: 20,
    minWidth: 160,
    overflow: "hidden",
  },
  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});