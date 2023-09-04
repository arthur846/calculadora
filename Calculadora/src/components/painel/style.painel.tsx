import { StyleSheet } from "react-native";

const StylePainel = StyleSheet.create({
    container:{
        height: 400,
    },
    status: {
        borderWidth: 2,
        borderColor: '#f0efed',
        borderRadius: 15,
        width: 310,
        margin: 3,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'right',
        color: 'white',        
        paddingRight: 8,
    },
    preStatus: {
        borderWidth: 2,
        borderColor: '#f0efed',
        borderRadius: 15,
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
        backgroundColor: 'blue',
        width: 310,
        color: 'gray',
        fontSize: 25,
        textAlign: 'right',
    },
})

export default StylePainel