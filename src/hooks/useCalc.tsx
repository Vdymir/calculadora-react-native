import { useRef, useState } from "react";

enum Operaciones {
    sumar, restar, multiplicar, dividir
}

const useCalc = () => {

    const [num, setNum] = useState('0');
    const [numAnt, setNumAnt] = useState('0');
    const lastOperation = useRef<Operaciones>()
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
    // Funciòn para el btn 'del'
    const btnDelete = () => {
 
        if( num.length === 1 || (num.length === 2 && num.includes('-'))){
            return setNum( '0' );
        }
 
        setNum( num => num.slice(0, -1)  )
 
    }
    // Funciòn para cambiar el signo
    const positivonegativo = () => {
        if(num.includes('-')) { setNum(num.replace('-', ''));
        }   else {
                setNum('-' + num)
            }
    }
    // Funciòn para el numero anterior
    const changueToNumAnt = () => {
        if(num.endsWith('.')) {
            setNumAnt(num.slice(0,-1));
        } else {
            setNumAnt(num);
        }
        setNum('0')
    }
    // Funciòn para el btn '/'
    const btnDividir = () => {
        changueToNumAnt();
        lastOperation.current = Operaciones.dividir
    }
    // Funciòn para el btn '*'
    const btnMultiplicar = () => {
        changueToNumAnt();
        lastOperation.current = Operaciones.multiplicar
    }
    // Funciòn para el btn '+'
    const btnSumar = () => {
        changueToNumAnt();
        lastOperation.current = Operaciones.sumar
    }
    // Funciòn para el btn '-'
    const btnRestar = () => {
        changueToNumAnt();
        lastOperation.current = Operaciones.restar
    }
    // Funciòn para el btn '='
    const calcular = () => {
        const num1 = Number(num);
        const num2 = Number(numAnt);

        switch (lastOperation.current) {
            case Operaciones.dividir:
                setNum(`${ num2 / num1}`)
                break;
            case Operaciones.multiplicar:
                setNum(`${ num1 * num2}`)
                break;
            case Operaciones.sumar:
                setNum(`${ num1 + num2}`)
                break;
            case Operaciones.restar:
                setNum(`${ num1 - num1}`)
                break;
        
            default: 
                break;
        }
        setNumAnt('0')
    }
    return {
        num,
        numAnt,
        c,
        buildnumber,
        btnDelete,
        positivonegativo,
        btnDividir,
        btnMultiplicar,
        btnSumar, 
        btnRestar,
        calcular
    }
}
export default useCalc

