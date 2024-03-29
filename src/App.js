import React from 'react';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';
import Post from './components/Post/Post';
import './App.css';

function App() {
  return (
    <div className="App">
      <Auth />
      <Dashboard />
      <Form />
      <Nav />
      <Post />
    </div>
  );
}

export default App;
