import './edit-card.css';
import {useState} from 'react';

const EditCard = ({ handleAddNote}) => {
  
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const [noteTags, setNoteTags] = useState('');
  
    
    const handleChange = (e) => {
        setNoteText(e.target.value);
        console.log(e.target.value);
    }

     const handleChangedTitle = (e) => {
      setNoteTitle(e.target.value);
      console.log(e.target.value);
    } 
    
    const handleChangedTags = (e) => {
      setNoteTags(e.target.value);
      console.log(e.target.value);
    }

    const handleSaveClick = () => {
       handleAddNote(noteTitle, noteText, noteTags);
    }
 

    return (
        <div className="wrapper">
        <div className="divFloat items-center">
          <label htmlFor="title">Title</label><br />
          <input className="mt-2 mb-2" type="text" id="title" value={noteTitle} onChange={handleChangedTitle}/>
          <br />
          <label htmlFor="title">Tag</label><br />
          <input className="mt-2 mb-2" type="text" id="tags" value={noteTags} onChange={handleChangedTags}/>
          <div className="form-group">
            <label htmlFor="description">Description</label><br />
        
            <textarea className="form-control mt-2 mb-2" id="description" rows={3} value={noteText} placerholder="Enter your note here!" 
            onChange={handleChange} />
          </div>
          
          <input type="button" onClick={handleSaveClick} className="submit mx-auto btn-danger mt-4" defaultValue="Save" />
        </div>
        </div>
    );
}

export default EditCard;