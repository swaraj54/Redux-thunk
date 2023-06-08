import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';
import ProductList from './components/ProductList.js';



function App() {
  return (
    <div className="App">
      <h1>My App</h1>
      <Login />
      <ProductList />
    </div>
  );
}

export default App;
