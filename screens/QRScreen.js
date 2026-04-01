import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  ImageBackground,
  StatusBar,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import BottomNavBar from "../components/BottomNavBar";
import { SafeAreaView } from "react-native-safe-area-context";

// 1. Import Theme Context and Styles
import { ThemeContext } from "../context/ThemeContext";
import { getStyles } from "../styles/QRStyles";

const { width } = Dimensions.get("window");

// 2. Updated Helper components to accept dynamic colors
function HamburgerIcon({ color, size = 20 }) {
  const bar = { width: size, height: 2.5, backgroundColor: color, borderRadius: 2 };
  return (
    <View style={{ gap: 5 }}>
      <View style={bar} />
      <View style={[bar, { width: size * 0.7 }]} />
      <View style={bar} />
    </View>
  );
}

function CameraIcon({ size = 32, color }) {
  return (
    <View style={{ width: size, height: size, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: size, height: size * 0.72, borderRadius: size * 0.15,
          borderWidth: 2.5, borderColor: color, alignItems: "center",
          justifyContent: "center", position: "absolute", bottom: 0,
        }}
      >
        <View
          style={{
            width: size * 0.42, height: size * 0.42, borderRadius: size * 0.21,
            borderWidth: 2.5, borderColor: color, alignItems: "center", justifyContent: "center",
          }}
        >
          <View style={{ width: size * 0.18, height: size * 0.18, borderRadius: size * 0.09, backgroundColor: color }} />
        </View>
      </View>
      <View
        style={{
          position: "absolute", top: 0, left: size * 0.12, width: size * 0.28, height: size * 0.22,
          borderTopLeftRadius: size * 0.1, borderTopRightRadius: size * 0.1,
          borderWidth: 2.5, borderBottomWidth: 0, borderColor: color,
        }}
      />
    </View>
  );
}

function QRCorners({ size = 220, cornerLen = 28, thickness = 3.5, color }) {
  const corner = (pos) => {
    const isTop  = pos.includes("top");
    const isLeft = pos.includes("Left");
    return (
      <View
        key={pos}
        style={{
          position: "absolute", width: cornerLen, height: cornerLen,
          ...(isTop  ? { top: 0    } : { bottom: 0    }),
          ...(isLeft ? { left: 0   } : { right: 0     }),
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
  // 3. Consume Context
  const { theme, isDarkMode } = useContext(ThemeContext);
  const styles = getStyles(theme, isDarkMode);

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
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} translucent backgroundColor="transparent" />

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
            {/* Pass theme color to icons */}
            <HamburgerIcon color={theme.text} />
          </Pressable>
        </View>

        <View style={[styles.card, { width: CARD_W, flex: 0.8 }]}>

          <View style={styles.cameraCircle}>
            {/* Pass theme color to icons */}
            <CameraIcon size={34} color={theme.text} />
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
              {/* Pass theme color to corners */}
              <QRCorners size={CAM_SIZE - 24} color={theme.primary} />
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