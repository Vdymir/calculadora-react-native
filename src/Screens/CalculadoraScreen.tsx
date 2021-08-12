import React from 'react'
import {View, Text} from 'react-native'
import styles from '../theme/appTheme'

const CalculadoraScreen = () => {
    return (
        <View style={styles.calculardoraContainer}>  
            <Text style={styles.resultadoAnt}>1.500.000</Text>  
            <Text style={styles.resultado}>1.500.000</Text>  

            {/**Botones */}

            <View>
                <View style={styles.boton}>
                    <Text style={styles.botonText}>1</Text>
                </View>
            </View>
        </View> 
    )
}

export default CalculadoraScreen
