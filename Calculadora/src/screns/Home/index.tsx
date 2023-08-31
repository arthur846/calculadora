import React , { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Keyboard } from "react-native";
import StyleHome from "./style";
import ButtonText from "../../components/txtButton/buttonText";

export default function Home() {

    const [status, setStatus] = useState<string>()
    const [textX, setTextX] = useState<string>()
    const [textY, setTextY] = useState<string>()
    const [direction, setDirection] = useState<boolean>(false)
    const [x, setX] = useState<number>(0)
    const [y, setY] = useState<number>(0)
    const [label, setLabel] = useState<string>('')
    const [key, setKey] = useState<number>(0)
    const [result, setResult] = useState<number>(0)
    const [list, setList] = useState<string[]>([])
    const [item, setItem] = useState<string>('')

    const handleDirection = (b : boolean) => {
        setDirection(b)
    }

    const handleStatus = (num: number, sign: string) => {
        setStatus(`${num} ${sign}`)
    }

    const handleSetNumber = (text: string) => {
        if (direction == false) {
            setX(Number(text))
        } else if (direction == true) {
            setY(Number(text))
        }
    }

    const handleSetResult = (n1: number, n2: number, key: number) => {
        switch(key){
            case 0: {
                setResult(n1 + n2)
                break
            } 
            case 1: {
                setResult(n1 - n2)
                break
            }
            case 2: {
                setResult(n1 * n2)
                break
            }
            case 3: {
                setResult(n1 / n2)
                break
            }
        }
    }

    return (
        <View style={StyleHome.container}>
            <Text style={StyleHome.text}>
                Calculadora
            </Text>
            <View style={StyleHome.subContainer}>
                <FlatList
                    data={list}
                    inverted
                    style={StyleHome.listContainer}
                    renderItem={({item})=>{
                        return (
                            <View>
                                <Text style={StyleHome.item}>{item}</Text>
                            </View>
                        )}
                    }
                />
                <Text style={StyleHome.txt}>{status}</Text>
                <TextInput
                    style={StyleHome.input}                    
                    onChangeText={(text)=>{
                            setLabel(text)
                            handleSetNumber(text)
                        }                      
                    }
                    value={label}
                    placeholder="0"
                    keyboardType="numeric"
                />
            </View>
            <View style={StyleHome.butContainer}>
                <ButtonText label={'AC'}
                    onClick={()=>{
                        setLabel('')
                        Keyboard.dismiss()
                        handleDirection(false)
                        setX(0)
                        setY(0)
                        setResult(0)
                        setStatus('')
                        setItem('')
                        setTextX('')
                        setTextY('')
                    }}
                /> 
                <ButtonText 
                    label={'+'} 
                    onClickIn={()=>handleStatus(x,'+')}
                    onClick={()=>{
                        setTextX(status)
                        handleDirection(true)
                        setLabel('')
                        setKey(0)   
                    }}               
                />
                <ButtonText 
                    label={'-'}
                    onClickIn={()=>handleStatus(x,'-')}
                    onClick={()=>{
                        setTextX(status)
                        handleDirection(true)                        
                        setLabel('')
                        setKey(1)   
                    }}                 
                />
                <ButtonText 
                    label={'x'} 
                    onClickIn={()=>handleStatus(x,'x')}
                    onClick={()=>{
                        setTextX(status)
                        handleDirection(true)                    
                        setLabel('')
                        setKey(2)
                    }}
                />
                <ButtonText 
                    label={'÷'} 
                    onClickIn={()=>handleStatus(x,'÷')}
                    onClick={()=>{
                        setTextX(status)
                        handleDirection(true)
                        setLabel('')
                        setKey(3)
                    }}
                />                              
            </View>
            <TouchableOpacity 
                onPressIn={()=>{
                    handleSetResult(x, y, key)
                    setTextY(`${y} =`)
                }} 
                onPress={()=>{
                    setLabel('')  
                    Keyboard.dismiss()  
                    handleStatus(result,'')
                    setItem(`${textX} ${textY} ${result}`)
                }}
                onPressOut={()=>{
                    setX(0)
                    setY(0)
                    setResult(0)   
                    setDirection(false) 
                    setList([item, ...list])                
                }}
            >
                <Text style={StyleHome.but}>Resultado</Text>
            </TouchableOpacity>                
        </View>
    )
}