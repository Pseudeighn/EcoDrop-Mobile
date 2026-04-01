import { StyleSheet } from "react-native";

export const getStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background, // Adapts to Light/Dark mode
    alignItems: "center",
    justifyContent: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.primary, // Uses mossGreen dynamically
    marginHorizontal: 6,
  },
  logoContainer: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 350,
  },
});