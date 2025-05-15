import React, { useState } from 'react'

let nextId = 0;

export default function UpdatingArrayInState(){
    const [name, setName] = useState('');
    const [artist, setArtists] = useState([]);

    return (
        <>
            <h1>Inspiring Sculptors</h1>
            <input value={name} onChange={e => setName(e.target.value)} />

            <button onClick={() => {
                setArtists([
                    ...artist,
                    {id: nextId++, name: name}
                ])
            }}>
                Add
            </button>
            <ul>
                {artist.map(artist =>(
                    <li key={artist.id}>
                        {artist.name}
                    </li>
                ))}
            </ul>
        </>
    );
}
