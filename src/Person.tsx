import React, {useState} from 'react'

interface Props{
    name:string;
    email:string;
    age:number;
    isMarried: boolean;
    friends: string[]; //list of strings
    country?:Country;// put ? in case of not putting country name
 // its a way to describe a shape of object
   cars?:Cars;
}
    

export enum Country{
    // for few different options
    Brazil = "Brazil",
    Dubai = "Dubai",
    Monaco = "Monaco"
}

export enum Cars{
    Lamborgini="Lamborgini",
    Ferrari = "Ferrari",
    Bentley = "Bentley",
    Porsche = "Porsche"
}

const Person = (props:Props) => {
    //in prototype ever variable created you have to define atype
    const[name,setName] = useState<string>("") //put the type string
  return (
    <div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Age: {props.age}</h1>
        <h1>This person {props.isMarried ? "is" : "not"} Married</h1>
        {props.friends.map((friend:string)=>(
            <h1>{friend}</h1>
        ))}
        <h1>Country: {props.country}</h1>
        <h1>Cars: {props.cars}</h1>
    </div>
  )
}

export default Person