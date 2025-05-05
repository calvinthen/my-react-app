import React from 'react'
import { useState } from 'react'

export default function StateAsSnapshot(){
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('Hi !');

    if(isSent)
    {
        return <h1>Your message is on its way !</h1>
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setIsSent(true);
            sendMessage(message);
        }}>
            <textarea 
                placeholder='Mesagge'
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <br></br>
            <button type='submit'>
                send 
            </button>
        </form>

    );
}

function sendMessage(message) {
    // ...
  }

