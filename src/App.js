import './App.css';
import QnA from './components/QnA';
import Button from './elements/Button';

// import Carousel from './components/Carousel';

import {Route} from "react-router-dom";
import Main from './pages/Main';
import AddPost from './pages/AddPost';
import Detail from './pages/Detail';


function App() {
  
  return (
    <div className="App">
      <Route exact path="/" component={Main}/>
      <Route exact path="/addpost" component={AddPost}/>
      <Route exact path="/detail" component={Detail}/>
      {/* <AddPost /> */}
    </div>
  );
}

export default App;
