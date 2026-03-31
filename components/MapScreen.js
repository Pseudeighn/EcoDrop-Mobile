import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

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
      <StatusBar barStyle="light-content" />
      {/* Interactive Map Section */}
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

      {/* Scrollable Info Card Section */}
      <View style={styles.infoCard}>
        <ScrollView>
          <Text style={styles.locationTitle}>{selectedBin.title}</Text>
          <Text style={styles.locationLabel}>{selectedBin.description}</Text>
          <Text style={styles.statusLabel}>
            Status: <Text style={styles.statusValue}>{selectedBin.status}</Text>
          </Text>
          <Text style={styles.footerNote}>
            This map shows the nearest available EcoDrop bins and their current status.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1E2519', // Dark background to prevent white flashes
  },
  mapContainer: {
    height: height * 0.65,
    width: width,
    overflow: 'hidden',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  infoCard: {
    flex: 1,
    backgroundColor: '#2D3625', // Olive green card
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 30,
    marginTop: -40, // Pulls the card up over the map
  },
  floatingCheck: {
    position: 'absolute',
    right: 30,
    top: -30,
    backgroundColor: '#879F6B',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  checkIcon: {
    fontSize: 28,
    color: '#1E2519',
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  visualGuide: {
    alignItems: 'center',
    marginRight: 15,
    paddingTop: 5,
  },
  dotOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'white',
  },
  dashedLine: {
    width: 1,
    height: 45,
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'dashed',
    marginVertical: 4,
  },
  locationPinSmall: {
    width: 14,
    height: 20,
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  textColumn: {
    flex: 1,
  },
  locationTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  locationLabel: {
    color: '#8C9A86',
    fontSize: 12,
  },
  statusLabel: {
    color: '#8C9A86',
    fontSize: 12,
  },
  statusValue: {
    color: '#A2C523', // Bright green for status
  },
  footerNote: {
    color: '#606C59',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 'auto',
  }
});

export default MapScreen;