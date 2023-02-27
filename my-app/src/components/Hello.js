import React, { useEffect, useState } from 'react';

function Hello(props) {
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/${props.name}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
    }, [props.name])

    return (
        <div>
            <h1>Hello {props.name}</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}

export default Hello;