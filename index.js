function App() {

  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState([]);
  const [color, setColor] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes")
      const data = await response.json();

      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIndex]);
      setColor("#16a085")
    }
    fetchData();
  }, [])

  const getNewQuote = () => {
    let colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857"
    ];

    let randQuoteIndex = Math.floor(Math.random() * quotes.length);
    let randColorIndex = Math.floor(Math.random() * color.length);
    setRandomQuote(quotes[randQuoteIndex]);
    setColor(colors[randColorIndex])
  }

  return (
    <div className="content-wrapper d-flex align-items-center" style={{ backgroundColor: color }}>
      <div id="quote-box" className="col-md-3 mx-auto p-4">
        <div className="row">
          {randomQuote ? (
            <>
              <h2 id="text"
                style={{ color: color }}>
                <i className="fa fa-quote-left"></i>
                {randomQuote.text}
              </h2>
              <h4 id="author"
                style={{ color: color }}>— {randomQuote.author || "No author"}</h4>
            </>
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
        <div className="row text-align-top">
          <div className="col text-align-top">
            <a id="tweet-quote"
              style={{ color: color }}
              target="_blank"
              href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                encodeURIComponent('"' + randomQuote.text + '"' + (randomQuote.author ? (" - " + randomQuote.author) : ""))}>
              <i className="fa fa-twitter-square"
                style={{ color: color }}></i>
            </a>
          </div>
          <div className="col">
            <button id="new-quote"
              class="btn btn-primary float-end"
              onClick={getNewQuote}
              style={{ backgroundColor: color }}>New quote</button>
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))