import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";

export default ({ data, texto }) => {
  return (
    <View>
      {data.length > 0 ? (
        <>
          <Text
            style={{
              fontSize: 15,
              color: "rgba(255, 255, 255,0.7)",
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            {texto}
          </Text>
          <BarChart
            data={{
              labels: ["Mar", "Abr", "May", "Jun"],
              datasets: [
                {
                  data: [28, 80, 1000, 43],
                },
              ],
            }}
            style={{ alignSelf: "center", borderRadius: 16 }}
            width={Dimensions.get("window").width - 20}
            height={200}
            yAxisLabel="Q"
            showValuesOnTopOfBars={true}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#4F93BC",
              backgroundGradientTo: "#393943",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              propsForVerticalLabels: {
                fontSize: 12,
              },
              propsForHorizontalLabels: {
                fontSize: 10,
              },
            }}
          />
        </>
      ) : null}
    </View>
  );
};
