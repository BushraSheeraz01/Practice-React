import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';




function PersonCard() {
    const [personDetails, setpersonDetails] = useState([])
    const [age, setAge] = useState('')

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
            .then(results => results.json())
            .then(data => {
                setpersonDetails(data.results)
                console.log({ personDetails })
            })
    }, [])



    return (
        <>
            {
                personDetails.map((person) => (
                    <Card style={{ width: '28rem', margin: '20px' }} className='person' >
                        <div style={{ display: 'flex', padding: '20px' }}>
                            <Card.Img variant="top" src={person.picture.large} style={{ width: '160px' }} />
                            <Card.Body>
                                <Card.Title>Name: {person.name.first}</Card.Title>
                                <Card.Text>
                                    Email:  {person.email}
                                </Card.Text>
                                <Card.Text>
                                    Age:  {age}
                                </Card.Text>
                                <Button onClick={() => setAge(person.dob.age)}>Show Age</Button>
                            </Card.Body>
                        </div>
                    </Card>
                ))
            }



            {/* <Card style={{ width: '18rem' }} className='person'>
                <Card.Img variant="top" src={image} style={{ width: '150px' }} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        Email:  {email}
                    </Card.Text>
                    <Button variant="primary">{age}</Button>
                </Card.Body>
            </Card> */}
        </>
    )
}

export default PersonCard;