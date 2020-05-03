import React from 'react';
import './App.css';
import AppLayout from './shared/layouts/App.layout';
import NoteList from './notes/components/NoteList';

function App() {
  return (
    <AppLayout component={NoteList} />
  );
}

export default App;
