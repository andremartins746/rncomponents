import React from "react";
import {Text,Image, StyleSheet} from 'react-native'
import { Entypo, Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { Cards } from "../Card";

export const Informacao = (props) => {
    return(
        <Animatable.View style={styles.conteiner}>

            <Animatable.View style={styles.content1}>
                <Cards titulo="Inventario" icon="box" Qtd={332} ValorTotal={"2.000,45"}/>
                <Cards titulo="Vendidos" icon="credit" Qtd={332} ValorTotal={"2.000,45"}/>
            </Animatable.View>

            <Animatable.View style={styles.content1}>
                <Cards titulo="A Pagar" icon="credit-card" Qtd={332} ValorTotal={"2.000,45"}/>
                <Cards titulo="Meu Lucro" icon="wallet" meuLucro={true} ValorTotal={"2.000,45"}/>
            </Animatable.View>
            
           
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    conteiner:{
        display:"flex",
        flexDirection:"column",
        marginRight:15
    },
    content1:{
        display:"flex",
        flexDirection:"row"
    }
})