import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Layout  from './components/shared/Layout'
import  Dashboard  from './pages/Dashboard'
import  Product  from './pages/Product'
import Login from './pages/Login';

  function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = { <Layout/>}>
          <Route index element = { <Dashboard/>}/>
          <Route path='product' element = { <Product/>}/>
        </Route>
        <Route path='login' element = { <Login/>}/>
      </Routes>
    </Router>
      
  );
}

export default App;
