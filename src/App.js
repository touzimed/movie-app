import './App.css';
import React,{useContext,useState } from 'react';
import Navbar from './component/navbar'
import MovieList from './component/MovieList'
import Add from './component/add.js'
import {AuthContext,AuthProvider} from './component/AuthProvider';
function App() {
  const [filmeList, setFilmeList] = useState([
    {title:'Ghosted', rating:'+5', description:"Cole, un agriculteur sans histoire, tombe éperdument amoureux de la mystérieuse Sadie, mais découvre avec stupeur qu'elle est agent secret. Avant même un second rencard, Cole et Sadie vont être embarqués dans une aventure au-delà des frontières lors de laquelle ils vont devoir sauver le monde." , posterURL:"https://media.senscritique.com/media/000021318979/300/ghosted.png"},
    {title:'Run', rating:'+6', description:"Une adolescente scolarisée à la maison commence à soupçonner que sa mère lui cache un sombre secret.", posterURL:"https://fr.web.img4.acsta.net/pictures/14/12/10/17/10/555519.jpg"},
    {title:'Interstellar (2014)', rating:'+8', description:"Dans un monde post-apocalyptique et en famine, une équipe d'explorateurs cherche une nouvelle planète habitable pour l'espèce humaine." , posterURL:"https://m.media-amazon.com/images/I/61pyUElLh7L._AC_UF894,1000_QL80_.jpg"},
    {title:'Resident Evil (2002)', rating:'+9', description:"Une unité militaire spéciale combat un superordinateur puissant et incontrôlable et des centaines de scientifiques qui ont muté en créatures mangeuses de chair après un accident de laboratoire." , posterURL:"https://m.media-amazon.com/images/M/MV5BZmI1ZGRhNDYtOGVjZC00MmUyLThlNTktMTQyZGE3MzE1ZTdlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_FMjpg_UX1000_.jpg"},
    {title:'Royaume de Naya', rating:'+4', description:"En tombant amoureuse d'un homme, le jeune et talentueux musicien Lukash, Mavka - une âme de la forêt - est confrontée à un choix impossible entre l'amour et son devoir de gardienne du cœur de la forêt." , posterURL:"https://movies.monnaie-services.com/FR/poster/158A8D3D/320/I55A2.jpg"},
  ]);
  const authContext=useContext(AuthContext);
  const handleAddMovie = (newMovie) => {
    setFilmeList([...filmeList, newMovie]);
  }
  return (

    <div >
     <Navbar/>  
    
     {authContext.auth.affichage ? <MovieList filmeList={filmeList} /> : <Add onAddMovie={handleAddMovie} />}
    </div>
  );
}
function AppWith(){
  return(
<AuthProvider>
  <App/>
</AuthProvider>

  );
}

export default AppWith;
