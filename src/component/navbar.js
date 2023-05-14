import React,{useContext} from 'react'
import { AuthContext } from './AuthProvider';

export default function Navbar() {
  const authContext=useContext(AuthContext);
  function Addd(e){
    e.preventDefault();
    authContext.SetAuth({...authContext.auth, affichage: !authContext.auth.affichage})
  }
  return (
    <div>
     <nav className="navbar bg-light">
  <div className="container-fluid">
  <a >FILMEz</a>
  <a >rating:
  <select >
  <option ></option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
</select></a>
<button class="btn btn-outline-success" type="submit" onClick={Addd}>ADD</button>
    
    <form  >
      <input  type="text" placeholder="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
      
    </form>
    
  </div>
</nav>
    </div>
  )
}
