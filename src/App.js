import { Header, Footer } from './Components/index';
import { Allroutes } from './Routes/Allroutes';

function App() {
  return (  
    <div className="dark:bg-gray-700 bg-white min-h-screen">
      <Header />
      <Allroutes />
      <Footer />
    </div> 
  );
}

export default App;
