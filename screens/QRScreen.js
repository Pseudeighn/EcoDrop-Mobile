import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Dimensions,
  ImageBackground,
  StatusBar,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import BottomNavBar from "../components/BottomNavBar";

const { width, height } = Dimensions.get("window");

const COLORS = {
  cafeNoir:    "#4C3D19",
  kombuGreen:  "#354024",
  mossGreen:   "#889063",
  tan:         "#CFBB99",
  bone:        "#E5D7C4",
  white:       "#FFFFFF",
  overlay:     "rgba(76, 61, 25, 0.18)",
};

function HamburgerIcon({ color = COLORS.white, size = 20 }) {
  const bar = { width: size, height: 2.5, backgroundColor: color, borderRadius: 2 };
  return (
    <View style={{ gap: 5 }}>
      <View style={bar} />
      <View style={[bar, { width: size * 0.7 }]} />
      <View style={bar} />
    </View>
  );
}

function CameraIcon({ size = 32, color = COLORS.white }) {
  return (
    <View style={{ width: size, height: size, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: size,
          height: size * 0.72,
          borderRadius: size * 0.15,
          borderWidth: 2.5,
          borderColor: color,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
        }}
      >
        <View
          style={{
            width: size * 0.42,
            height: size * 0.42,
            borderRadius: size * 0.21,
            borderWidth: 2.5,
            borderColor: color,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: size * 0.18,
              height: size * 0.18,
              borderRadius: size * 0.09,
              backgroundColor: color,
            }}
          />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: size * 0.12,
          width: size * 0.28,
          height: size * 0.22,
          borderTopLeftRadius: size * 0.1,
          borderTopRightRadius: size * 0.1,
          borderWidth: 2.5,
          borderBottomWidth: 0,
          borderColor: color,
        }}
      />
    </View>
  );
}

function QRCorners({ size = 220, cornerLen = 28, thickness = 3.5, color = COLORS.mossGreen }) {
  const corner = (pos) => {
    const isTop    = pos.includes("top");
    const isLeft   = pos.includes("Left");
    return (
      <View
        key={pos}
        style={{
          position: "absolute",
          width: cornerLen,
          height: cornerLen,
          ...(isTop  ? { top: 0    } : { bottom: 0    }),
          ...(isLeft ? { left: 0   } : { right: 0    }),
          borderTopWidth:    isTop  ? thickness : 0,
          borderBottomWidth: isTop  ? 0 : thickness,
          borderLeftWidth:   isLeft ? thickness : 0,
          borderRightWidth:  isLeft ? 0 : thickness,
          borderColor: color,
          borderTopLeftRadius:     (isTop  && isLeft)  ? 4 : 0,
          borderTopRightRadius:    (isTop  && !isLeft) ? 4 : 0,
          borderBottomLeftRadius:  (!isTop && isLeft)  ? 4 : 0,
          borderBottomRightRadius: (!isTop && !isLeft) ? 4 : 0,
        }}
      />
    );
  };

  return (
    <View style={{ width: size, height: size, position: "relative" }}>
      {["topLeft", "topRight", "bottomLeft", "bottomRight"].map(corner)}
    </View>
  );
}

export default function QRScreen({ navigation }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned]           = useState(false);
  const [scanLine, setScanLine]         = useState(0);

  useEffect(() => {
    let dir = 1;
    const iv = setInterval(() => {
      setScanLine((prev) => {
        const next = prev + dir * 2;
        if (next >= 100) dir = -1;
        if (next <= 0)   dir =  1;
        return next;
      });
    }, 16);
    return () => clearInterval(iv);
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (scanned) return;
    setScanned(true);
    alert(`QR Code scanned!\nData: ${data}`);
  };

  const CARD_W = width * 0.82;
  const CAM_SIZE = CARD_W - 56;

  return (
    <ImageBackground
      source={require("../assets/EcoDrop-QR-BG.png")}
      style={styles.bg}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <View style={styles.tint} pointerEvents="none" />

      <SafeAreaView style={styles.safe}>

        <View style={styles.header}>
          <Pressable
            style={({ pressed }) => [styles.iconBtn, pressed && { opacity: 0.7 }]}
            onPress={() => navigation.goBack()}
          >
            <View style={styles.arrowLeft} />
          </Pressable>

          <Text style={styles.scanLabel}>SCAN</Text>

          <Pressable style={({ pressed }) => [styles.iconBtn, pressed && { opacity: 0.7 }]}>
            <HamburgerIcon />
          </Pressable>
        </View>

        <View style={[styles.card, { width: CARD_W, flex: 0.8 }]}>

          <View style={styles.cameraCircle}>
            <CameraIcon size={34} color={COLORS.white} />
          </View>

          <View style={[styles.cameraBox, { width: CAM_SIZE, aspectRatio: 1, alignSelf: "center" }]}>
            {permission?.granted ? (
              <>
                <CameraView
                  style={StyleSheet.absoluteFill}
                  facing="back"
                  barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
                  onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                />
                <View
                  pointerEvents="none"
                  style={[
                    styles.scanLineBar,
                    { top: `${scanLine}%`, width: CAM_SIZE - 16 },
                  ]}
                />
              </>
            ) : (
              <Pressable style={styles.permBtn} onPress={requestPermission}>
                <Text style={styles.permText}>
                  {permission === null
                    ? "Tap to enable camera"
                    : "Grant Camera Permission"}
                </Text>
              </Pressable>
            )}

            <View style={StyleSheet.absoluteFill} pointerEvents="none" alignItems="center" justifyContent="center">
              <QRCorners size={CAM_SIZE - 24} color={COLORS.mossGreen} />
            </View>
          </View>

          <Text style={styles.instruction}>
            Scan the bin's unique QR code to unlock the hatch and identify the user.
          </Text>

          {scanned && (
            <Pressable
              style={styles.rescanBtn}
              onPress={() => setScanned(false)}
            >
              <Text style={styles.rescanText}>Scan Again</Text>
            </Pressable>
          )}
        </View>

        <BottomNavBar navigation={navigation} activeScreen="QRScreen"/>

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  tint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(20, 28, 14, 0.45)",
  },
  safe: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 24,
  },

  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 10,
  },
  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(76, 61, 25, 0.72)",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowLeft: {
    width: 11,
    height: 11,
    borderLeftWidth: 2.5,
    borderBottomWidth: 2.5,
    borderColor: COLORS.white,
    transform: [{ rotate: "45deg" }, { translateX: 3 }],
  },
  scanLabel: {
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 5,
    color: COLORS.bone,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },

  card: {
    backgroundColor: COLORS.cafeNoir,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 32,
    paddingHorizontal: 28,
    paddingTop: 44,
    marginTop: 44,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.45,
    shadowRadius: 20,
    elevation: 18,
  },
  cameraCircle: {
    position: "absolute",
    top: -34,
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: COLORS.kombuGreen,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: COLORS.cafeNoir,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 10,
  },

  cameraBox: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  scanLineBar: {
    position: "absolute",
    height: 2,
    backgroundColor: COLORS.mossGreen,
    opacity: 0.75,
    alignSelf: "center",
    borderRadius: 2,
    shadowColor: COLORS.mossGreen,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
  },
  permBtn: {
    padding: 16,
    alignItems: "center",
  },
  permText: {
    color: COLORS.tan,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },

  instruction: {
    color: COLORS.bone,
    fontSize: 13.5,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 20,
    opacity: 0.50,
    letterSpacing: 0.2,
    transform: [{ translateY: 80 }] 
  },

  rescanBtn: {
    marginTop: 18,
    paddingVertical: 10,
    paddingHorizontal: 36,
    backgroundColor: COLORS.mossGreen,
    borderRadius: 30,
  },
  rescanText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 14,
    letterSpacing: 1,
  },
});