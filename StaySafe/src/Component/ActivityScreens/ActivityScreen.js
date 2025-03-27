import { View, Text, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';

const statusOptions = [
  { value: 1, label: 'Planned' },
  { value: 2, label: 'Started' },
  { value: 3, label: 'Paused' },
  { value: 4, label: 'Cancelled' },
  { value: 5, label: 'Completed' },
  { value: 6, label: 'Panic' },
];

const ActivityScreen = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [eta, setETA] = useState('');
  const [status, setStatus] = useState('Planned');
  const [sharedActivity, setSharedActivity] = useState([]);

  const shareActivity = () => {
    const newActivity = {
      id: Date.now().toString(),
      departure,
      destination,
      departureTime,
      eta,
      status,
    };
    setSharedActivity([...sharedActivity, newActivity]);
    setDeparture('');
    setDestination('');
    setDepartureTime('');
    setETA('');
    setStatus('Planned');
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
        <Text style={{ fontSize: 24, marginBottom: 10, padding: 8, textAlign: 'center', fontWeight: 'bold', top: 50 }}>Share Your Activity</Text>

        <TextInput
          placeholder="Departure Location"
          value={departure}
          onChangeText={setDeparture}
          style={{ borderWidth: 1, marginBottom: 10, padding: 8, top: 60 }}
        />

        <TextInput
          placeholder="Destination"
          value={destination}
          onChangeText={setDestination}
          style={{ borderWidth: 1, marginBottom: 10, padding: 8, top: 65 }}
        />

        <TextInput
          placeholder="Departure Time"
          value={departureTime}
          onChangeText={setDepartureTime}
          style={{ borderWidth: 1, marginBottom: 10, padding: 8, top: 70 }}
        />

        <TextInput
          placeholder="ETA"
          value={eta}
          onChangeText={setETA}
          style={{ borderWidth: 1, marginBottom: 10, padding: 8, top: 75 }}
        />

        <Text style={{ fontWeight: '400', marginBottom: 5, top: 80, fontSize: 20, }}>Status</Text>
        <View style={{ flexDirection: 'row', marginBottom: 10, flexWrap: 'wrap', top: 85 }}>
          {statusOptions.map((s) => (
            <TouchableOpacity
              key={s.value}
              onPress={() => setStatus(s.label)}
              style={{
                backgroundColor: status === s.label ? '#007AFF' : '#E0E0E0',
                padding: 10,
                margin: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: status === s.label ? '#fff' : '#000' }}>{s.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={{ fontSize: 20, marginTop: 20, top: 70,  }}>Shared Trips</Text>
        {sharedActivity.map((item) => (
          <View key={item.id} style={{ borderBottomWidth: 1, marginVertical: 10, top: 75 }}>
            <Text>Starting Point: {item.departure}</Text>
            <Text>Destination: {item.destination}</Text>
            <Text>Departs: {item.departureTime}</Text>
            <Text>ETA: {item.eta}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
        <Button title="Share Activity" onPress={shareActivity} />
      </View>
    </View>
  );
};

export default ActivityScreen;