import {useState} from 'react';

interface JokeType {
  value: string;
}
const url = 'https://api.chucknorris.io/jokes/random';
const Joke = () => {
  const [jokes, setJokes] = useState<JokeType>();

    const fetchData = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const jokes = await response.json();
        const newValue = jokes.value;
        setJokes( {value: newValue});
        console.log(newValue);
      }
    };
  const  jokeList: React.ReactNode = null;
  if(jokes) {
    return (
      <div className="bg-warning p-3 m-2 rounded">
        <p>{jokes?.value}</p>
      <button className="btn btn-success mb-3" onClick={fetchData}>Get joke</button>
      </div>
    );
  }
  return (
    <div>
      {jokeList}
      <button className="btn btn-success mb-3" onClick={fetchData}>Get joke</button>
    </div>
  );
};

export default Joke;
