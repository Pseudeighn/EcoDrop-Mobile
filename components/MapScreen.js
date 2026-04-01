import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, StatusBar, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { COLORS } from '../constants/theme';

const { width, height } = Dimensions.get('window');

const BINS = [
  {
    id: '1',
    title: 'Limketkai Center, Cagayan de Oro City',
    description: 'EcoDrop Bin',
    status: 'Available',
    coordinate: { latitude: 8.4799632, longitude: 124.6563400 },
  },
  {
    id: '2',
    title: 'Ayala Centrio Mall, Cagayan de Oro City',
    description: 'EcoDrop Bin',
    status: 'Available',
    coordinate: { latitude: 8.4846094, longitude: 124.6508152 },
  },
];

const MapScreen = () => {
  const [selectedBin, setSelectedBin] = useState(BINS[0]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: selectedBin.coordinate.latitude,
            longitude: selectedBin.coordinate.longitude,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
          }}
        >
          {BINS.map((bin) => (
            <Marker
              key={bin.id}
              coordinate={bin.coordinate}
              onPress={() => setSelectedBin(bin)}
            >
              <Image
                source={require('../assets/TrubbishPin.png')}
                style={{ width: 40, height: 40 }}
                resizeMode="contain"
              />
            </Marker>
          ))}
        </MapView>
      </View>

      <View style={styles.infoCard}>
        <ScrollView showsVerticalScrollIndicator={false}>

          <Text style={styles.locationTitle}>{selectedBin.title}</Text>

          <Text style={styles.locationLabel}>{selectedBin.description}</Text>

          <Text style={styles.statusLabel}>
            Status:{" "}
            <Text style={styles.statusValue}>{selectedBin.status}</Text>
          </Text>

          <Text style={styles.footerNote}>
            This map shows the nearest available EcoDrop bins and their current status.
            Tap a pin to see more details.
          </Text>

        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.kombuGreen,
  },
  mapContainer: {
    flex: 1, 
    width: '100%',
    height: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  },

  infoCard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: COLORS.kombuGreen,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 28,
    paddingTop: 30,
    paddingBottom: 40, 
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  locationTitle: {
    color: COLORS.bone,
    fontSize: 18,          
    fontWeight: '700',
    marginBottom: 4,
  },
  locationLabel: {
    color: COLORS.mossGreen,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  statusLabel: {
    color: COLORS.mossGreen,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 12,
  },
  statusValue: {
    color: '#A2C523',
    fontWeight: '700',
  },
  footerNote: {
    color: '#7a8a72',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 10,
  },
});

export default MapScreen;