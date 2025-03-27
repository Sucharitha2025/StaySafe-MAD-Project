import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, Dimensions } from "react-native";
import { Ionicons, Octicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


export default function ActivityScreen() {
  const [name, setName] = useState("");
  const [activityName, setActivityName] = useState("");
  const [description, setDescription] = useState("");
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [statusId, setStatusId] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Activity Tracker</Text>

        <View style={styles.formContainer}>
        
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <View
              style={{
                height: hp(7),
                flexDirection: "row",
                gap: 16,
                backgroundColor: "#2A2A2A",
                alignItems: "center",
                borderRadius: 16,
                padding: 16,
              }}
            >
              <FontAwesome name="user" size={hp(2.7)} color="gray" />
              <TextInput
                value={name}
                onChangeText={setName}
                style={{
                  fontSize: hp(2),
                  flex: 1,
                  fontWeight: "600",
                  color: "#fff",
                  backgroundColor: "#2A2A2A",
                }}
                placeholder="Enter your name"
                placeholderTextColor="gray"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Activity Name</Text>
            <View
              style={{
                height: hp(7),
                flexDirection: "row",
                gap: 16,
                backgroundColor: "#2A2A2A",
                alignItems: "center",
                borderRadius: 16,
                padding: 16,
              }}
            >
              <TextInput
                value={activityName}
                onChangeText={setActivityName}
                style={{
                  fontSize: hp(2),
                  flex: 1,
                  fontWeight: "600",
                  color: "#fff",
                  backgroundColor: "#2A2A2A",
                }}
                placeholder="What are you doing?"
                placeholderTextColor="gray"
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Activity Description</Text>
            <View
              style={{
                minHeight: hp(12),
                flexDirection: "row",
                gap: 16,
                backgroundColor: "#2A2A2A",
                alignItems: "flex-start",
                borderRadius: 16,
                padding: 16,
              }}
            >
              <TextInput
                value={description}
                onChangeText={setDescription}
                style={{
                  fontSize: hp(2),
                  flex: 1,
                  fontWeight: "600",
                  color: "#fff",
                  backgroundColor: "#2A2A2A",
                }}
                placeholder="Describe your activity..."
                placeholderTextColor="gray"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>

          <View style={styles.locationsContainer}>

            <View style={styles.locationSection}>
              <Text style={styles.locationLabel}>Start Location</Text>
              <View
                style={{
                  height: hp(7),
                  flexDirection: "row",
                  gap: 16,
                  backgroundColor: "#2A2A2A",
                  alignItems: "center",
                  borderRadius: 16,
                  padding: 16,
                }}
              >
                <Ionicons name="location" size={hp(2.7)} color="#8B5CF6" />
                <TextInput
                  value={startLocation}
                  onChangeText={setStartLocation}
                  style={{
                    fontSize: hp(2),
                    flex: 1,
                    fontWeight: "600",
                    color: "#fff",
                    backgroundColor: "#2A2A2A",
                  }}
                  placeholder="Enter starting point"
                  placeholderTextColor="gray"
                />
              </View>
            </View>

            
            <View style={styles.locationSection}>
              <Text style={styles.locationLabel}>End Location</Text>
              <View
                style={{
                  height: hp(7),
                  flexDirection: "row",
                  gap: 16,
                  backgroundColor: "#2A2A2A",
                  alignItems: "center",
                  borderRadius: 16,
                  padding: 16,
                }}
              >
                <Ionicons name="flag" size={hp(2.7)} color="#EC4899" />
                <TextInput
                  value={endLocation}
                  onChangeText={setEndLocation}
                  style={{
                    fontSize: hp(2),
                    flex: 1,
                    fontWeight: "600",
                    color: "#fff",
                    backgroundColor: "#2A2A2A",
                  }}
                  placeholder="Enter destination"
                  placeholderTextColor="gray"
                />
              </View>
            </View>
          </View>

         
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save Activity</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  formContainer: {
    backgroundColor: "#1E1E1E",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#CCC",
    marginBottom: 8,
  },
  locationsContainer: {
    marginVertical: 15,
  },
  locationSection: {
    marginBottom: 10,
  },
  locationLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#CCC",
    marginBottom: 8,
  },
  dottedLineContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 100,
    marginVertical: 5,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#8B5CF6",
    marginVertical: 4,
  },
  button: {
    backgroundColor: "#8B5CF6",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    marginTop: 20,
    height: hp(7),
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: hp(2),
    fontWeight: "bold",
  },
});
