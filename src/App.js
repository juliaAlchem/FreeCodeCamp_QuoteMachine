import {useState} from 'react';
import './App.scss';

function App() {
  const [quote, setQuote] = useState('Dream big and dare to fail.')
  const [author, setAuthor] = useState('Norman Vaughan')
  const [randomNumber, setRandomNumber] = useState(0)

  const getRandomNumber = () => {
    let randomNum = Math.floor(3*Math.random())
    setRandomNumber(randomNum);
    if(randomNum === 0){
      setQuote(quotes[0])
      setAuthor(authors[0])
    }
    if(randomNum === 1){
      setQuote(quotes[1])
      setAuthor(authors[1])
    }
    if(randomNum === 2){
      setQuote(quotes[2])
      setAuthor(authors[2])
    }

  }

  const quotes = ['Dream big and dare to fail.', 'Strive not to be a success, but rather to be of value.', 'The question isn’t who is going to let me; it’s who is going to stop me.']
  const authors = ['Norman Vaughan', 'Albert Einstein', 'Ayn Rand']
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Number: {randomNumber}</h1>
        <p>
        "{quote}"
        </p>
       <p>- {author}</p>
       
       <button onClick={() => {getRandomNumber()}}>Random Number</button>
      </header>
    </div>
  );
}

export default App;


// https://www.youtube.com/watch?v=EDWwhVoCvHM 
// 34:25 Changing array to include authors