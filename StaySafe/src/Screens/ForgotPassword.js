import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { StatusBar } from "expo-status-bar";
  import { Octicons } from "@expo/vector-icons";
  import { useRouter } from "expo-router";
  import CustomKeyboardView from "../Component/customKeyboard";
  import Loading from "../Component/Loading";
  import user from "../data/user"; // Import the user data
  
  export default function ForgotPassword() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [step, setStep] = useState(1); // 1: Enter username, 2: Enter new password
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [foundUser, setFoundUser] = useState(null);
  
    const handleFindUser = () => {
      if (!username) {
        Alert.alert("Forgot Password", "Please enter your username");
        return;
      }
  
      setLoading(true);
  
      // Find user in the dummy data
      const found = user.find(
        (u) => u.UserUsername.toLowerCase() === username.toLowerCase()
      );
  
      setLoading(false);
  
      if (!found) {
        Alert.alert("Forgot Password", "Username not found");
      } else {
        // Move to password reset step
        setFoundUser(found);
        setStep(2);
      }
    };
  
    const handleResetPassword = () => {
      if (!newPassword || !confirmPassword) {
        Alert.alert("Forgot Password", "Please fill all fields");
        return;
      }
  
      if (newPassword !== confirmPassword) {
        Alert.alert("Forgot Password", "Passwords do not match");
        return;
      }
  
      setLoading(true);
  
      // Simulate password reset
      // In a real app, this would update the database
      setTimeout(() => {
        setLoading(false);
        Alert.alert(
          "Password Reset",
          "Your password has been reset successfully",
          [{ text: "OK", onPress: () => router.replace("SignIn") }]
        );
      }, 1500);
    };
  
    return (
      <CustomKeyboardView>
        <View style={{ flex: 1 }}>
          <StatusBar style="dark" />
          <View
            style={{
              flex: 1,
              gap: 12,
              paddingTop: hp(8),
              paddingHorizontal: wp(5),
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ height: hp(25), resizeMode: "contain" }}
                source={require("../../assets/Logo.png")}
              />
            </View>
  
            <View style={{ gap: 10 }}>
              <Text
                style={{
                  fontSize: hp(4),
                  fontWeight: "bold",
                  letterSpacing: 1.5,
                  textAlign: "center",
                  color: "rgb(38, 38, 38)",
                }}
              >
                {step === 1 ? "Forgot Password" : "Reset Password"}
              </Text>
  
              {step === 1 ? (
                // Step 1: Enter username
                <>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "rgb(100, 100, 100)",
                      marginBottom: hp(2),
                    }}
                  >
                    Enter your username to reset your password
                  </Text>
  
                  <View
                    style={{
                      height: hp(7),
                      flexDirection: "row",
                      gap: 16,
                      backgroundColor: "#f5f5f5",
                      alignItems: "center",
                      borderRadius: 16,
                      padding: 16,
                      marginBottom: hp(2),
                    }}
                  >
                    <Octicons name="person" size={hp(2.7)} color="gray" />
                    <TextInput
                      onChangeText={setUsername}
                      value={username}
                      style={{
                        fontSize: hp(2),
                        flex: 1,
                        fontWeight: "600",
                        color: "rgb(64, 64, 64)",
                        backgroundColor: "#f5f5f5",
                      }}
                      placeholder="Username"
                      placeholderTextColor={"gray"}
                    />
                  </View>
  
                  <View>
                    {loading ? (
                      <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Loading size={hp(20)} />
                      </View>
                    ) : (
                      <TouchableOpacity
                        onPress={handleFindUser}
                        style={{
                          height: hp(6.5),
                          backgroundColor: "#5244F3",
                          borderRadius: 15,
                          padding: 10,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: hp(2.7),
                            color: "#FFFFFF",
                            fontWeight: "bold",
                            letterSpacing: 0.8,
                          }}
                        >
                          Continue
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </>
              ) : (
                // Step 2: Enter new password
                <>
                  {foundUser && (
                    <Text
                      style={{
                        textAlign: "center",
                        color: "rgb(100, 100, 100)",
                        marginBottom: hp(2),
                      }}
                    >
                      Hi {foundUser.UserFirstname}, enter your new password below
                    </Text>
                  )}
  
                  <View
                    style={{
                      height: hp(7),
                      flexDirection: "row",
                      gap: 16,
                      backgroundColor: "#f5f5f5",
                      alignItems: "center",
                      borderRadius: 16,
                      padding: 16,
                      marginBottom: hp(2),
                    }}
                  >
                    <Octicons name="lock" size={hp(2.7)} color="gray" />
                    <TextInput
                      onChangeText={setNewPassword}
                      value={newPassword}
                      style={{
                        fontSize: hp(2),
                        flex: 1,
                        fontWeight: "600",
                        color: "rgb(64, 64, 64)",
                        backgroundColor: "#f5f5f5",
                      }}
                      placeholder="New Password"
                      placeholderTextColor={"gray"}
                      secureTextEntry
                    />
                  </View>
  
                  <View
                    style={{
                      height: hp(7),
                      flexDirection: "row",
                      gap: 16,
                      backgroundColor: "#f5f5f5",
                      alignItems: "center",
                      borderRadius: 16,
                      padding: 16,
                      marginBottom: hp(2),
                    }}
                  >
                    <Octicons name="lock" size={hp(2.7)} color="gray" />
                    <TextInput
                      onChangeText={setConfirmPassword}
                      value={confirmPassword}
                      style={{
                        fontSize: hp(2),
                        flex: 1,
                        fontWeight: "600",
                        color: "rgb(64, 64, 64)",
                        backgroundColor: "#f5f5f5",
                      }}
                      placeholder="Confirm Password"
                      placeholderTextColor={"gray"}
                      secureTextEntry
                    />
                  </View>
  
                  <View>
                    {loading ? (
                      <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Loading size={hp(20)} />
                      </View>
                    ) : (
                      <TouchableOpacity
                        onPress={handleResetPassword}
                        style={{
                          height: hp(6.5),
                          backgroundColor: "#5244F3",
                          borderRadius: 15,
                          padding: 10,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: hp(2.7),
                            color: "#FFFFFF",
                            fontWeight: "bold",
                            letterSpacing: 0.8,
                          }}
                        >
                          Reset Password
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </>
              )}
  
              <TouchableOpacity 
                onPress={() => router.replace("SignIn")}
                style={{ marginTop: hp(2) }}
              >
                <Text
                  style={{
                    fontSize: hp(1.8),
                    fontWeight: "600",
                    color: "#5244F3",
                    textAlign: "center",
                  }}
                >
                  Back to Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </CustomKeyboardView>
    );
  }