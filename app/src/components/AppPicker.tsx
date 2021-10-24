import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppModal from "./AppModal";
import AppIcon from "./AppIcon";
import AppTextInput from "./AppTextInput";
import { Color } from "../config/Color";

export interface Props {
  placeholder: string;
  selectedItem: string;
  handleSelectItem: (item: string) => void;
}

const AppPicker: React.FC<Props> = ({
  placeholder,
  selectedItem,
  handleSelectItem,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const items: Array<string> = [
    "Festivals",
    "Parties",
    "Conferences",
    "Awards",
    "Competitions",
    "Sponsorships",
    "Workshops",
    "SpeakerSession",
  ];
  return (
    <>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <View style={styles.container}>
          <Ionicons name="apps" size={24} color={Color.blue} />
          <AppTextInput
            style={styles.textInput}
            //@ts-ignore
            defaultValue={selectedItem ? selectedItem : placeholder}
            clearButtonMode="never"
            editable={false}
          />
          <AppIcon
            name="chevron-down"
            color={Color.blue}
            backgroundColor={Color.white}
            size={40}
          />
        </View>
      </TouchableOpacity>
      <AppModal
        items={items}
        visible={showModal}
        handleClose={() => setShowModal(false)}
        handleSelectItem={handleSelectItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    shadowColor: Color.light,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    height: 70,
  },
  textInput: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
  },
});

export default AppPicker;
