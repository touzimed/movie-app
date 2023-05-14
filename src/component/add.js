import React,{useState,useContext} from 'react'
import { AuthContext } from './AuthProvider';
export default function Add(props) {
  const authContext=useContext(AuthContext);
  const [Title,SetTitle]=useState('');
  const [Rating,SetRating]=useState('');
  const [Description,SetDescription]=useState('');
  const [Poster,SetPoster]=useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
   
       props.onAddMovie({title: Title,
        rating: Rating,
        description: Description,
        posterURL: Poster
      })
      authContext.SetAuth({...authContext.auth, affichage: !authContext.auth.affichage})
    
  };

  return (
    <div>
     
	
     <form onSubmit={handleSubmit}>
  
    <label for="exampleInputEmail1" class="form-label">Filme Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" value={Title} onChange={(e) => SetTitle(e.target.value)}  ></input>
    <label for="exampleInputEmail1" class="form-label">Rating</label>
    <input type="number" class="form-control" id="exampleInputEmail1" value={Rating} onChange={(e) => SetRating(e.target.value)}></input>
    <label for="exampleInputEmail1" class="form-label">Description</label>
    <input type="text" class="form-control" id="exampleInputEmail1" value={Description} onChange={(e) => SetDescription(e.target.value)} ></input>
    <label for="exampleInputPassword1" class="form-label">Poster URL</label>
    <input type="text" class="form-control" id="exampleInputPassword1" value={Poster} onChange={(e) => SetPoster(e.target.value)}></input><br/>
    <button type="submit">Add Movie</button>

    
    
</form>
       
	
    </div>
  )
}
