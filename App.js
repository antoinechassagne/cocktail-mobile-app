import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  ApplicationProvider,
  ApplicationContext,
} from "./domain/application.store";
import {
  fetchCocktail,
  fetchCocktailById,
} from "./domain/cocktail/cocktail.actions";
import {
  addToFavorites,
  removeFromFavorites,
} from "./domain/favorites/favorites.actions";

function Main() {
  const { state, dispatch } = React.useContext(ApplicationContext);

  React.useEffect(() => {
    fetchCocktail(dispatch, state.favorites);
  }, [dispatch, state.favorites]);

  return (
    <View style={styles.container}>
      {(state.pending || !state.cocktail) && <Text>Chargement...</Text>}
      {state.cocktail && state.cocktail.strDrink}
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <ApplicationProvider>
      <Main />
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
