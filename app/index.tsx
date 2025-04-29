import {StyleSheet, Text, View } from "react-native";

const usuarios = [
  {
    id: 1,
    nome: "Erika",
    cargo: "Professor"

  },
  {
    id: 2,
    nome: "Valentina",
    cargo: "Aluno"
  }
];
export default function Index() {
  return (
    <View
      style={style.container}
      >
      {
        usuarios.map(item => (
          <view style={fontStyle.itemLista}>
          <text style={style.textoLista}>{item.nome}</text>
          </view>
        ))
      }
      
    </View>
  );
}

const style = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  itemLista:{
    width: "100%",
    padding: 10,
    marginBottom: 2,
    backgroundColor: "blue"
  },

  textoLista:{
    fontSize: 20
  }
})
