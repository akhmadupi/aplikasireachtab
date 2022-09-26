import { Text, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.lightHeader }>Jual Rumah11</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginHorizontal: 25,
    },

    lightHeader: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign:"center"
    },

});