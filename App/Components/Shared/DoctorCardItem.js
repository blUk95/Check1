import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Colors from '../../../assets/Shared/Colors';

export default function DoctorCardItem({ doctor }) {
  return (
    <View style={{ backgroundColor: Colors.white, padding: 10, borderRadius: 10, marginBottom: 20 }}>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
        <Image source={{ uri:doctor?.attributes?.Image?.data.attributes.url }} style={{ width: 110, height: 120, borderRadius: 10 }} />
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 17, fontFamily: 'appfont-semi', marginTop: 5 }}>{doctor.attributes.Name}</Text>
          <Text style={{ color: Colors.GRAY, fontFamily: 'appfont', marginTop: 1 }}>
            {doctor.attributes?.category?.data?.attributes?.Name}
          </Text>
          <Text style={{ fontFamily: 'appfont', color: Colors.PRIMARY, marginTop: 3 }}>
            {doctor.attributes.Year_of_Experience}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={{ marginTop: 10, padding: 10, backgroundColor: Colors.SECONDARY, borderRadius: 10 }}>
        <Text style={{ color: Colors.PRIMARY, textAlign: 'center', fontFamily: 'appfont-semi' }}>Make an Appointment</Text>
      </TouchableOpacity>
    </View>
  );
}
