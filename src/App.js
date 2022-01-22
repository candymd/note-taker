import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';



function App({ }) {

  const [notes, setNotes] = useState([ {
    id: nanoid(), 
    title: "Hey, I'm a note!",
    description: "You can add new notes in the left panel and delete them using the red button below. Give it a try!",
    tags: 'MySuperCoolTag'
  },

  ]);


  const addNote = (title, description, tags) => {
    
    const newNote = {
      id: nanoid(),
      title: title,
      description: description,
      tags: tags
     }

     const newNotes = [...notes, newNote];
     setNotes(newNotes);

  }



  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };



  return (
    <div className="App">
      <section className='main-container m-2 d-flex'>
        <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </section>
  </div>
  );
}

export default App;
