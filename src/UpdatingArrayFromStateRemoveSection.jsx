import React, { useState } from 'react'

let initialArtists = [
    {id : 0, name: 'Calvin Then'},
    {id : 1, name: 'Stevin Then'},
    {id : 2, name: 'Clein Dawson'},

];

export default function UpdatingArrayFromStateRemoveSection (){
    const [artist, setArtists] = useState(initialArtists);

    return(
        <>
            <h1>Inspiring Sculptors: </h1>
            <ul>
                {artist.map(artist => (
                    <li key={artist.id}>
                        {artist.name}{' '}
                        <button onClick={() => {
                            setArtists(
                                artist.filter(a => a.id !== artist.id)
                            );
                        }}> 
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
