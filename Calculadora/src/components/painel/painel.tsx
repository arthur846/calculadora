import { View, Text, FlatList } from "react-native";
import StylePainel from "./style.painel";

interface IpropsButtonText {
    status : string
    preStatus : string
    list: string[]
    toggle : boolean
}

const Painel : React.FC<IpropsButtonText> = ({status, preStatus, list, toggle})=>{
        const styleStatus = toggle ? StylePainel.status : StylePainel.preStatus
        const stylePreStatus = !toggle ? StylePainel.status : StylePainel.preStatus

        return (
            <View style={StylePainel.container}>
                <FlatList
                    data={list}
                    style={StylePainel.listContainer}
                    renderItem={({item})=>{
                        return(                            
                            <Text style={StylePainel.item}>{item}</Text>                            
                        )
                    }}
                />
                <Text style={styleStatus}>{status}</Text>
                <Text style={stylePreStatus}>{preStatus}</Text>
            </View>
        )
    }

export default Painel