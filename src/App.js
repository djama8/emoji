

import './App.css';
import Header from './components/header/header';
import {data} from "./data/emoji.js"
import { useState } from 'react';
import CardList from './components/cardList/cardList';
import Card from './components/card/card';




function App() {
  const [filteredEmoji, setFilteredEmoji] = useState(data)
  return (
    <div className="App">
    <Header title="Emoji Finder" text="Find emoji by keywords" filteredEmoji={filteredEmoji} setFilteredEmoji={setFilteredEmoji} data={data}/>
   
    <main>
    <CardList data={filteredEmoji}/>
    <Card />
    </main>
    </div>
  );
}

export default App;
