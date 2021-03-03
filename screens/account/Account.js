import React, { Component, useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import { isUserLogged } from "../../utils/actions";

export default class Account extends Component {
  render() {
    const [login, setLogin] = useState(null);
    useEffect(() => {
      setLogin(isUserLogged());
    }, []);

    if (login === null) {
      return <Text> Cargando.... </Text>;
    }
    return login ? <UserLogged/> : <UserGuest/>
  }
}

const styles = StyleSheet.create({});
