import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from "react-native";
import { useAuth } from "../Context/authContext";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native"; // ✅ Use this instead of `useRouter()`
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Octicons } from "@expo/vector-icons";
import CustomKeyboardView from "../Component/customKeyboard";
import Loading from "../Component/Loading";
import { Feather } from "@expo/vector-icons";

export default function SignUp() {
  const navigation = useNavigation();
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");

  const handleRegister = async () => {
    if (!email || !password || !username) {
      Alert.alert("Sign Up", "Please fill all the fields!");
      return;
    }

    setLoading(true);
    const response = await register(email, password, username, "");
    setLoading(false);

    if (!response.success) {
      Alert.alert("Sign Up", response.msg);
    } else {
      Alert.alert("Success", "Account created! Please log in.");
      navigation.navigate("SignIn");
    }
  };

  {
    /* Sign up process */
  }
  return (
    <CustomKeyboardView>
      <StatusBar style="dark" />
      <View
        style={{
          flex: 1,
          gap: 12,
          paddingTop: hp(7),
          paddingHorizontal: wp(5),
        }}
      >
        <View style={{ alignItems: "center" }}>
          {/*SignIn image */}
          <Image
            style={{ height: hp(25), resizeMode: "contain" }}
            source={require("../../assets/Logo.png")}
          />
        </View>

        <View style={{ gap: 10 }}>
          <Text
            style={{
              fontSize: hp(4),
              fontWeight: "bold", // font-bold
              letterSpacing: 1.5, // tracking-wider (adjust the value as needed)
              textAlign: "center", // text-center
              color: "rgb(38, 38, 38)", // text-neutral-800 (Hex value for Tailwind neutral-800)
            }}
          >
            Sign Up
          </Text>
          {/*SignIn inputs and colours*/}
          <View
            style={{
              height: hp(7),
              flexDirection: "row",
              gap: 16, // Equivalent to `gap-4` (4 * 4px = 16px)
              backgroundColor: "#f5f5f5", // Equivalent to `bg-neutral-100`
              alignItems: "center", // Equivalent to `items-center`
              borderRadius: 16, // Equivalent to `rounded-2xl` (2xl is 16px in Tailwind)
              padding: 16,
            }}
          >
            <Feather name="user" size={hp(2.7)} color="gray" />
            <TextInput
              onChangeText={(value) => (usernameRef.current = value)}
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

          <View
            style={{
              height: hp(7),
              flexDirection: "row",
              gap: 16, // Equivalent to `gap-4` (4 * 4px = 16px)
              backgroundColor: "#f5f5f5", // Equivalent to `bg-neutral-100`
              alignItems: "center", // Equivalent to `items-center`
              borderRadius: 16, // Equivalent to `rounded-2xl` (2xl is 16px in Tailwind)
              padding: 16,
            }}
          >
            <Octicons name="mail" size={hp(2.7)} color="gray" />
            <TextInput
              onChangeText={(value) => (emailRef.current = value)}
              style={{
                fontSize: hp(2),
                flex: 1,
                fontWeight: "600",
                color: "rgb(64, 64, 64)",
                backgroundColor: "#f5f5f5",
              }}
              placeholder="Email"
              placeholderTextColor={"gray"}
            />
          </View>
          <View
            style={{
              height: hp(7),
              flexDirection: "row",
              gap: 16, // Equivalent to `gap-4` (4 * 4px = 16px)
              backgroundColor: "#f5f5f5", // Equivalent to `bg-neutral-100`
              alignItems: "center", // Equivalent to `items-center`
              borderRadius: 16, // Equivalent to `rounded-2xl` (2xl is 16px in Tailwind)
              padding: 16,
            }}
          >
            <Octicons name="lock" size={hp(2.7)} color="gray" />
            <TextInput
              onChangeText={(value) => (passwordRef.current = value)}
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

          {/*submit button */}
          <View>
            {loading ? (
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Loading size={hp(20)} />
              </View>
            ) : (
              <TouchableOpacity
                onPress={handleRegister}
                style={{
                  height: hp(6.5),
                  backgroundColor: "#6366F1", // Equivalent to bg-indigo-500
                  borderRadius: 15, // Equivalent to rounded
                  padding: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: hp(2.7),
                    color: "#FFFFFF", // Equivalent to text-white
                    fontWeight: "bold", // Equivalent to font-bold
                    letterSpacing: 0.8,
                  }}
                >
                  Continue
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/* sign up text*/}
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text
              style={{
                fontSize: hp(1.8),
                fontWeight: "600",
                color: "#737373",
              }}
            >
              Already have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate("SignIn")}>
              <Text
                style={{
                  fontSize: hp(1.8),
                  color: "#6366F1",
                  fontWeight: "600",
                  paddingLeft: 4,
                }}
              >
                Sign in
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
}
