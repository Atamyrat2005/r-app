import './index.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = 'Welcome to the my react app';


  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        {/* <h1>{title}</h1> */}
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
