import React from 'react';
import Header from './components/header';
import Welcome from './components/welcome';
import Brand from './components/brand';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Brand />
      <Card />
    </div>
  );
}

export default App;
