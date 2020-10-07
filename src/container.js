/** @jsx jsx */
import React, { useEffect, useState, useContext } from "react";
import { jsx, css, Global } from "@emotion/core";
import ThemeContext from "./ThemeContext";
const Container = () => {
  const [quote, setQuote] = useState("Loading....");
  const [author, setAuthor] = useState("");
  const [theme, setTheme] = useContext(ThemeContext);
  const setColor = () => {
    const colors = [
      "green",
      "lightblue",
      "khaki",
      "brown",
      "orange",
      "coral",
      "red",
      "salmon",
      "gold",
      "aqua",
    ];
    let color = colors[Math.floor(Math.random() * colors.length)];
    setTheme(color);
  };
  const newQuote = () => {
    setQuote("Loading...");
    setAuthor("");
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0].quote);
        setAuthor("-" + data[0].character);
      })
      .catch((err) => {
        console.log(err);
      });
    setColor();
  };
  useEffect(() => {
    newQuote();
  }, []);

  return (
    <div>
      <div
        className="container"
        css={css`
          margin: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          padding: 2em;
          background-color: white;
          max-width: 600px;
        `}
      >
        <Global
          styles={css`
            body {
              background: ${theme};
              margin: 0;
              padding: 0;
              min-height: "100vh";
              max-width: "100vw";
            }
          `}
        />
        <div className=" row ">
          <div
            className="col-12"
            css={css`
              font-weight: 500;
              font-size: 1.75em;
              color: ${theme};
              text-align: center;
            `}
          >
            <i className="fa fa-quote-left"></i>
            <span> {quote}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <span
              className="pull-right"
              css={css`
                color: ${theme};
              `}
            >
              {author}
            </span>
          </div>
        </div>
        <div
          className="row"
          css={css`
            margin-top: 5%;
          `}
        >
          <div className="col-12">
            <span
              className="btn pull-right"
              onClick={newQuote}
              css={css`
                background-color: ${theme};
                color: white;
              `}
            >
              New Quote
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
