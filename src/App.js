import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
   const [data, setData] = useState('')

   const fetchQuote = () => {
      axios.get('http://quotes.stormconsultancy.co.uk/random.json')
         .then((response) => {
            setData(response.data)
         })
         .catch((error) => {
            console.log(error)
         })
   }

   useEffect(() => {
      fetchQuote()
   }, [])

   const handleClick = () => {
      fetchQuote()
   }

   return (
      <div className="App">
         <div id="quote-box">
            <p id="text"><i className="fas fa-quote-left quotation"></i>{data.quote}</p>
            <p id="author">- {data.author}</p>
            <div className="controls">
               <a href="twitter.com/intent/tweet" id="tweet-quote"><i className="fab fa-twitter"></i></a>
               <button id="new-quote" onClick={handleClick}>New Quote</button>
            </div>
         </div>
      </div>
   );
}

export default App;
