import React from "react";
import { View, Text } from "react-native";
import StyleHome from "./style";
import KeyboardPersonal from "../../components/keyboard/keyboard";


export default function Home() {
    return (
        <View style={StyleHome.container}>
            <Text style={StyleHome.text}>
                Calculadora
            </Text>                    
            <KeyboardPersonal/>      
        </View>
    )
}