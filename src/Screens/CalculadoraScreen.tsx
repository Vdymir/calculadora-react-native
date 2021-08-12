import React, { useState } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import BtnCalc from '../components/BtnCalc'
import styles from '../theme/appTheme'

const CalculadoraScreen = () => {
    
    const [num, setNum] = useState('100');
    const [numAnt, setNumAnt] = useState('100');

    const c = ():void => {
        setNum('0');
        setNumAnt('0');
    }
    const buildnumber = (txt:string) => {
         // Validar Punto
         if(num.includes('.') && txt === '.') return;

         if (num.startsWith('0') || num.startsWith('-0')) {
             if(txt === '.') {
                 setNum(num + txt)
             } else if ( txt === '0' && num.includes('.')) {
                 setNum(num + txt)
             } else if (txt !== '0' && !num.includes('.')) {
                 setNum(txt)
             } else if (txt === '0' && !num.includes('.')) {
                 setNum(num)
             } else {
                setNum(num + txt)
             }
         } else {
            setNum(num + txt)
         }
    }

    const btnDelete = () => {
 
        if( num.length === 1 || (num.length === 2 && num.includes('-'))){
            return setNum( '0' );
        }
 
        setNum( num => num.slice(0, -1)  )
 
    }
    const positivonegativo = () => {
        if(num.includes('-')) { setNum(num.replace('-', ''));
        }   else {
                setNum('-' + num)
            }
    }
    
    return (
        <View style={styles.calculardoraContainer}>  
            <Text style={styles.resultadoAnt}>{ numAnt }</Text>  
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
                <BtnCalc txt="/" color="#ff9427" action={ c }/>
            </View>
             {/**Filas btn */}
             <View style={ styles.rows}>
                {/** Botones */}
                <BtnCalc txt="7" action={ buildnumber }/>
                <BtnCalc txt="8" action={ buildnumber }/>
                <BtnCalc txt="9" action={ buildnumber }/>
                <BtnCalc txt="x" color="#ff9427" action={ c }/>
            </View>
            <View style={ styles.rows}>
                {/** Botones */}
                <BtnCalc txt="4" action={ buildnumber }/>
                <BtnCalc txt="5" action={ buildnumber }/>
                <BtnCalc txt="6" action={ buildnumber }/>
                <BtnCalc txt="+" color="#ff9427" action={ c }/>
            </View>
            <View style={ styles.rows}>
                {/** Botones */}
                <BtnCalc txt="1" action={ buildnumber }/>
                <BtnCalc txt="2" action={ buildnumber }/>
                <BtnCalc txt="3" action={ buildnumber }/>
                <BtnCalc txt="-" color="#ff9427" action={ c }/>
            </View><View style={ styles.rows}>
                {/** Botones */}
                <BtnCalc txt="0" ancho action={ buildnumber }/>
                <BtnCalc txt="." action={ buildnumber }/>
                <BtnCalc txt="=" color="#ff9427" action={ c }/>
            </View>
        </View> 
    )
}

export default CalculadoraScreen
