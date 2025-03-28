import React from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../Dashboard/dashboard_style';

const DashboardScreen = () => {
  
  const showDashboardAlert = () => {
    Alert.alert(
      'Important Message',
      'You have successfully reached the dashboard!',
      [
        {
          text: 'Dismiss',
          onPress: () => console.log('Alert dismissed'),
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your Dashboard</Text>
      
      {/* Alert Button */}
      <TouchableOpacity 
        style={styles.alertButton}
        onPress={showDashboardAlert}
      >
        <Text style={styles.alertButtonText}>Show Alert Message</Text>
      </TouchableOpacity>
      
     
     
    </View>
  );
};



export default DashboardScreen;