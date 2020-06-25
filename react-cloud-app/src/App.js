import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  console.log("NODE_ENV = ", process.env.NODE_ENV);
  console.log("Before API_SERVER_URL = ",process.env.API_SERVER_URL);
  const [isFetching, setFetching] = useState(false);
  const [user, setUser] = useState({});
  const API_SERVER_URL = process.env.API_SERVER_URL || "https://helloworld-lkewgry7ca-de.a.run.app"
  console.log("After API_SERVER_URL = ",API_SERVER_URL);
  useEffect(()=> {
    (async ()=>{
      setFetching(true);
      const response = await fetch(API_SERVER_URL+"/user");
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
      Hello World updated from Cloud Run
      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
    </div>
  );
}

export default App;
