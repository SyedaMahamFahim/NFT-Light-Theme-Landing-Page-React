import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Home} from './pages/index'
function App() {
  return (
    <div className="App">
      <Navbar/>
     
      <br/>
      <br/>
      <br/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
