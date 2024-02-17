import './App.css';
import { BrowserRouter,Route,Routes, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import User from './components/user';
import OldBooks from './components/oldBooks';
import NewBooks from './components/newBooks';
import Login from './components/login';
import DashBoard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contactus'>Contact</Link></li>
        <li><Link to='/user/1'>User 1</Link></li>
        <li><Link to='/user/2'>User 2</Link></li>
        <li><Link to='/book-type/oldbooks'>old books</Link></li>
        <li><Link to='/book-type/newbooks'>new books</Link></li>
        <li><Link to='/login'>login</Link></li>
      </ul>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contactus' element={<Contact/>}/>
          <Route path='/user/:id' element={<User/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/>

          <Route path='/book-type'>
          <Route path='oldbooks' element={<OldBooks/>}/>
          <Route path='newbooks' element={<NewBooks/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
