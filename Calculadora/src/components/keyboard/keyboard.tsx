import React , { useState } from "react";
import { View, Text, TextInput} from "react-native";
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
        
    const handleCalcular = (x : string) => {
        if(x.length == 0) {
            setToggle(false)
            setResult('0')
        } else {
            if (x.endsWith('+')) {
                const calc : string = (`${x}0`)
                console.log(calc)
                setToggle(false)
                setResult(`= ${eval(calc)}`)
            } else if (x.endsWith('-')) {
                const calc : string = (`${x}0`)
                console.log(calc)
                setToggle(false)
                setResult(`= ${eval(calc)}`)
            } else if (x.endsWith('*')) {
                const calc : string = (`${x}1`)
                console.log(calc)
                setToggle(false)
                setResult(`= ${eval(calc)}`)
            } else if (x.endsWith('/')) {
                const calc : string = (`${x}1`)
                console.log(calc)
                setToggle(false)
                setResult(`= ${eval(calc)}`)
            } else {
                console.log(x)
                setToggle(false)
                setResult(`= ${eval(x)}`)
            } 
        }    
    }

    const handleBackSpace = () => {
        const backS : string = calc.slice(0,-1)
        const backv : string = value.slice(0,-1)
        setCalc(backS)
        setValue(backv)
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
                        setValue('')  
                        setCalc('')                      
                        setResult('0')
                        setToggle(false)
                    }}
                />
                <ButtonCalc
                    label={'<='}
                    onClickIn={()=>handleBackSpace()}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonCalc 
                    label={'%'}
                    onClickIn={()=>{
                        if (toggle){
                            setValue(result)
                            setCalc(result)
                            setToggle(false)
                            const x : number = eval(`(${calc} / 100)`)
                        }
                        const x : number = eval(`(${calc} / 100)`)
                        setValue(`${x}`)
                        setCalc(`${x}`)
                    }}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonCalc 
                    label={'÷'}
                    onClickIn={()=>{
                        if(toggle){
                            setValue(value + '÷')
                            setCalc(calc + '/')
                            setToggle(false)
                        }
                        setValue(value + '÷')
                        setCalc(calc + '/')
                    }}
                />
            </View>
            <View style={stylekey.subContainer}>
                <ButtonKey 
                    label={'7'}
                    onClickIn={()=>{
                        setValue(value + '7')
                        setCalc(calc + '7')
                    }}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonKey 
                    label={'8'}
                    onClickIn={()=>{
                        setValue(value + '8')
                        setCalc(calc + '8')
                    }}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonKey 
                    label={'9'}
                    onClickIn={()=>{
                        setValue(value + '9')
                        setCalc(calc + '9')
                    }}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonCalc 
                    label={'x'}
                    onClickIn={()=>{
                        if(toggle){
                            setValue(value + 'x')
                            setCalc(calc + '*')
                            setToggle(false)
                        }
                        setValue(value + 'x')
                        setCalc(calc + '*')
                    }}
                />
            </View>
            <View style={stylekey.subContainer}>
                <ButtonKey 
                    label={'4'}
                    onClickIn={()=>{
                        setValue(value + '4')
                        setCalc(calc + '4')
                    }}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonKey 
                    label={'5'}
                    onClickIn={()=>{
                        setValue(value + '5')
                        setCalc(calc + '5')
                    }}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonKey 
                    label={'6'}
                    onClickIn={()=>{
                        setValue(value + '6')
                        setCalc(calc + '6')
                    }}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonCalc 
                    label={'-'}
                    onClick={()=>{
                        if(toggle){
                            setValue(value + '-')
                            setCalc(calc + '-')
                            setToggle(false)
                        }
                        setValue(value + '-')
                        setCalc(calc + '-')
                    }}
                />
            </View>
            <View style={stylekey.subContainer}>
                <ButtonKey 
                    label={'1'}
                    onClickIn={()=>{
                        setValue(value + '1')
                        setCalc(calc + '1')
                    }}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonKey 
                    label={'2'}
                    onClickIn={()=>{
                        setValue(value + '2')
                        setCalc(calc + '2')
                    }}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonKey 
                    label={'3'}
                    onClickIn={()=>{
                        setValue(value + '3')
                        setCalc(calc + '3')
                    }}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonCalc 
                    label={'+'}
                    onClick={()=>{
                        if(toggle){
                            setValue(value + '+')
                            setCalc(calc + '+')
                            setToggle(false)
                        }
                        setValue(value + '+')
                        setCalc(calc + '+')
                    }}
                />
            </View>
            <View style={stylekey.subContainer}>
                <ButtonKey 
                    label={'0'}
                    onClickIn={()=>{
                        setValue(value + '0')
                        setCalc(calc + '0')
                    }}
                    onClick={()=>handleCalcular(calc)}
                />
                <ButtonKey 
                    label={'.'}
                    onClick={()=>{
                        if(toggle == true){
                            setCalc(`${result.slice(2)}.`)
                            setValue(`${result.slice(2)}.`)
                            setToggle(false)
                        } else {
                            setValue(value + '.')
                            setCalc(calc + '.')
                        }
                    }}
                />
                <ButtonRes 
                    label={'='}
                    onClickIn={()=>setList([...list, `${value}${result}`])}
                    onClick={()=>{
                        handleCalcular(calc)
                        setToggle(true)
                    }}
                />
                
            </View>
        </View>
    )
}