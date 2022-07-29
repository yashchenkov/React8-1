import logo from './logo.svg';
import './App.css';
import List from './Components/List';
import { useState, useEffect } from 'react';
import connector from './Components/API/connector';
import Details from './Components/Details';

function App() {
  const [data, setData] = useState();

  return (
    <div className="container">
      <List func={(id) => {
        const obj = connector(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`);
        obj.then((value) => {
          setData(value);
          console.log(data)
        })
      }}/>
      <Details data={data} />
    </div>
  );
}

export default App;
