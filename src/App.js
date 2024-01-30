import './App.css';
import Main from './Main';
import Nav from './Nav';

function App() {
  return (
    <div className='container-fluid'>
      <header className='pt-5'>
        <h1>Formation React</h1>
        <hr />
      </header>
      <Nav />
      <main>
        <Main />
      </main>
      <footer>
        <p className='text-center small'>React - Dawan FOAD - Janvier/Févier 2024</p>
      </footer>
    </div>
  );
}

export default App;
