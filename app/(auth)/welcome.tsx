import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ArrowRight, Coins, TrendingUp, Trophy } from "lucide-react-native";
import { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

export default function WelcomeScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to CryptoPlay",
      description:
        "Learn crypto trading in a fun, risk-free environment with $10,000 in virtual currency.",
      icon: <Coins size={48} color="#0ea5e9" />,
    },
    {
      title: "Build Your Portfolio",
      description:
        "Invest in real cryptocurrencies using live market data without risking real money.",
      icon: <TrendingUp size={48} color="#0ea5e9" />,
    },
    {
      title: "Compete & Learn",
      description:
        "Join leaderboards, earn badges, and become a better investor through practice.",
      icon: <Trophy size={48} color="#0ea5e9" />,
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      router.replace("/(auth)/login");
    }
  };

  return (
    <View className="flex-1 bg-[#075985]">
      <StatusBar />
      <View className="flex-1 justify-between p-[24] pt-[100] pb-[50]">
        <View className="flex justify-center items-center">
          <View className="w-[80] h-[80] border-r-[40] justify-center items-center mb-[24]">
            {slides[currentSlide].icon}
          </View>
          <Text className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            {slides[currentSlide].title}
          </Text>
          <Text className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            {slides[currentSlide].description}
          </Text>
        </View>

        <View>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                {
                  backgroundColor:
                    currentSlide === index
                      ? "#ffffff"
                      : "rgba(255, 255, 255, 0.4)",
                },
              ]}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={nextSlide}
          className="flex-row justify-center items-center rounded-md bg-white/100 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-white/50"
        >
          <Text className="text-dark">
            {currentSlide < slides.length - 1 ? "Next" : "Get Started"}
          </Text>
          <ArrowRight size={20} color="#000000" className="ml-2" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
