import { StyleSheet } from "react-native";

const StylePainel = StyleSheet.create({
    container:{
        height: 400,
    },
    status: {
        width: 310,
        margin: 3,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'right',
        color: 'white',        
        paddingRight: 8,
    },
    preStatus: {
        width: 310,
        margin: 3,
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'right',
        color: 'white',
        paddingRight: 8,
    },
    listContainer:{
        width: '100%',
        height: 200,
        flexDirection: 'column-reverse',
    },
    item:{
        width: 310,
        color: 'gray',
        fontSize: 25,
        textAlign: 'right',
    },
})

export default StylePainel