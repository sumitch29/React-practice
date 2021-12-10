
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
<Navbar title="Navbar"/>
<div className="container"><TextForm heading="Enter Text which you want to analyse"/></div>

    </>
  );
}

export default App;
