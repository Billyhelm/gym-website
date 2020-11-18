import React from 'react';
import './default.scss'
import Header from './components/Header'
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
      <Homepage />
      </div>
    </div>
  );
}

export default App;

//currently 13:49 on video #1
// https://www.youtube.com/watch?v=7gQay39krqY&list=PL-Db3tEF6pB8UO2MmccX-5qeGDX9rek7Q&index=1