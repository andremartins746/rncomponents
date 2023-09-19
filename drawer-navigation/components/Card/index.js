import React from "react";
import { Text, Image, StyleSheet,TouchableOpacity } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

export const Cards = (props) => {
  return (

    <Animatable.View style={styles.conteiner}>
      <Animatable.View style={styles.Header}>
        <Entypo name={props.icon} size={20} color={"#C8A787"} />
        <Animatable.Text style={styles.Titulo}>{props.titulo}</Animatable.Text>
      </Animatable.View>
      
      <Animatable.View style={styles.content}>
        <Animatable.View style={styles.contentQtd}>
          <Animatable.Text style={styles.Qtd}>{props.Qtd}</Animatable.Text>
          {props.meuLucro? <Animatable.Text style={{}}></Animatable.Text>: <Animatable.Text style={styles.texto}>Peças</Animatable.Text>}
        </Animatable.View>

        <Animatable.View style={styles.contentValorTotal}>
          <Animatable.Text style={styles.ValorTotal}>
            R$: {props.ValorTotal}
          </Animatable.Text>
        </Animatable.View>
      </Animatable.View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    width:175,
    height:175,
    backgroundColor:"#fff",
    padding:25,
    borderRadius:15,
    margin:10
  },
  Header:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  content:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    
  },
  Qtd:{
    fontWeight:"bold",
    fontSize:25
  },
  texto:{
    fontWeight:"600",
    fontSize:17
  },
  Titulo: {
    fontWeight: "bold",
    color: "#C8A787",
    fontSize: 17,
  },
  ValorTotal:{
    display:"flex",
    flexDirection:"row",
    fontWeight:"bold",
    fontSize:18,
    
  }
});
