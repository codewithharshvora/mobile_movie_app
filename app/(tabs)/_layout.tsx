import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const tabs = [
  {
    name: "index",
    icon: icons.home,
    title: "Home",
  },
  {
    name: "search",
    icon: icons.search,
    title: "Search",
  },
  {
    name: "saved",
    icon: icons.save,
    title: "Save",
  },
  {
    name: "profile",
    icon: icons.person,
    title: "Profile",
  },
];

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor="#151312" className="size-5" />
        <Text className="text-seconday text-base font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center  rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-5" />
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarIconStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      {tabs.map((tab) => {
        return (
          <Tabs.Screen
            name={tab.name}
            options={{
              title: tab.title,
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={tab.icon} title={tab.title} />
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default _layout;
