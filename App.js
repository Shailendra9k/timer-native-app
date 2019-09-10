import React from "react";
import { View, Text } from "react-native";
import Hello from "./component/Hello";
// import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0984e3"
      }}
    >
      <Hello text="Time is " />
    </View>
  );
}
