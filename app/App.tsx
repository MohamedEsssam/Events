import React from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import AppIcon from "./src/components/AppIcon";
import AppListItem from "./src/components/AppListItem";
import AppScreen from "./src/components/AppScreen";
import AppSearchItem from "./src/components/AppSearchItem";
import AppTag from "./src/components/AppTag";
import AppEventList from "./src/components/lists/AppEventList";
import AppTagsList from "./src/components/lists/AppTagsList";
import { Color } from "./src/config/Color";

const App: React.FC = () => {
  return (
    <>
      <AppSearchItem />
      <AppEventList
        items={[
          {
            title: "Stack Holder Meetup",
            tags: [
              { title: "festivals" },
              { title: "SpeakerSession" },
              { title: "Competitions" },
              { title: "Sponsorships" },
            ],
          },
          {
            title: "Product Design meeting",
            tags: [
              { title: "festivals" },
              { title: "SpeakerSession" },
              { title: "Competitions" },
              { title: "Sponsorships" },
            ],
          },
          {
            title: "Design Team Scrum Master",
            tags: [
              { title: "festivals" },
              { title: "SpeakerSession" },
              { title: "Competitions" },
              { title: "Sponsorships" },
            ],
          },
          {
            title: "Product Designer Meeting",
            tags: [
              { title: "festivals" },
              { title: "SpeakerSession" },
              { title: "Competitions" },
              { title: "Sponsorships" },
            ],
          },
          {
            title: "Cairokee musical Band",
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.light,
  },
});

export default App;
