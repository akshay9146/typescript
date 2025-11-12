type nameProp={
    name:string
}
export default function Greeting({name}:nameProp){
    return(
        <>
        hello my name is - {name}
        </>
    )
}