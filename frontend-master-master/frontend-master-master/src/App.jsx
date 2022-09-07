import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signUp' element={<SignUp />}/>
      </Routes>
    </Router>
  )
};

export default App;
