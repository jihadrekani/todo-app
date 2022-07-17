import react from 'react'
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Route} from 'react-router-dom'
import Home from './components/Home'
import Project from './components/Project';

import Nav from './components/Nav';

import './App.css';
import PageTitle from './components/PageTitle';
import ContactList from './components/ContactList';

function App() {
  return (
   <div>
    <PageTitle title='favorit contacts' />
    <ContactList />
    <Project />

       </div>
  )
}





export default App;
