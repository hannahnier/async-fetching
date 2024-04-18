import { useState, useEffect } from "react";
import "./App.css";
import ReadmeContent from "./ReadmeContent";

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

      <button onClick={clickHandler}>Find your local brewer!</button>

      {/* für Readme: */}
      <button onClick={showReadme}>Show/hide Readme</button>
      <div style={{ display: "flex" }}>
        {readmeActive && <ReadmeContent />}

        <div>
          {loadData &&
            data.map((x) => (
              <div key={x.id}>
                <h3>
                  {x.name} ({x.brewery_type})
                </h3>
                <a href={x.website_url} target="_blank">
                  Visit website
                </a>
                <p>{x.state}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
