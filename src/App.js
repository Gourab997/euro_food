import logo from "./logo.svg";
import "./App.css";

import Home from "./components/Home/Home/Home";
import Header from "./components/shared/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrozenFinger from "./components/Products/FrozenFoods/FrozenFinger/FrozenFinger";
import FrozenVegetables from "./components/Products/FrozenFoods/FrozenVegetables/FrozenVegetables";
import Waterfish from "./components/Products/FrozenFish/Waterfish/Waterfish";
import Seafood from "./components/Products/FrozenFish/Seafish/Seafood";
import Footer from "./components/shared/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/frozenfinger'>
            <FrozenFinger></FrozenFinger>
          </Route>
          <Route path='/frozenvegetables'>
            <FrozenVegetables></FrozenVegetables>
          </Route>
          <Route path='/waterfish'>
            <Waterfish></Waterfish>
          </Route>
          <Route path='/seafood'>
            <Seafood></Seafood>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
