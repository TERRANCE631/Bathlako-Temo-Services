import './App.css';
import { Header, Footer } from './Components/index';
import { Allroutes } from './Routes/Allroutes';

function App() {
  return (  
      <div className="App dark:bg-gray-700">
        <Header />
        <Allroutes />
        <Footer />
      </div> 
    );
}

export default App;
