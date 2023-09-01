import React from "react";
import { TouchableOpacity, Text } from "react-native";
import stylebuttonkey from "./style.buttonkey";

interface IpropsButtonText {
    onClick?: ()=>void
    onClickIn?: ()=>void
    onClickOut?: ()=>void
    label: String
}

const ButtonKey : React.FC<IpropsButtonText> = ({onClick,  onClickIn, onClickOut, label})=>{
    return (
        <TouchableOpacity onPress={onClick} style={stylebuttonkey.button} onPressIn={onClickIn} onPressOut={onClickOut}>
            <Text style={stylebuttonkey.text}>{label}</Text>
        </TouchableOpacity>
    )
}

export default ButtonKey;