import { TouchableOpacity, Text } from "react-native";
import stylebuttonkey from "./style.buttonkey";

interface IpropsButtonText {
    onClick?: ()=>void
    onClickIn?: ()=>void
    onClickOut?: ()=>void
    label: String
}

const ButtonRes : React.FC<IpropsButtonText> = ({onClick,  onClickIn, onClickOut, label})=>{
    return (
        <TouchableOpacity onPress={onClick} style={stylebuttonkey.button2} onPressIn={onClickIn} onPressOut={onClickOut}>
            <Text style={stylebuttonkey.text2}>{label}</Text>
        </TouchableOpacity>
    )
}

export default ButtonRes;