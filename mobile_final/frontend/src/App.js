import React from 'react';
import './style/style2.css';
import Main from './containers/main'
import Login from './containers/login'
import Signup from './containers/signup'
import Details from './containers/details'
import New from './containers/new'
import Edit from './containers/edit'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './store'

function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Route path="/" exact component={Main}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/product" exact component={Details}/>
        <Route path="/new" exact component={New}/>
        <Route path="/edit" exact component={Edit}/>
      </Router>
    </div>
    </Provider>
  );
}

export default App;

