import React, { useEffect, useState } from "react";
import getData from "./services/getData";
import './app.css'

function App() {

  const [heroes, setHeroes] = useState([])

  const request = async () => {
    try {
      const { res } = await getData()
      setHeroes(res.results)
    } catch (error) {
      console.log('request', error)
    }
  }

  useEffect(() => {
    request()
  }, [])

  return (
    <div
      className="App"
      style={{ marginTop: "2rem", marginRight: "10rem", marginLeft: "10rem" }}
    >
      <h1>Herois Star Wars</h1>
      <table style={{ border: "1px solid black" }}>
        <tr>
          <td style={{minWidth: '3rem'}}>Nome</td>
          <td>Altura</td>
          <td>Peso</td>
        </tr>
        {heroes.map((hero) => {
          return (
            <tr>
              <td>{hero.name}</td>
              <td>{hero.height}</td>
              <td>{hero.mass}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
