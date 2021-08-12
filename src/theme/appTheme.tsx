import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculardoraContainer:{
        paddingHorizontal:20,
        flex: 1,
        justifyContent:"flex-end"
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign:"right"
    },
    resultadoAnt: {
        color: 'white',
        fontSize: 30,
        textAlign:"right",
        opacity: .8
    },
    boton: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: '#9b9b9b',
        justifyContent: 'center'
    },
    botonText: {
        color: 'black',
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default styles;