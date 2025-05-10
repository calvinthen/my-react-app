import React, { useState } from 'react'

export default function UpdatingObjectInState(){
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'barbara@gmail.com'
    });

    function handleFirstNameChange(e) {
        setPerson({
          ...person,
          firstName: e.target.value
        });
      }

      function handleLastNameChange(e) {
        setPerson({
          ...person,
          lastName: e.target.value
        });
      }
    
      function handleEmailChange(e) {
        setPerson({
          ...person,
          email: e.target.value
        });
      }



    return(
        <>
            <label>
                First Name :
                <input 
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>

            <label>
                Last Name:
                <input 
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <label>
                Email: 
                <input
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>

            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
        </>
    );
}
