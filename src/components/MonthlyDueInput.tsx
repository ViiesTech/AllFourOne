import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { responsiveHeight } from "../helper/responsive";

const DateInput = () => {
  const [day, setDay] = useState("28");
  const [month, setMonth] = useState("09");
  const [year, setYear] = useState("2000");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="DD"
        keyboardType="numeric"
        maxLength={2}
        value={day}
        onChangeText={setDay}
        placeholderTextColor="#fff"
        defaultValue="28"
      />
      <TextInput
        style={styles.input}
        placeholder="MM"
        keyboardType="numeric"
        maxLength={2}
        value={month}
        onChangeText={setMonth}
        placeholderTextColor="#fff"
        defaultValue="09"
      />
      <TextInput
        style={styles.input}
        placeholder="YYYY"
        keyboardType="numeric"
        maxLength={4}
        value={year}
        onChangeText={setYear}
        placeholderTextColor="#fff"
        defaultValue="2000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-evenly', // Ensures equal spacing
    width: "100%", // Adjust width as needed
    alignSelf: "center",
  },
  input: {
    flex: 1, // Makes all inputs equal width
    height: responsiveHeight(6),
    borderBottomWidth: 1, // Bottom border only
    borderBottomColor: "#fff",
    textAlign: "center",
    color: 'white',
    fontSize: 16,
    marginHorizontal: responsiveHeight(3), // Space between inputs
  },
});

export default DateInput;
