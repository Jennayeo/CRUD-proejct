import './App.css';
import QnA from './components/QnA';
import Button from './elements/Button';

// import Carousel from './components/Carousel';

import {Route, Switch} from "react-router-dom";
import Main from './pages/Main';
import AddPost from './pages/AddPost';
import Detail from './pages/Detail';
import { ConnectedRouter } from "connected-react-router"; 

import { history } from "./redux/configStore";


function App() {

  return (
    <div className="App">
      <ConnectedRouter history={history}> 
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/addpost" component={AddPost}/>
          <Route exact path="/addpost/:id" component={AddPost}/>
          <Route exact path="/detail/:id" component={Detail}/>
        </Switch>
      </ConnectedRouter>
      {/* <AddPost /> */}
    </div>
  );
}

export default App;
