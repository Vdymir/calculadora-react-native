import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

interface btnProps {
    txt:string;
    color?:string;
    ancho?:boolean;
    action: ( numeroTxt :string) => void;
}

const BtnCalc = ({ txt, color = "#2d2d2d", ancho = false, action }:btnProps) => {
    return (
        <TouchableOpacity onPress={() => action(txt)}>
            <View style={{
                ...styles.boton ,
                backgroundColor: color,
                width: ancho ? 180 : 80
            }}>
                <Text style={{
                    ...styles.botonText,
                    color: (color === '#9b9b9b') ? 'black' : 'white',
                }}>{ txt }</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BtnCalc

{/** 
    colores:
        -GrisOscuro: #2d2d2d
        -Naranja: #ff9427
        -grisClaro: #9b9b9b
*/}
const styles = StyleSheet.create({
    boton: {
        width: 80,
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonText: {
        color: '#FFF',
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 'bold'
    },
})
