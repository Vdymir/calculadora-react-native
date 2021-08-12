import React, { useRef, useState } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import BtnCalc from '../components/BtnCalc'
import useCalc from '../hooks/useCalc'
import styles from '../theme/appTheme'




const CalculadoraScreen = () => {
    
    const { num,
        numAnt,
        c,
        buildnumber,
        btnDelete,
        positivonegativo,
        btnDividir,
        btnMultiplicar,
        btnSumar, 
        btnRestar,
        calcular} = useCalc();
    
    return (
        <View style={styles.calculardoraContainer}>  
            {
                numAnt !== '0' &&
                <Text style={styles.resultadoAnt}>{ numAnt }</Text>  
            }
            <Text 
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >{ num }</Text>  

            {/**Filas btn */}
            <View style={ styles.rows}>
                {/** Botones */}
                <BtnCalc txt="c" color="#9b9b9b" action={c}/>
                <BtnCalc txt="+/-" color="#9b9b9b" action={ positivonegativo }/>
                <BtnCalc txt="del" color="#9b9b9b" action={ btnDelete }/>
                <BtnCalc txt="/" color="#ff9427" action={ btnDividir }/>
            </View>
             {/**Filas btn */}
             <View style={ styles.rows}>
                {/** Botones */}
                <BtnCalc txt="7" action={ buildnumber }/>
                <BtnCalc txt="8" action={ buildnumber }/>
                <BtnCalc txt="9" action={ buildnumber }/>
                <BtnCalc txt="x" color="#ff9427" action={ btnMultiplicar }/>
            </View>
            <View style={ styles.rows}>
                {/** Botones */}
                <BtnCalc txt="4" action={ buildnumber }/>
                <BtnCalc txt="5" action={ buildnumber }/>
                <BtnCalc txt="6" action={ buildnumber }/>
                <BtnCalc txt="+" color="#ff9427" action={ btnSumar }/>
            </View>
            <View style={ styles.rows}>
                {/** Botones */}
                <BtnCalc txt="1" action={ buildnumber }/>
                <BtnCalc txt="2" action={ buildnumber }/>
                <BtnCalc txt="3" action={ buildnumber }/>
                <BtnCalc txt="-" color="#ff9427" action={ btnRestar }/>
            </View><View style={ styles.rows}>
                {/** Botones */}
                <BtnCalc txt="0" ancho action={ buildnumber }/>
                <BtnCalc txt="." action={ buildnumber }/>
                <BtnCalc txt="=" color="#ff9427" action={ calcular }/>
            </View>
        </View> 
    )
}

export default CalculadoraScreen