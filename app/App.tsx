import React from "react";
import { StyleSheet, View } from "react-native";

import AppIcon from "./src/components/AppIcon";
import AppListItem from "./src/components/AppListItem";
import AppScreen from "./src/components/AppScreen";
import AppTag from "./src/components/AppTag";
import AppEventList from "./src/components/lists/AppEventList";
import AppTagsList from "./src/components/lists/AppTagsList";
import { Color } from "./src/config/Color";

const App: React.FC = () => {
  return (
    <AppScreen>
      <AppEventList
        items={[
          {
            title: "New Event",
            tags: [
              { title: "festivals" },
              { title: "SpeakerSession" },
              { title: "Competitions" },
              { title: "Sponsorships" },
            ],
          },
          {
            title: "New Event1",
            tags: [
              { title: "festivals" },
              { title: "SpeakerSession" },
              { title: "Competitions" },
              { title: "Sponsorships" },
            ],
          },
          {
            title: "New Event2",
            tags: [
              { title: "festivals" },
              { title: "SpeakerSession" },
              { title: "Competitions" },
              { title: "Sponsorships" },
            ],
          },
          {
            title: "New Event3",
            tags: [
              { title: "festivals" },
              { title: "SpeakerSession" },
              { title: "Competitions" },
              { title: "Sponsorships" },
            ],
          },
          {
            title: "New Event4",
            tags: [
              { title: "festivals" },
              { title: "SpeakerSession" },
              { title: "Competitions" },
              { title: "Sponsorships" },
            ],
          },
          {
            title: "New Event5",
            tags: [
              { title: "festivals" },
              { title: "SpeakerSession" },
              { title: "Competitions" },
              { title: "Sponsorships" },
            ],
          },
          {
            title: "New Event6",
            tags: [
              { title: "festivals" },
              { title: "SpeakerSession" },
              { title: "Competitions" },
              { title: "Sponsorships" },
            ],
          },
        ]}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.light,
  },
});

export default App;
