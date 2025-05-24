import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ArrowLeft } from "lucide-react-native";
import * as React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignupScreen() {
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
          <Text>Create Account</Text>
          <Text>Start your crypto learning journey</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
