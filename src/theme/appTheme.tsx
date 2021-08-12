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
        textAlign:"right",
        marginBottom: 10,
    },
    resultadoAnt: {
        color: 'white',
        fontSize: 30,
        textAlign:"right",
        opacity: .8
    },
    rows: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    }
});

export default styles;