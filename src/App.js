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
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import About from "./components/About/About";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className='App'>
      {loading ? (
        <div className='loader'>
          <PuffLoader
            size={80}
            color={"#123abc"}
            loading={loading}
            speedMultiplier={1.5}
          />
        </div>
      ) : (
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
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
      )}
    </div>
  );
}

export default App;
