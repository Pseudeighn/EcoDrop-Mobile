import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ActivityItem({ icon, title, date, points, isNegative }) {
  return (
    <View style={styles.activityItem}>
      <View style={styles.activityIconBg}>
        <Text>{icon}</Text>
      </View>
      <View style={styles.activityInfo}>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activityDate}>{date}</Text>
      </View>
      <Text style={[styles.activityPoints, isNegative && styles.negativePoints]}>
        {points}
      </Text>
    </View>
  );
}

const GREEN_ACCENT = "#8A9468";

const styles = StyleSheet.create({
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  activityIconBg: {
    width: 36,
    height: 36,
    backgroundColor: "#F0F5F0",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  activityDate: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },
  activityPoints: {
    fontSize: 14,
    fontWeight: "bold",
    color: GREEN_ACCENT,
  },
  negativePoints: {
    color: "#D32F2F",
  },
});