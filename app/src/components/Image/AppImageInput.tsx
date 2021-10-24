import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Color } from "../../config/Color";

export interface Props {
  imgUri: any;
  addImage: any;
  removeImage: any;
}

const AppImageInput: React.FC<Props> = ({ imgUri, addImage, removeImage }) => {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert("You need to enable permission go to setting and enable it");
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
        base64: true,
      });
      if (!result.cancelled) addImage(result);
    } catch (error) {
      console.log("Error reading image", error);
    }
  };

  const handlePress = () => {
    if (!imgUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want delete this image", [
        { text: "Yes", onPress: () => removeImage() },
        { text: "No" },
      ]);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        {!imgUri ? (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={Color.medium}
          />
        ) : (
          <Image source={{ uri: imgUri }} style={styles.image} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    width: 120,
    shadowColor: Color.light,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 7,
  },
  image: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
  },
});

export default AppImageInput;
