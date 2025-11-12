import { useState } from "react"

type nameProp={
    name:string
}
type objProps={
    name:string,
    age:number
}
export default function Greeting({name}:nameProp){
    const [count,setCount]=useState<objProps>({name:'akshay',age:21});
    const handleChange=()=>{
        setCount((prev)=>{return{
            ...prev,
            name:'abhi'

        }})
    }
    return(
        <>
        hello my name is - {count.name}
        <button onClick={handleChange}>change</button>
        </>
    )
}