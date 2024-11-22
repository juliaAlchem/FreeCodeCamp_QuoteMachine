import {useEffect, useState} from 'react';
import './App.scss';
import { cleanup } from '@testing-library/react';
import COLORS_ARRAY from './colorsArray.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'


let quoteDBUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

function App() {
  const [quote, setQuote] = useState('Dream big and dare to fail.')
  const [author, setAuthor] = useState('Norman Vaughan')
  const [randomNumber, setRandomNumber] = useState(0)
  const [quotesArray, setQuotesArray] = useState(null)
  const [accentColor, setAccentColor] = useState('#F4511E')

 ////////////////// Check this part
  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
    console.log(parsedJSON)
  } 

  useEffect(() => {
    fetchQuotes(quoteDBUrl)
  }, [quoteDBUrl])
  ////////////////// Check this part 

  const getRandomQuote = () => {
    let randomNum = Math.floor(quotesArray.length * Math.random())
    setRandomNumber(randomNum);
    setAccentColor(COLORS_ARRAY[randomNum])
    setQuote(quotesArray[randomNum].quote)
    setAuthor(quotesArray[randomNum].author)
  }

  return (
    <div className="App">
      <header className="App-header" style={
        {backgroundColor: accentColor}}>
        <section id='quote-box' style={
        {color: accentColor}}>
        <p id='text'>"{quote}"</p>
        <p id='author'>- {author}</p>

        <div class='buttons'> 
       <button id="new-quote" onClick={() => {getRandomQuote()}} style={
        {backgroundColor: accentColor}}>New Quote</button>
       <a id='tweet-quote' href={`twitter.com/intent/tweet`} target="_blank" style={
        {backgroundColor: accentColor}}><FontAwesomeIcon icon={faTwitter} /></a>
        </div>

       </section>
      </header>
    </div>
  );
}

export default App;


// https://www.youtube.com/watch?v=EDWwhVoCvHM 
// 51:18 Testing App

