import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

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
          <PieChart
            data={data}
            width={Dimensions.get("window").width - 20}
            height={170}
            chartConfig={{
              color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
              strokeWidth: 2,
              useShadowColorFromDataset: false,
            }}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"0"}
            center={[25, 0]}
          />
        </>
      ) : null}
    </View>
  );
};
