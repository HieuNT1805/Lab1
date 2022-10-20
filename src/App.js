import React from 'react';

export default function App(){
    const [name, setName] = React.useState("Adam");
    const [age, setAge] = React.useState(35);

    return(
        <>
        <selection>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        <p>My name is {name}</p>
        </selection>
        <selection>
            <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
        />
        <p>My age is {age}</p>
        </selection>
        </>
    );
}