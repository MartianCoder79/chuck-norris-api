import './App.css';
import Jokes from './components/Jokes';
import Categories from './components/Categories';
import Image from './components/Image';

function App() {
    
  return (
    <div className="App">
      <h1 className='Title'>CHUCK NORRIS JOKES</h1>
      <Image className="Image"/>
      <Jokes className="Jokes"/>
      <Categories className="Categories"/>
    </div>
  );
}

export default App;
