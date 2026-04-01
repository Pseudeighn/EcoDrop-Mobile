import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mossGreen, 
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
    backgroundColor: COLORS.kombuGreen, 
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