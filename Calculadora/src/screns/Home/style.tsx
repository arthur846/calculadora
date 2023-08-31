import { StyleSheet } from "react-native";

const StyleHome = StyleSheet.create ({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#212121',
    },
    subContainer:{
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#d6d6d6',
        width: '80%',
        height: 400,
        justifyContent: 'flex-end',
    },
    butContainer: {
        flexDirection: 'row',
    },
    text: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#d6d6d6',
        width: '80%',
        borderRadius: 10,
        marginTop: 60,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    but: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#fc9c14',
        width: 300,
        borderRadius: 10,
        marginTop: 10,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    txt: {
        marginTop: -10,
        margin: 3,
        fontSize: 45,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'right',
        paddingRight: 8,
    },
    input: {
        borderWidth: 2,
        borderColor: '#f0efed',
        borderRadius: 15,
        margin: 3,
        fontSize: 45,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'right',
        paddingRight: 8,
    },
    listContainer:{
        flex: 1,
    },
    item: {
        borderRadius: 5,
        fontSize: 25,
        margin: 2,
        textAlign: 'right',
        paddingRight: 5,
        backgroundColor: '#bfbebb',
        marginHorizontal: 5,
    },
})

export default StyleHome;