//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import image1 from '../src/assets/rick-morty.png'
import Characters from '../src/components/Characters';

function App() { 

  const [characters,setCharacters] = useState(null)

  const reqApi = async () =>{

    const api = await fetch('https://rickandmortyapi.com/api/character')
    console.log(api);
    const characterApi = await api.json();
    console.log(characterApi);
 
    console.log(characters);
    setCharacters(characterApi.results);
    console.log(characters);

    //console.log('Hola');
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick and Morty</h1>
        { characters ? ( 
        <Characters characters={characters} />
        ):(
        <>
          <img className='img-home' alt='logo' src={image1}></img>
          <button className='btn-search' onClick={reqApi}>
            Buscar personajes
          </button>
        </>
        )
      }
      </header>
    </div>
  );
}

export default App;
