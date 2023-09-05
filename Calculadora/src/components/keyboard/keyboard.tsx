import React , { useState } from "react";
import { View } from "react-native";
import ButtonKey from "./buttonkey/buttonkey";
import stylekey from "./style.keyboard";
import Painel from "../painel/painel";
import ButtonCalc from "./buttonkey/buttonCalc";
import ButtonRes from "./buttonkey/buttonRes";

export default function KeyboardPersonal () {
    
    const [value, setValue] = useState<string>('')
    const [calc, setCalc] = useState<string>('')
    const [result, setResult] = useState<string>('0')
    const [toggle, setToggle] = useState<boolean>(false)
    const [list, setList] = useState<string[]>([])
    const [res, setRes] = useState<string>('-1')

    const handleAddValue = (text : string) => {
        if(toggle) {
            setToggle(false)
            setValue(text)
            setCalc(text)
        } else {
            setCalc(`${calc}${text}`)
            setValue(`${value}${text}`)
        }
    }
    const handleAddCalcs = (cal: string, val: string) => {
        if (toggle){
            setValue(`${result.slice(2)}${val}`)
            setCalc(`${result.slice(2)}${cal}`)
            setToggle(false)
            setRes(`${calc.length}`)
        } else {
            setCalc(`${calc}${cal}`)
            setValue(`${value}${val}`)
            setRes(`${calc.length}`)
        }
    }
        
    const handleCalcular = (x : string) => {
         if (x.endsWith('+')) {
            const calc : string = (`${x}0`)
            setResult(`= ${eval(calc)}`)
        } else if (x.endsWith('-')) {
            const calc : string = (`${x}0`)
            setResult(`= ${eval(calc)}`)
        } else if (x.endsWith('*')) {
            const calc : string = (`${x}1`)
            setResult(`= ${eval(calc)}`)
        } else if (x.endsWith('/')) {
            const calc : string = (`${x}1`)
            setResult(`= ${eval(calc)}`)
        } else {            
            setResult(`= ${eval(x)}`)
        }   
    }

    const handleBackSpace = () => {
            const backS : string = calc.slice(0,-1)
            const backv : string = value.slice(0,-1)
            if (value.length == 0 || calc.length == 0) {
                setValue('')
                setCalc('')
                setResult('0')
                setToggle(true)
            } else {
                setCalc(backS)
                setValue(backv)
            }
    }

    const handlePorCento = () => {
        if (res == '-1'){
            let x : string = (eval(`(${calc}/100)`))
            setCalc(x)
            setResult(x)
            setValue(x)
        } else {
            if (res == '-2') {
                let x : string = eval(`${result.slice(2)}/100`)
                setCalc(x)
                setResult(x)
                setValue(x)
                setToggle(false)
            } else {
                let slice : number = eval(`${res} - ${calc.length} + 1`)
                let a : string = calc.slice(0,eval(`${res}+1`))
                let b : string = calc.slice(slice)
                let c : string = `${a}${eval(`${b}/100`)}`
                let x : string = value.slice(0,eval(`${res}+1`))
                let y : string = value.slice(slice)
                let z : string = `${x}${eval(`${y}/100`)}`
                setCalc(c)
                setValue(z)
            }            
        }
    }

    return (
        <View style={stylekey.container}>
            <Painel 
                    list={list}
                    toggle={toggle}
                    status={value}
                    preStatus={result}
                />
            <View style={stylekey.subContainer}>
                <ButtonCalc 
                    label={'AC'}
                    onClick={()=>{
                        if (value === '' && calc === '' && result === '0') {
                            setList([])
                        } else {
                            setValue('')  
                            setCalc('')                      
                            setResult('0')
                            setToggle(true)
                        }
                    }}
                />
                <ButtonCalc
                    label={'<='}
                    onClickIn={()=>handleBackSpace()}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonCalc 
                    label={'%'}
                    onClick={()=>handlePorCento()}
                />
                <ButtonCalc 
                    label={'÷'}
                    onClickIn={()=>handleAddCalcs('/', '÷')}                     
                />
            </View>
            <View style={stylekey.subContainer}>
                <ButtonKey 
                    label={'7'}
                    onClickIn={()=>handleAddValue('7')}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonKey 
                    label={'8'}
                    onClickIn={()=>handleAddValue('8')}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonKey 
                    label={'9'}
                    onClickIn={()=>handleAddValue('9')}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonCalc 
                    label={'x'}
                    onClickIn={()=>handleAddCalcs('*','x')}
                />
            </View>
            <View style={stylekey.subContainer}>
                <ButtonKey 
                    label={'4'}
                    onClickIn={()=>handleAddValue('4')}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonKey 
                    label={'5'}
                    onClickIn={()=>handleAddValue('5')}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonKey 
                    label={'6'}
                    onClickIn={()=>handleAddValue('6')}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonCalc 
                    label={'-'}
                    onClick={()=>handleAddCalcs('-', '-')}
                />
            </View>
            <View style={stylekey.subContainer}>
                <ButtonKey 
                    label={'1'}
                    onClickIn={()=>handleAddValue('1')}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonKey 
                    label={'2'}
                    onClickIn={()=>handleAddValue('2')}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonKey 
                    label={'3'}
                    onClickIn={()=>handleAddValue('3')}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonCalc 
                    label={'+'}
                    onClick={()=>handleAddCalcs('+','+')}
                />
            </View>
            <View style={stylekey.subContainer}>
                <ButtonKey 
                    label={'0'}
                    onClickIn={()=>handleAddValue('0')}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonKey 
                    label={'.'}
                    onClick={()=>{
                        if (calc.includes('.')){
                            let slice : number = eval(`${res} - ${calc.length} + 1`)
                            let b : string = calc.slice(slice)
                            if (b.includes('.')){

                            } else {
                                if(toggle){
                                    handleAddValue('0.')
                                 } else (
                                     handleAddValue('.')
                                 )
                            }
                        } else {
                            if(toggle){
                               handleAddValue('0.')
                            } else (
                                handleAddValue('.')
                            )
                        }
                    }}
                />
                <ButtonRes 
                    label={'='}
                    onClickIn={()=>setList([...list, `${value}${result}`])}
                    onClick={()=>{
                        handleCalcular(calc)
                        setToggle(true)
                        setCalc('0')
                        setRes('-2')
                    }}
                />
                
            </View>
        </View>
    )
}