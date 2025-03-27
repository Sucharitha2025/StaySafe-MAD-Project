import { View, Text, Platform } from "react-native";
import React from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";


// the keyboardAvoidingView helps obscruction during sign in prcess when the user is trying to type 
const ios = Platform.OS == "iso";
export default function CustomKeyboardView({ children }) {
  return (
    <KeyboardAvoidingView
      behavior={ios ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
