import logo from './logo.svg';
import './App.css';
import {getValidators} from "./graphql/client";
import {useState} from "react";

function App() {
  const [vals, setVals] = useState([])
  getValidators().then((r) => {
    setVals(r.data["validator"])
    console.log(r.data["validator"])
  })
  return (
    <div className="App">
      {vals.map((r) => {
        return `${r["validator_voting_powers"][0]["validator_address"]}: ${r["validator_voting_powers"][0]["voting_power"]}, `
      })}
    </div>
  );
}

export default App;
