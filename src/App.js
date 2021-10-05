//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { useEffect } from 'react';
import Courses from './Components/Courses/Courses';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Services from './Components/Services/Services';
import Exams from './Components/Exams/Exams'
import About from './Components/About/About'
import NotFound from './Components/NotFound/NotFound'
import Footer from './Components/Footer/Footer';
import Second from './Components/Second/Second';

function App() {
  useEffect(() => {
    fetch('./tools.JSON')
      .then(res => res.json())
      .then(data => (data));
  }, [])
  return (
    <div>
      <Header></Header>

      <Router>
        <nav className="navs d-flex justify-content-center ">
          <Link to="/Home">Home</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Exams">Exams</Link>
          <Link to="/About">About</Link>
        </nav>

        <Switch>
          <Route exact path="/">
            <Second></Second>
            <Courses></Courses>
          </Route>
          <Route path="/Home">
            <Second></Second>
            <Courses></Courses>

          </Route>

          <Route path="/Services">
            <Services></Services>
          </Route>
          <Route path="/Exams">
            <Exams></Exams>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
