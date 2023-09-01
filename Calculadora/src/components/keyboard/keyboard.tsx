import React , { useState } from "react";
import { View, Text, TextInput} from "react-native";
import ButtonKey from "./buttonkey/buttonkey";
import stylekey from "./style.keyboard";
import Painel from "../painel/painel";
import ButtonCalc from "./buttonkey/buttonCalc";
import ButtonRes from "./buttonkey/buttonRes";

export default function KeyboardPersonal () {
    
    const [value, setValue] = useState<string>('')
    const [result, setResult] = useState<string>('0')
    const [toggle, setToggle] = useState<boolean>(false)
    const [list, setList] = useState<string[]>([])

    const handleCalcular = () => {
        if (value.includes('x')){
            let x : string = value.replace('x', '*')
            setResult(`${eval(x)}`)
        } else if (value.includes('÷')) {
            let x : string = value.replace('÷', '/')
            setResult(`${eval(x)}`)
        }else {
            if(value.length == 0) {
                setResult('0')
            } else {
                setResult(`= ${eval(value)}`)
            }            
        }
    }
    const handleBackSpace = () => {
        const penultimaLetra : string = value.charAt(value.length - 2) 
        if (penultimaLetra == '+') {
            setValue(value.slice(0,-2))
            console.log(value.slice(-2))
            console.log('-2')
        } else {
            setValue(value.slice(0,-1))
            console.log(value.slice(-1))
            console.log('-1')
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
                        setValue('')                        
                        setResult('')
                    }}
                />
                <ButtonCalc
                    label={'<='}
                    onClickIn={()=>handleBackSpace()}
                    onClick={()=>handleCalcular()}
                />
                <ButtonCalc 
                    label={'%'}
                    onClickIn={()=>{
                        const x : number = eval(`(${value} / 100)`)
                        setValue(`${x}`)
                    }}
                    onClick={()=>handleCalcular()}
                />
                <ButtonCalc 
                    label={'÷'}
                    onClickIn={()=>setValue(`${value}÷`)}
                />
            </View>
            <View style={stylekey.subContainer}>
                <ButtonKey 
                    label={'7'}
                    onClickIn={()=>setValue(value + '7')}
                    onClick={()=>handleCalcular()}
                />
                <ButtonKey 
                    label={'8'}
                    onClickIn={()=>setValue(value + '8')}
                    onClick={()=>handleCalcular()}
                />
                <ButtonKey 
                    label={'9'}
                    onClickIn={()=>setValue(value + '9')}
                    onClick={()=>handleCalcular()}
                />
                <ButtonCalc 
                    label={'x'}
                    onClickIn={()=>setValue(value + 'x')}
                />
            </View>
            <View style={stylekey.subContainer}>
                <ButtonKey 
                    label={'4'}
                    onClickIn={()=>setValue(value + '4')}
                    onClick={()=>handleCalcular()}
                />
                <ButtonKey 
                    label={'5'}
                    onClickIn={()=>setValue(value + '5')}
                    onClick={()=>handleCalcular()}
                />
                <ButtonKey 
                    label={'6'}
                    onClickIn={()=>setValue(value + '6')}
                    onClick={()=>handleCalcular()}
                />
                <ButtonCalc 
                    label={'-'}
                    onClick={()=>setValue(value + '-')}
                />
            </View>
            <View style={stylekey.subContainer}>
                <ButtonKey 
                    label={'1'}
                    onClickIn={()=>setValue(value + '1')}
                    onClick={()=>handleCalcular()}
                />
                <ButtonKey 
                    label={'2'}
                    onClickIn={()=>setValue(value + '2')}
                    onClick={()=>handleCalcular()}
                />
                <ButtonKey 
                    label={'3'}
                    onClickIn={()=>setValue(value + '3')}
                    onClick={()=>handleCalcular()}
                />
                <ButtonCalc 
                    label={'+'}
                    onClick={()=>setValue(value + '+')}
                />
            </View>
            <View style={stylekey.subContainer}>
                <ButtonKey 
                    label={'0'}
                    onClickIn={()=>setValue(value + '0')}
                    onClick={()=>handleCalcular()}
                />
                <ButtonKey 
                    label={'.'}
                    onClick={()=>setValue(value + '.')}
                />
                <ButtonRes 
                    label={'='}
                    onClickIn={()=>setList([`${value}${result}`, ...list])}
                    onClick={()=>handleCalcular()}
                />
                
            </View>
        </View>
    )
}