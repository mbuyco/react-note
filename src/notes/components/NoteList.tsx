import React from 'react';
import { INote } from '../types';

// TODO: get from state
const notes = [
  {
    title: 'My first note',
    text: 'yay!'
  },
  {
    title: 'My second note',
    text: 'yay!!'
  },
];

const noteList = notes.map((note: INote) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{note.title}</h5>
      <p className="card-text">{note.text}</p>
    </div>
  </div>
));

const NoteList = () => (
  <div className="card-group">{noteList}</div>
);

export default NoteList;