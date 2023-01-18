import React from 'react';
import './App.css';
import Person, { Cars, Country } from "./Person"


function App() {
  const getAge =(name:string): number=>{
   return 99;
  }
  return (
    <div className="App">
      <Person
      name="Oleh"
      email="dmitrivoleg146@gmail.com"
      age={21}
      isMarried={true}
      friends={["jake","lion","wolf"]}
      country={Country.Monaco}
      cars={Cars.Lamborgini}
      />
    </div>
  );
}

export default App;
