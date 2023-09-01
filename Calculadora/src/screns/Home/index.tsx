import React , { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Keyboard } from "react-native";
import StyleHome from "./style";
import ButtonText from "../../components/txtButton/buttonText";
import KeyboardPersonal from "../../components/keyboard/keyboard";
import Painel from "../../components/painel/painel";

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