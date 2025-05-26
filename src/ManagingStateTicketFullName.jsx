import React, { useState } from 'react'

export default function ManagingStateTicketFullName(){
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');

    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e){
        setFirstname(e.target.value)

    }

     function handleLastNameChange(e){
        setLastname(e.target.value)

    }
    
    return(
        <>
            <h2>Check in</h2>
            <label>
                First name : {' '}
                <input
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>

            <label>
                Last name:{' '}
                <input
                value={lastName}
                onChange={handleLastNameChange}
                />
            </label>

            <p>
                Your ticket will be issued to: <b>{fullName}</b>
            </p>
        </>
    );
}
