import { useState } from 'react'
import './App.css'
let nextId = 0;

export default function App() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
    <img src='https://hips.hearstapps.com/hmg-prod/images/portrait-of-leonardo-da-vinci-1452-1519-getty.jpg'/>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}


