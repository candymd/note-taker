import Card from "./Card"
import EditCard from "./EditCard";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {

return (

<div >

    < EditCard handleAddNote={handleAddNote}/>
    <div className='notes-list'>
    {notes.map((note) => (
    <Card id={note.id}
    title={note.title}
    description={note.description}
    tags={note.tags}
    handleDeleteNote={handleDeleteNote}
    />
    ))}
    </div>

    
</div>
);
    };

export default NotesList;