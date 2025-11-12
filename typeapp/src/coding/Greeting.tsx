import { useState } from "react"

type nameProp={
    name:string,
    num:number,
    children:React.ReactNode;
    onClick:(e:React.MouseEvent<HTMLButtonElement>)=>void;
}
type objProps={
    name:string,
    age:number
}
export default function Greeting({onClick,children}:nameProp){
    const [count,setCount]=useState<objProps>({name:'akshay',age:21});
    const handleChange=()=>{
        setCount((prev)=>{return{
            ...prev,
            name:'abhi'

        }})
    }
    return(
        <>
        hello my name is - {count.name} {children}
        <button onClick={handleChange}>change</button><br/>
        <button onClick={onClick}>show current</button>
        </>
    )
}