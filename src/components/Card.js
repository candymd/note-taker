import 'bootstrap/dist/css/bootstrap.css';
import './card.css';

const Card = ({id, title, description, tags, handleDeleteNote }) => {
      return (
              <div className="card-box">
                <h3>{title}</h3>
                <span className="text-secondary">{description}</span> <br></br>
                <span className="badge badge-pill badge-success">{'#' + tags}</span>
                <div className='btn d-flex justify-content-around'>
                <button onClick={() => handleDeleteNote(id)} className="btn btn-md btn-danger mx-auto">Delete</button>
                </div>
              </div>
      );
    }

  export default Card;
  