import React, {useEffect, useState} from 'react';
import Film from './components/Film';
import AddFilmForm from './components/AddFilmForm';
import Joke from './components/Joke';
import './App.css';

interface ExampleOfFilm {
  info: string;
  id: number;
}

function App() {
  const [films, setFilms] = useState <ExampleOfFilm[]> ([
    {info: 'GodFather', id: 1},
    {info: 'Pretty little liers', id: 2},
    {info: 'Batman', id: 3},
  ]);
  const [currentFilm, setCurrentFilm] = useState('');

  useEffect(() => {
    console.log('Films changed');
  }, [films]);

  const changeFilm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentFilm(event.target.value);
  };

  const changeFilmName = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const newName = event.target.value;

    setFilms((prevState) => prevState.map((film) => {
      if (film.id === id) {
        return {...film, info: newName};
      }

      return film;
    }));
  };

  const deleteFilm = (id:number) => {
    setFilms((prevState ) => prevState.filter(film => {
      return film.id !== id;
    }));
  };

  const addFilm = () => {
    setFilms(prevState => {
      const lastItem = prevState[prevState.length - 1];
      const newId = lastItem ? lastItem.id + 1 : 1;
      return [...prevState,{
        id: newId,
        info: currentFilm,
      }];
    });
  };

  return (
    <>
      <div className='mt-2 border mb-5 pb-4'>
        <h2 className="fs-3 mt-5">Task 1</h2>
        <AddFilmForm
          onFilmChange = {(event) => changeFilm(event)}
          onAdd = {() => addFilm()}
        >
        </AddFilmForm>
        {films.length !== 0 &&
          films.map(film =>
            <Film
              key={film.id}
              info={film.info}
              onFilmNameChange={(event) => changeFilmName(event,film.id)}
              onDelete={() => deleteFilm(film.id)}
            >
            </Film>)}
      </div>
      <div className="border">
        <h2 className="fs-3 mt-5">Task-2</h2>
        <Joke/>
      </div>
    </>
  );
}
export default App;

