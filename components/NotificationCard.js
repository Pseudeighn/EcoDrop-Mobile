import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// Import the styles from the new file we created
import { styles } from '../styles/NotificationCardStyle'; 

const NotificationCard = ({ isOpen }) => {
  // If the state says it's closed, render nothing
  if (!isOpen) return null;

  return (
    <View style={styles.cardContainer}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>NOTIFICATIONS</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        
        {/* Item 1 */}
        <TouchableOpacity style={styles.itemContainer} activeOpacity={0.7}>
          <Text style={styles.titleText}>New Collection</Text>
          <Text style={styles.messageText}>The "Nagana na siya boss."</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Item 2 */}
        <TouchableOpacity style={styles.itemContainer} activeOpacity={0.7}>
          <Text style={styles.titleText}>Welcome!</Text>
          <Text style={styles.messageText}>May the moon be guarded you dreams and your eco journey!.</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default NotificationCard;