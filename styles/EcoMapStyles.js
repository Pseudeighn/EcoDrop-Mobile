import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../constants/theme";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.kombuGreen,
  },

  header: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.kombuGreen,
  },
  headerLabel: {
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 5,
    color: COLORS.bone,
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },

  mapWrapper: {
    flex: 1,
    overflow: "hidden",
  },

  infoCard: {
    flex: 1,
    backgroundColor: COLORS.kombuGreen,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 24,
    marginTop: -40,
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