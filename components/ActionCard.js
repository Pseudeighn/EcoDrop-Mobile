// components/ActionCard.js
import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function ActionCard({ icon, text, onPress, isPrimary }) {
  return (
    <Pressable
      style={[styles.actionCard, isPrimary && styles.primaryCard]}
      onPress={onPress}
    >
      <Text style={styles.actionIcon}>{icon}</Text>
      <Text style={styles.actionText}>{text}</Text>
    </Pressable>
  );
}

const GREEN_ACCENT = "#8A9468";

const styles = StyleSheet.create({
  actionCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  primaryCard: {
    backgroundColor: GREEN_ACCENT,
    borderColor: GREEN_ACCENT,
  },
  actionIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  actionText: {
    fontWeight: "600",
    color: "#333",
  },
});