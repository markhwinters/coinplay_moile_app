import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const handleBack = () => {
    router.push("./welcome");
  };
  return (
    <KeyboardAvoidingView className="flex-1 bg-[#075985]">
      <StatusBar />
      <TouchableOpacity onPress={handleBack}>
        <ArrowLeft size={24} color="#ffffff" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text>Welcome Back</Text>
          <Text>Sign in to continue your crypto journey</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
