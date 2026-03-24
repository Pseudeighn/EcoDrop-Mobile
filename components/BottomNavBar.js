import React from "react";
import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

const COLORS = {
  cafeNoir:   "#4C3D19",
  kombuGreen: "#354024",
  mossGreen:  "#889063",
  tan:        "#CFBB99",
  bone:       "#E5D7C4",
  white:      "#FFFFFF",
};

const TABS = [
  { name: "Dashboard", label: "Home",    icon: HomeIcon    },
  { name: "EcoMap",    label: "Map",     icon: MapIcon     },
  { name: "QRScreen",  label: "Scan",    icon: ScanIcon    },
  { name: "Wallet",    label: "Wallet",  icon: GiftIcon    },
  { name: "Profile",   label: "Profile", icon: ProfileIcon },
];

function HomeIcon({ color, size }) {
  const roofW = size * 0.82;
  const roofH = size * 0.44;
  const bodyW = size * 0.54;
  const bodyH = size * 0.42;
  const doorW = size * 0.22;
  const doorH = size * 0.28;
  return (
    <View style={{ width: size, height: size, alignItems: "center", justifyContent: "flex-end" }}>
      <View
        style={{
          position: "absolute",
          top: size * 0.04,
          width: 0,
          height: 0,
          borderLeftWidth:   roofW / 2,
          borderRightWidth:  roofW / 2,
          borderBottomWidth: roofH,
          borderLeftColor:   "transparent",
          borderRightColor:  "transparent",
          borderBottomColor: color,
        }}
      />
      <View
        style={{
          width: bodyW,
          height: bodyH,
          backgroundColor: color,
          position: "absolute",
          bottom: size * 0.04,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            width: doorW,
            height: doorH,
            backgroundColor: COLORS.kombuGreen,
            borderTopLeftRadius:  doorW * 0.3,
            borderTopRightRadius: doorW * 0.3,
          }}
        />
      </View>
    </View>
  );
}

function MapIcon({ color, size }) {
  const pinW = size * 0.52;
  return (
    <View style={{ width: size, height: size, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: pinW,
          height: pinW,
          borderRadius: pinW / 2,
          borderWidth: 2.2,
          borderColor: color,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: size * 0.06,
        }}
      >
        <View style={{ width: pinW * 0.32, height: pinW * 0.32, borderRadius: 99, backgroundColor: color }} />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: size * 0.06,
          width: 2.5,
          height: size * 0.32,
          backgroundColor: color,
          borderRadius: 2,
        }}
      />
    </View>
  );
}

function ScanIcon({ color, size }) {
  const boxSize = size * 0.72;
  const cLen    = size * 0.22;
  const thick   = 2.5;
  const corners = [
    { top: 0,    left: 0,  borderTopWidth: thick,    borderLeftWidth: thick,  borderTopLeftRadius: 3     },
    { top: 0,    right: 0, borderTopWidth: thick,    borderRightWidth: thick, borderTopRightRadius: 3    },
    { bottom: 0, left: 0,  borderBottomWidth: thick, borderLeftWidth: thick,  borderBottomLeftRadius: 3  },
    { bottom: 0, right: 0, borderBottomWidth: thick, borderRightWidth: thick, borderBottomRightRadius: 3 },
  ];
  return (
    <View style={{ width: size, height: size, alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: boxSize, height: boxSize, position: "relative" }}>
        {corners.map((c, i) => (
          <View key={i} style={[{ position: "absolute", width: cLen, height: cLen, borderColor: color }, c]} />
        ))}
        <View style={{ position: "absolute", top: "50%", left: "10%", right: "10%", height: 1.5, backgroundColor: color, opacity: 0.8 }} />
      </View>
    </View>
  );
}

function GiftIcon({ color, size }) {
  return (
    <View style={{ width: size, height: size, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: size * 0.72,
          height: size * 0.46,
          borderWidth: 2.2,
          borderColor: color,
          borderRadius: 3,
          position: "absolute",
          bottom: size * 0.04,
          alignItems: "center",
        }}
      >
        <View style={{ position: "absolute", top: 0, bottom: 0, width: 2.2, backgroundColor: color }} />
      </View>
      <View
        style={{
          position: "absolute",
          top: size * 0.3,
          width: size * 0.78,
          height: size * 0.16,
          borderWidth: 2.2,
          borderColor: color,
          borderRadius: 2,
          alignItems: "center",
        }}
      >
        <View style={{ position: "absolute", top: 0, bottom: 0, width: 2.2, backgroundColor: color }} />
      </View>
      <View style={{ position: "absolute", top: size * 0.08, left: size * 0.2,  width: size * 0.2, height: size * 0.22, borderRadius: 99, borderWidth: 2, borderColor: color }} />
      <View style={{ position: "absolute", top: size * 0.08, right: size * 0.2, width: size * 0.2, height: size * 0.22, borderRadius: 99, borderWidth: 2, borderColor: color }} />
    </View>
  );
}

function ProfileIcon({ color, size }) {
  return (
    <View style={{ width: size, height: size, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: size * 0.38,
          height: size * 0.38,
          borderRadius: size * 0.19,
          borderWidth: 2.2,
          borderColor: color,
          position: "absolute",
          top: size * 0.06,
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: size * 0.04,
          width: size * 0.72,
          height: size * 0.38,
          borderTopLeftRadius:  size * 0.36,
          borderTopRightRadius: size * 0.36,
          borderWidth: 2.2,
          borderBottomWidth: 0,
          borderColor: color,
        }}
      />
    </View>
  );
}

export default function BottomNavBar({ navigation, activeScreen }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topBorder} />
      <View style={styles.bar}>
        {TABS.map((tab) => {
          const isActive = activeScreen === tab.name;
          const IconComponent = tab.icon;
          const iconColor = isActive ? COLORS.bone : COLORS.mossGreen;

          return (
            <Pressable
              key={tab.name}
              style={({ pressed }) => [styles.tab, pressed && { opacity: 0.55 }]}
              onPress={() => navigation.navigate(tab.name)}
            >
              {isActive && <View style={styles.activePill} />}

              <View style={styles.tabInner}>
                <IconComponent color={iconColor} size={26} />
                <Text style={[styles.label, isActive && styles.labelActive]}>
                  {tab.label}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.kombuGreen,
    paddingBottom: Platform.OS === "ios" ? 24 : 4,
  },
  topBorder: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(136, 144, 99, 0.45)",
  },
  bar: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 6,
    paddingBottom: 6,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 54,
    position: "relative",
  },
  activePill: {
    position: "absolute",
    top: 4,
    bottom: 4,
    left: 6,
    right: 6,
    borderRadius: 10,
    backgroundColor: COLORS.mossGreen,
  },
  tabInner: {
    alignItems: "center",
    gap: 3,
    zIndex: 1,
  },
  label: {
    fontSize: 10,
    fontWeight: "600",
    color: COLORS.mossGreen,
    letterSpacing: 0.3,
    textAlign: "center",
  },
  labelActive: {
    color: COLORS.bone,
    fontWeight: "700",
  },
});