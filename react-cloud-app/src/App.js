import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [isFetching, setFetching] = useState(false);
  const [user, setUser] = useState({});

  useEffect(()=> {
    (async ()=>{
      setFetching(true);
      const response = await fetch("https://helloworld-lkewgry7ca-de.a.run.app/user");
      const userData = await response.json();
      console.log(userData);
      setUser(userData)
      setFetching(false);
    })();
  },[0]);

  if(isFetching){
    return <div>Data Loading.....</div>
  }
  return (
    <div>
      Hello World from Cloud Run
      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
    </div>
  );
}

export default App;
