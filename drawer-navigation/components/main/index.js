import React from "react";
import {Text,Image, StyleSheet} from 'react-native'
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import Logo from '../../assets/Logo2Ingrid.png'
import { Entypo, Feather } from "@expo/vector-icons";


export const Main = ()=> {
    return(
            <LinearGradient
                style={styles.conteiner}
                colors={["#C8A787","#0C765E",]}
            >
        <Animatable.View style={styles.conteiner} 
            delay={800}
            animation={"fadeInLeft"} 
        >
            <Animatable.View style={styles.imgConteiner}>
                <Animatable.View style={styles.progresso}>
                <Image source={Logo} style={styles.imgLogo}></Image>

                </Animatable.View>
            </Animatable.View>
            <Animatable.View style={styles.NameConteiner}>
                <Animatable.Text style={styles.Name}>
                    Olá, Ingrid!
                </Animatable.Text>
            </Animatable.View>
            <Animatable.View style={styles.Datainicio_Fim_Conteiner}>
                <Animatable.Text style={styles.Datainicio_Fim}>
                    09/09/2023 á 11/10/2023
                </Animatable.Text>
            </Animatable.View>
            <Animatable.View style={styles.CicloEAcertoConteiner}>
                <Animatable.View style={styles.CicloConteiner}>
                    <Entypo
                    name="clock"
                    size={20}
                    color={'#C8A787'}
                    />
                    <Text style={styles.Titlo}>Ciclo: </Text>
                    <Text style={{fontSize:12,fontWeight:500,color: "#fff"}}>12 a 35</Text>
                </Animatable.View>
                <Animatable.View style={styles.AcertoConteiner}>
                <Entypo
                    name="calendar"
                    size={20}
                    color={'#C8A787'}
                    />
                    <Text style={styles.Titlo}>Acerto: </Text>
                    <Text style={{fontSize:12,fontWeight:500,color: "#fff"}}>11/10/2023 ás 08:00</Text>
                </Animatable.View>
            </Animatable.View>
        </Animatable.View>
            </LinearGradient>
    )
}


const styles = StyleSheet.create({
    conteiner:{
        // backgroundColor:"#0C765E",
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
    },
    imgConteiner:{
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        paddingTop:15,
        
    },
    imgLogo:{
        width:120,
        height:120,
        borderRadius:70
    },
    progresso:{
        borderWidth:3,
        borderRadius:80,
        borderColor:"#0C765E",
        padding:2
    },
    NameConteiner:{
        paddingTop:15,
        paddingBottom:9
    },
    Name:{
        fontSize:18,
        fontWeight: 500,
        color: "#fff"

        
    },
    Datainicio_Fim_Conteiner:{
        paddingBottom:9     
    },
    Datainicio_Fim:{
        color: "#C8A787"

    },
    CicloEAcertoConteiner:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:15,
    },

    CicloConteiner:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingRight:18
    },
    AcertoConteiner:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    Titlo:{
        paddingLeft:8,
        fontSize:15,
        fontWeight:500,
        color: "#C8A787"
    },


})