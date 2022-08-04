import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";

export default ({ data, texto }) => {
  const array = [];
  function moneda(x) {
    let num = new Number(x);
    let text = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return text;
  }

  const listItem = () => {
    array.splice(0, array.length);
    data.forEach((item) => {
      array.push(
        <Text
          key={item["name"]}
          style={{
            marginLeft: 15,
            color: "white",
            fontSize: 12,
            backgroundColor: "rgba(255,255,255,0.2)",
            maxWidth: "85%",
            borderRadius: 5,
            padding: 5,
            marginTop: 5,
          }}
        >
          {item["name"]} - Q {moneda(item["population"])}
        </Text>
      );
    });
    return array;
  };
  return (
    <View>
      {data.length > 0 ? (
        <View
          style={{
            marginTop: 5,
            marginBottom: 15,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.2)",
            width: "95%",
            borderRadius: 5,
            alignSelf: "center",
            padding: 10,
          }}
        >
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
            width={Dimensions.get("window").width - 40}
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
          {listItem()}
        </View>
      ) : null}
    </View>
  );
};
