import './Navbar';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Ft from './Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewBlogs from './NewBlogs';
import Experiments from './Experiments';
import Test from './test.js';
import Test1 from './testLevel1';
import Blog from './Blog';

function App() {
  // const title = "Welcome to your Adventure"; 
    
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>       
          <Route exact path="/test/test1">
             <Test1 />
          </Route>
          <Route exact path="/test">
             <Test />
          </Route>
              
          <Route exact path="/">
           <Home />
          </Route>
          
          <Route exact path="/newblogs">
            <NewBlogs />
          </Route>
          <Route exact path="/blog/:id">
            <Blog />
          </Route>
          <Route exact path="/experiments">
            <Experiments />
          </Route>
        </Switch> 
        <Ft />         {/* Here Footer is imported as "Ft" so Ft is used here */}
      </div>
    </Router>
  );
}

export default App;
