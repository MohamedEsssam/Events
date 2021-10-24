import React from "react";
import { StyleSheet, Modal, FlatList } from "react-native";
import AppButton from "./AppButton";
import AppPickerItem from "./AppPickerItem";

import AppScreen from "./AppScreen";

export interface Props {
  items: Array<string>;
  visible: boolean;
  handleSelectItem: (item: string) => void;
  handleClose: () => void;
}

const AppModal: React.FC<Props> = ({
  items,
  visible,
  handleSelectItem,
  handleClose,
}) => {
  return (
    <Modal visible={visible} animationType="slide">
      <AppScreen>
        <AppButton title="Close" onPress={handleClose} />
        <FlatList
          data={items}
          keyExtractor={(item: string) => item}
          renderItem={({ item }) => (
            <AppPickerItem
              label={item}
              onPress={() => {
                handleSelectItem(item);
                handleClose();
              }}
            />
          )}
        />
      </AppScreen>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default AppModal;
