import React from 'react';
import './App.css';
import Person, { Cars, Country } from "./Person"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Provider} from "react-redux"
import {store} from "./store"



function App() {
  // const getAge =(name:string): number=>{
  //  return 99;
  // }
  return (
    <div className="App">
      {/* // redux toolkit is very similar to context */}
      {/* <Person
      name="Oleh"
      email="dmitrivoleg146@gmail.com"
      age={21}
      isMarried={true}
      friends={["jake","lion","wolf"]}
      country={Country.Monaco}
      cars={Cars.Lamborgini}
      /> */}
       <Provider store={store}>
          <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login'element={<Login/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
          </Router>
        </Provider>
    </div>
  );
}

export default App;
