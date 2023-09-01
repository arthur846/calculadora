import { TouchableOpacity, Text } from "react-native";
import stylebuttonkey from "./style.buttonkey";

interface IpropsButtonText {
    onClick?: ()=>void
    onClickIn?: ()=>void
    onClickOut?: ()=>void
    label: String
}

const ButtonCalc : React.FC<IpropsButtonText> = ({onClick,  onClickIn, onClickOut, label})=>{
    return (
        <TouchableOpacity onPress={onClick} style={stylebuttonkey.button1} onPressIn={onClickIn} onPressOut={onClickOut}>
            <Text style={stylebuttonkey.text1}>{label}</Text>
        </TouchableOpacity>
    )
}

export default ButtonCalc;