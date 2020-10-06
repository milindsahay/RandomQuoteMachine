import React, {useEffect, useState} from 'react';
const Container = () => {

 const [quote, setQuote] = useState("Loading....");
 const [author, setAuthor] = useState("");

 const newQuote = () => {
     setQuote("Loading...");
     setAuthor("");
     fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
         .then(response => response.json())
         .then(data => {
             setQuote(data[0].quote)
             setAuthor(data[0].character)
             console.log(JSON.stringify(data))
         })
         .catch(err => {
             console.log(err);
         });
 }
 useEffect(()=>{
     newQuote();
 },[])

    return (
        <div className="container">
        <h1>Quote: {quote}</h1>
            <h3>Author: {author}</h3>
        <div className="btn-danger btn" onClick={newQuote}>New Quote</div>
        </div>
    );
};

export default Container;