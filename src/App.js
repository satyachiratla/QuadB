import React, { useState } from "react";

import MoviesList from "./components/NamesList";
import "./App.css";

function App() {
  const [names, setNames] = useState([]);

  async function fetchNameHanler() {
     const response = await fetch("https://api.tvmaze.com/search/shows?q=all")
      const data = await response.json()
        console.log(data)
        const transformedNames = data.map((nameData) => {
          return {
            id: nameData.show.id,
            title: nameData.show.name,
            summary: nameData.show.summary,
        };
        });
        setNames(transformedNames)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchNameHanler}>Show Names</button>
      </section>
      <section>
        <MoviesList names={names} />
      </section>
    </React.Fragment>
  );
}

export default App;
