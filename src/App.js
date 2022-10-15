import React, { useState } from 'react';
import { Header } from './Header';
import { Search } from './Search';
import { User } from './User';
import axios from 'axios';

import "./styles/app.css";

function App() {
  const [inputData, setInputData] = useState(""); // for the axios data
  const [isDark, setIsDark] = useState(true); // Light Dark mode 
  const [inputText, setInputText] = useState(""); // checking Search bar input

  const searchHandler = () => {
    axios.get(`https://api.github.com/users/${inputText}`).then(response => {
      setInputData(response.data)
    })
  }


  // ` ${jsvariable}` template literal

  // template literal
  // console.log("lea " + "sam" + "this" + "is" + "so" + "hard" + inputText) ES5
  // console.log(`lea sam this is so hard ${inputText}`);ES6


  return (
    <div className={isDark ? "App" : "App light-mode"}  >
      <div className="container">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Search isDark={isDark} setInputText={setInputText} searchHandler={searchHandler} inputData={inputData} />
        <User isDark={isDark} setIsDark={setIsDark} inputData={inputData} />
      </div>
    </div>
  );
}

export default App;
