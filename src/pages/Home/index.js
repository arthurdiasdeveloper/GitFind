import { useState } from 'react';
import { Header } from '../../components/Header';
import background from '../../assets/background.png';
import ItemList from '../../components/ItenList';
import './styles.css'

function App() {

  const[user, setUser] = useState('');
  const[currentUser, setCurrentUser] = useState(null);
  const[repos, setRepos] = useState(null);

  const handleGetData = async () =>{ 
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser =  await userData.json();

    console.log(newUser);
    if(newUser.name){
      //set nos usuarios
      const {avatar_url, name, login, bio} = newUser;
      setCurrentUser({avatar_url, name, login, bio});

      //buscando dados do repositorios também
      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos =  await reposData.json();

      //se ele é um array com dados
      if(newRepos.length){
        //adicionei todos os valores dentro do meu estados
        setRepos(newRepos);


      }
    }
  }

  return (
    <div className="App">

    <Header/>
      <div className='conteudo'>

        <img src={background} className="background" alt="background App"/>

            <div className='info'>
                <div>
                  <input name='usuario' value={user} onChange={event => setUser(event.target.value)} placeholder='@username' />

                  <button onClick={handleGetData}>Search</button>
                </div>

                {currentUser?.name ? (<>
                <div className='perfil'>
                  <img src={currentUser.avatar_url}
                   className='profile' alt="Imagen de perfil"/>
                  <div>
                    <h3>{currentUser.name}</h3>
                    <span>{currentUser.login}</span>
                    <p>{currentUser.bio}</p>
                  </div>
                </div>
                <hr/>
                </> 
                ) : null}

                {repos?.length ? ( 
                <div>
                  <h4 className='repositorio'>Repotisórios</h4>
                  {repos.map(repo =>(
                  <ItemList title={repo.name} description={repo.description} />
                  ))}
                </div>
                ) : null}
             </div>

       </div>

    </div>
  );
}

export default App;
