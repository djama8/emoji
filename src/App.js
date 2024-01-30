import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Form from './components/form/form';
import {data} from "./data/emoji.js"
import { useState } from 'react';


const [filteredEmoji, setFilteredEmoji] = useState(data)
function App() {
  return (
    <div className="App">
    <Header title="Emoji Finder" text="Find emoji by keywords"/>
    <Form/>
    </div>
  );
}

export default App;
