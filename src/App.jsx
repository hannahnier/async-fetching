import { useState, useEffect } from "react";
import "./App.css";
import ReadmeContent from "./ReadmeContent";
import arrow from "./images/arrow-right-solid (1).svg";
import beermug from "./images/beer-mug-empty-solid.svg";

function App() {
  const [data, setData] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const [readmeActive, setReadmeActive] = useState(false);

  const url = "https://api.openbrewerydb.org/v1/breweries";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        console.log(res);
        const dataJson = await res.json();
        setData(dataJson);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const clickHandler = () => {
    setLoadData((prev) => !prev);
  };

  const showReadme = () => {
    setReadmeActive((prev) => !prev);
  };

  return (
    <>
      <h1>Get your favourite beer</h1>
      <img src={beermug} className="beer" />
      <br />
      <button onClick={showReadme}>Show/hide Readme</button>

      <button onClick={clickHandler}>Find your local brewer!</button>
      <div style={{ display: "flex" }}>
        {readmeActive && <ReadmeContent />}

        <div>
          {loadData &&
            data.map((x) => (
              <div className="beercontainer" key={x.id}>
                <div className="brewer">
                  <h3>
                    {x.name} ({x.brewery_type})
                  </h3>
                  <a href={x.website_url} target="_blank">
                    <img src={arrow} style={{ width: "10px" }} /> Visit website
                  </a>
                  <p>State: {x.state}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
