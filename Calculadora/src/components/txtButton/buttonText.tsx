import React from "react";
import { StyleProp, TextStyle, TouchableOpacity, Text } from "react-native";
import StyleBut from "./styles.button";


interface IpropsButtonText {
    onClick?: ()=>void
    onClickIn?: ()=>void
    onClickOut?: ()=>void
    style?: StyleProp<TextStyle>
    label: String
}

const ButtonText : React.FC<IpropsButtonText> = ({onClick,  onClickIn, onClickOut, style, label})=>{
    return (
        <TouchableOpacity onPress={onClick} style={StyleBut.button} onPressIn={onClickIn} onPressOut={onClickOut}>
            <Text style={StyleBut.text}>{label}</Text>
        </TouchableOpacity>
    );
}

export default ButtonText;