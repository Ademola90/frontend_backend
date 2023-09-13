import './App.css';
import LoginPage from './components/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import MainPage from './components/MainPage';
import UserPage from './components/UsersPage/UserPage';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/' Component={LoginPage} />
        <Route path='/signin' Component={SignIn} />
        <Route path='/mainpage' Component={MainPage} />
        <Route path='/user' Component={UserPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
