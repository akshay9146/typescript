type nameProp={
    name:string
}
export default function Greeting({name}:nameProp){
    return(
        <>
        hello age and my name is - {name}
        </>
    )
}