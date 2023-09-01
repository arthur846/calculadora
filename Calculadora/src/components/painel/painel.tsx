import { View, Text, FlatList } from "react-native";
import StylePainel from "./style.painel";

interface IpropsButtonText {
    status : string
    preStatus : string
    list: string[]
    toggle : boolean
}

const Painel : React.FC<IpropsButtonText> = ({status, preStatus, list})=>{
        return (
            <View style={StylePainel.container}>
                <FlatList
                    data={list}
                    style={StylePainel.listContainer}
                    renderItem={({item})=>{
                        return(                            
                            <Text>{item}</Text>                            
                        )
                    }}
                />
                <Text style={StylePainel.status}>{status}</Text>
                <Text style={StylePainel.preStatus}>{preStatus}</Text>
            </View>
        )
    }

export default Painel