import { useEffect, useState } from 'react';
import api from './services/api';
import './Style.css';

export default function App() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    api.get('').then(res => {
      setUsers(res.data.results);
    }).catch(err => console.log('erro'))
  },[])

  const arrayUsers = users.map(user=>(
    <div className="content">
      <img src={user.picture.large} alt="img-profile" />
        <p>
        {user.name.first} {user.name.last}
        </p>
    </div>
    ))
    
  return (
    <main>
      <h1>Pessoas Cadastradas</h1>
      <div className="container">
        {arrayUsers}
      </div>
    </main>
  );
}

