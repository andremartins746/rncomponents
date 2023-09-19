import { View, Text } from 'react-native'
import React from 'react'
import * as Animatable from "react-native-animatable";

import { Main } from '../components/main';
import { Informacao } from '../components/Informacao';

export default function Home() {
  return (
    <Animatable.View delay={700}
      animation={"fadeIn"} 
      style={{}}
    >
     <Main/>
     <Informacao/>


    </Animatable.View>
  )
}