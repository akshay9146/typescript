type nameProp={
    name:string,
    children:React.ReactNode;
}

export default function Greeting({name,children}:nameProp){
    return(
        <>
        hello age and my name is - {name} {children}
        </>
    )
}