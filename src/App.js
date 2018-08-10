import React, { Component } from 'react';
import './App.css';
import routes from './route'
import Nav from './components/Nav'

class App extends Component {

  
  render() {
   
    return (
      <div>
        < Nav />
        
       { routes }
       
      </div>
    );
  }
}

export default App;
