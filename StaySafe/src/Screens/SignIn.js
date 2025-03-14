import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from "react-native";
import { useAuth } from "../Context/authContext";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native"; 
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Octicons } from "@expo/vector-icons";
import CustomKeyboardView from "../Component/customKeyboard";
import Loading from "../Component/Loading";

export default function SignIn() {
  const navigation = useNavigation(); 
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Sign In", "Please fill all the fields!");
      return;
    }

    setLoading(true);
    const response = await login(email, password);
    setLoading(false);

    if (!response.success) {
      Alert.alert("Sign In", response.msg);
    }
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
              Sign In
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
              }}
            >
              <Octicons name="mail" size={hp(2.7)} color="gray" />
              <TextInput
                value={email}
                onChangeText={setEmail}
                style={{
                  fontSize: hp(2),
                  flex: 1,
                  fontWeight: "600",
                  color: "rgb(64, 64, 64)",
                  backgroundColor: "#f5f5f5",
                }}
                placeholder="Email address"
                placeholderTextColor={"gray"}
              />
            </View>

            <View style={{ gap: 10 }}>
              <View
                style={{
                  height: hp(7),
                  flexDirection: "row",
                  gap: 16,
                  backgroundColor: "#f5f5f5",
                  alignItems: "center",
                  borderRadius: 16,
                  padding: 16,
                }}
              >
                <Octicons name="lock" size={hp(2.7)} color="gray" />
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  style={{
                    fontSize: hp(2),
                    flex: 1,
                    fontWeight: "600",
                    color: "rgb(64, 64, 64)",
                    backgroundColor: "#f5f5f5",
                  }}
                  placeholder="Password"
                  placeholderTextColor={"gray"}
                  secureTextEntry
                />
              </View>
              <Text
                style={{
                  fontSize: hp(1.8),
                  fontWeight: "600",
                  textAlign: "right",
                  color: "#737373",
                }}
              >
                Forgot password?
              </Text>
            </View>

            <View>
              {loading ? (
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <Loading size={hp(20)} />
                </View>
              ) : (
                <TouchableOpacity
                  onPress={handleLogin}
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
                    }}
                  >
                    Sign In
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: hp(1.8),
                  fontWeight: "600",
                  color: "#737373",
                }}
              >
                Don't have an account?
              </Text>
              <Pressable onPress={() => navigation.navigate("SignUp")}>
                <Text
                  style={{
                    fontSize: hp(1.8),
                    color: "#5244F3",
                    fontWeight: "600",
                    paddingLeft: 4,
                  }}
                >
                  Sign Up
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
