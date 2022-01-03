import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import AppUserCard from "../components/AppUserCard";
import { ParticipantServices } from "../services/ParticipantServices";
import { useAuth } from "../auth/auth";
import Participant from "../entities/Participant";

export interface Props {}

const service = new ParticipantServices();
const ParticipantAccountScreen: React.FC<Props> = (props) => {
  const { user, setUser } = useAuth();
  const [currentUser, setCurrentUser] = useState<Participant | null>();
  const getCurrentUser = async () => {
    const { data: currentUser } = await service.getOne(user["_id"]);
    setCurrentUser(currentUser);
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <View style={styles.container}>
      <AppUserCard
        user={{
          verified: currentUser?.verified,
          name: currentUser?.firstName + " " + currentUser?.lastName,
        }}
        setUser={setUser}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ParticipantAccountScreen;
