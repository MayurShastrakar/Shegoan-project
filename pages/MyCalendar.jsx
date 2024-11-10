import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo"; // Icon for previous/next month buttons
// import AntDesign from '@expo/vector-icons/AntDesign';

const MyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getMonthDays = (date) => {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const daysInMonth = endOfMonth.getDate();
    const days = [];

    // Add leading empty days based on what day the month starts on
    const startDay = startOfMonth.getDay();
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    // Add the days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    // Add trailing empty days to complete the last row (if needed)
    const endDay = endOfMonth.getDay();
    const trailingEmptyDays = endDay === 0 ? 6 : 6 - endDay; // Calculate empty cells needed for the last row
    for (let i = 0; i < trailingEmptyDays; i++) {
      days.push(null);
    }

    return days;
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(nextMonth);
  };

  const goToPreviousMonth = () => {
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(previousMonth);
  };

  const renderMonth = (date) => {
    const monthDays = getMonthDays(date);
    const rows = [];

    // Group days into weeks (7 days per row)
    for (let i = 0; i < monthDays.length; i += 7) {
      rows.push(monthDays.slice(i, i + 7));
    }

    return (
      <View style={styles.monthContainer}>
        {/* <Text style={{ textAlign: "center", color: "#d96fd1" }}>
          {date.getFullYear()}
        </Text> */}
        <Text style={styles.monthTitle}>
          {date.toLocaleString("default", { month: "long" })}
        </Text>
        {rows.map((week, index) => (
          <View key={index} style={styles.weekRow}>
            {week.map((day, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dayBox,
                  !day && { backgroundColor: "transparent" },
                ]}
                onPress={() => day && alert(`Selected day: ${day}`)}
              >
                <Text style={styles.dayText}>{day || ""}</Text>
                <Text style={styles.dayText}>
                  {/* <AntDesign name="checkcircle" size={15} color="#e084cc" /> */}
                  {/* <AntDesign name="checkcircleo" size={15} color="#e084cc" /> */}
                  {/* <Entypo name="circle" size={17} color="black" /> */}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text></Text>
        <Text></Text>

        <View style={{ backgroundColor: "white" }}>
          {/* Navigation buttons */}

          {/* Header for Day Names */}
          <View style={styles.dayHeaderRow}>
            {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
              <View key={index} style={styles.dayHeaderBox}>
                <Text style={styles.dayHeaderText}>{day}</Text>
              </View>
            ))}
          </View>
          {/* Display two months: current month on top, next month on bottom */}

          <View style={styles.monthsContainer}>
            {/* Top Month: Current month */}
            {renderMonth(currentDate)}
            <Text style={{}}></Text>

            {/* Bottom Month: Next month */}
            {renderMonth(
              new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
            )}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderTopWidth: 1,
              borderColor: "#ede8ed",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{ padding: 10, color: "#cc72c5", fontWeight: "bold" }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
            <View style={styles.navigationContainer}>
              <TouchableOpacity
                onPress={goToPreviousMonth}
                style={styles.navButton}
              >
                <AntDesign name="left" size={15} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={goToNextMonth}
                style={styles.navButton}
              >
                <AntDesign name="right" size={15} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text
                style={{ padding: 10, color: "#cc72c5", fontWeight: "bold" }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#faaaeb",
    margin: 10,
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  navButton: {
    padding: 10,
  },
  monthsContainer: {
    flex: 1,
    paddingBottom: 5,
  },
  monthContainer: {
    marginBottom: 20,
  },
  monthTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  dayHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ede8ed",
  },
  dayHeaderBox: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  dayHeaderText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "black",
  },
  weekRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  dayBox: {
    width: 30,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  dayText: {
    fontSize: 11,
    fontWeight: "bold",
  },
  scrollView: {
    // flexGrow: 1,
    // justifyContent: "center",
  },
});

export default MyCalendar;

// <FontAwesome name="check-circle-o" size={24} color="black" />
// <FontAwesome name="check-circle" size={24} color="black" />
// <FontAwesome5 name="check-circle" size={24} color="black" />
// <FontAwesome6 name="circle" size={24} color="black" />     Circle
// <AntDesign name="checkcircleo" size={24} color="black" /> Check empty
// <AntDesign name="checkcircle" size={24} color="black" />Check Fill
