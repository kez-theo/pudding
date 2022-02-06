import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, TouchableOpacity, Text, ImageBackground } from "react-native";
import { logout } from "../store/auth";
import { auth } from "../firebaseAuth/firebase";

const Logout = (props) => {
  const navigation = props.navigation;
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.user);

  const onPressButton = async () => {
    try {
      await auth.signOut();
      dispatch(logout());
      props.navigation.navigate(LOGIN);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.buttonLarge} onPress={onPressButton}>
        <Text style={styles.buttonLargeText}>Logout</Text>
      </TouchableOpacity>
      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
};

export default Logout;