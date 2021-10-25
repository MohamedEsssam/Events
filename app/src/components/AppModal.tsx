import React, { useState } from "react";
import { StyleSheet, Modal, FlatList } from "react-native";
import AppButton from "./AppButton";
import AppPickerItem from "./AppPickerItem";

import AppScreen from "./AppScreen";

export interface Props {
  items: Array<string>;
  visible: boolean;
  handleSelectItem: (items: Array<string>) => void;
  handleClose: () => void;
}

const AppModal: React.FC<Props> = ({
  items,
  visible,
  handleSelectItem,
  handleClose,
}) => {
  const [categories, setCategories] = useState<Array<string>>([]);
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
              items={categories}
              onPress={() => {
                if (categories.includes(item))
                  categories.splice(categories.indexOf(item, 0), 1);
                else categories.push(item);

                handleSelectItem(categories);
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
