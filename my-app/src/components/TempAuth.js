import React, { useEffect, useState } from 'react';

function Hello(props) {
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/${props.userId}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
                console.log(data.userId)
            })
    }, [props.userId])

    return (
        <div>
            <p>{data.userId}</p>
        </div>
    )
}

export default TempAuth;