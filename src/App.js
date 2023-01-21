import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Employee from './components/Employee';
import emplogo from './img/emplogo.jpg'

function App() {
  return (
    <>
     <Router>
     <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <img className='ms-100' id='logo' src={emplogo} alt="logo" />
          <h2 className="text-white ml-2">Employee App</h2>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link className='nav-link nav-item-active' to='/'>Home</Link>
            </li>

            <li className="nav-item active">
              <Link className='nav-link nav-item-active' to='/employee'>Employee Form</Link>
            </li>

          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/employee" element={<Employee/>} />
      </Routes>
      </Router>

      <footer className='bg-secondary text-white fixed-bottom'>
    <div className='container text-center text-white'>
      <small>EmployeeApp &copy; PVShafeeq</small>
    </div>
  </footer>
    </>
  );
}

export default App;
