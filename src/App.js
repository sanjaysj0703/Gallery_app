import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CreatePost from './components/createpost';
import ViewPosts from './components/viewpost';
import './navbar.css';

function App() {
  return (
    <Router>
      <h1>GALLERY</h1>
      <div className='main'>
        <nav>
          <ul>
            <li>
              <Link to="/">Create Post</Link>
            </li>
            <li>
              <Link to="/view">View Post</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={CreatePost} />
          <Route path="/view" exact component={ViewPosts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
