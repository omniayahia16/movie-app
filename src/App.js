import React , { Component } from 'react';
import'./assets/style/bootstrap.css';
import './App.scss';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Nav from './components/Nav';
import {BrowserRouter, Route ,Router ,Link  } from 'react-router-dom';
import { HashRouter  } from 'react-router-dom';

function App() {
  return (
    <HashRouter >
        <div>
            <div>
              <Nav/>
              <Header/>
             <Route exact path="/" component={Tabs}/>
            </div>   
        </div>
        </HashRouter>
  );

 
}

export default App;
