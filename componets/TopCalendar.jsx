import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const TopCalendar = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState("Today");
  const [isModalVisible, setModalVisible] = useState(false);
  const [calendarDate, setCalendarDate] = useState(new Date());

  const dates = ["21", "22", "23", "Today", "25", "26", "27", "28", "29", "30"];

  // Open the modal with the calendar picker
  const handleDatePress = () => {
    // setModalVisible(true);
    navigation.navigate("calendar");
  };

  // When a date is selected in the calendar picker
  // const onDateChange = (event, date) => {
  //   const newDate = date || calendarDate;
  //   setCalendarDate(newDate);
  //   setSelectedDate(newDate.toDateString());
  //   setModalVisible(false); // Close the modal
  // };

  return (
    <View style={styles.container}>
      <View style={{ padding: 8 }}>       
        {/* Horizontal Scroll for Dates */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroll}>
          {dates.map((date, index) => (
            <TouchableOpacity key={index} style={styles.dateBox} onPress={handleDatePress}>
              <Text style={styles.dateButtons}>
                {date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Modal for Calendar Picker */}
      {isModalVisible && (
        <Modal transparent={true} animationType="slide" visible={isModalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>Select a Date</Text>
              <DateTimePicker
                value={calendarDate}
                mode="date"
                display="calendar"
                onChange={onDateChange}
              />
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:500,
    paddingRight:100
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dateScroll: {
    flexDirection: "row",
  },
  dateBox: {
    backgroundColor: "#d681d0",
    // borderRightColor:'black',
    borderRightWidth:1,
    borderLeftWidth:1,
    paddingVertical: 7,
    paddingHorizontal: 18,
    // borderBottomWidth:2,
    alignItems: "center",
    
  },
  dateButtons :{

  },
  dateText: {
    fontSize: 16,
    color: "#555",
  },
  todayText: {
    fontSize: 16,
    color: "#00a99d",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    width: "80%",
  },
});

export default TopCalendar;
