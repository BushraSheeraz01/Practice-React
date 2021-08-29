import React, { useEffect, useState } from 'react';

function Main() {
    const [nameState, setNameState] = useState('Main')
    const [firstName, setFirstName] = useState('')

    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(results => results.json())
            .then(data => {
               setFirstName(data.results[0].name.first);
            })
    }, [])



    return (
        <>
            {firstName.length > 0 ? <div>This is {firstName}</div> : <div>First name is loading</div>}
            {/* <div> This is {firstName}</div> */}
            <p>This is {nameState} component</p>
            <button onClick={() => setNameState('Home')}>Change</button>
        </>
    )
}

export default Main;