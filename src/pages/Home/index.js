import { Header } from '../../components/Header';
import background from '../../assets/background.png';
import ItemList from '../../components/ItenList';
import './styles.css'

function App() {
  return (
    <div className="App">

    <Header/>
      <div className='conteudo'>

        <img src={background} className="background" alt="background App"/>

            <div className='info'>
                <div>
                  <input name='usuario' placeholder='@username' />
                  <button>Search</button>
                </div>
                <div className='perfil'>
                  <img src="https://avatars.githubusercontent.com/u/62571720?v=4" className='profile' alt="Imagen de perfil"/>
                  <div>
                    <h3>Arthur Dias</h3>
                    <span>@arthurdiasdeveloper</span>
                    <p>Descrição do Github</p>
                  </div>
                </div>
                <hr/>
                <div>
                  <h4 className='repositorio'>Repotisórios</h4>
                  <ItemList title="teste1" description="teste de descrição"/>
                  <ItemList title="teste1" description="teste de descrição"/>
                  <ItemList title="teste1" description="teste de descrição"/>
                </div>
             </div>

       </div>

    </div>
  );
}

export default App;
