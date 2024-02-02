import './App.css';
import Main from './Main';
import Nav from './Nav';
import Cart from './components/Cart';

function App() {
  return (
    <div className='container-fluid'>
      <header className='pt-5 row sticky-top bg-white'>
        <div className='col-9'>
          <h1>Formation React</h1>
        </div>
        <div className='col-3 align-self-end mb-2 text-end'>
          <Cart />
        </div>
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
