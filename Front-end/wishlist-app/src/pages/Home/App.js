import logo from "../../assests/wishlist_branco 1.png"
// import estrelas from "../../assests/page home.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <body className="App-header">
        
        
        <img className="logo" src={logo}></img>


        <h1>Seja bem vindo a Just Wish!
          Aqui você deseja e realiza </h1>
        


        <div className= 'org_bnt'>

          <button className='bnt_home' type='submit'>Cadastre desejos</button>
          <button className='bnt_home' type='submit'>Meus desejos</button>
        </div>

      </body>
    </div>
  );
}

export default App;
