import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Image, Animated } from "react-native";
import { COLORS } from "../constants/theme";
import { styles } from "../styles/LandingStyles";

export default function LandingScreen({ navigation }) {
  const fadeTransition = useRef(new Animated.Value(0)).current;
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeTransition, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const dotAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(dot1, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(dot2, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(dot3, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.parallel([
          Animated.timing(dot1, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.timing(dot2, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
          Animated.timing(dot3, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
      ])
    );

    dotAnimation.start();

    const timer = setTimeout(() => {
      Animated.timing(fadeTransition, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        navigation.replace("SignIn");
      });
    }, 3000);

    return () => {
      clearTimeout(timer);
      dotAnimation.stop();
    };
  }, [navigation, fadeTransition, dot1, dot2, dot3]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.dotsContainer, { opacity: fadeTransition }]}>
        <Animated.View
          style={[
            styles.dot,
            {
              opacity: dot1,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.dot,
            {
              opacity: dot2,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.dot,
            {
              opacity: dot3,
            },
          ]}
        />
      </Animated.View>

      <Animated.View style={[styles.logoContainer, { opacity: fadeTransition }]}>
        <Image
          source={require("../assets/Trubbish.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}