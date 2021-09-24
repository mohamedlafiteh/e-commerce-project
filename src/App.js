import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./screen/home/Home";
import Product from "./screen/product/Product";
import ErrorPage from "./components/errorPage/ErrorPage";
import Footer from "./components/footer/Footer";
import Signup from "./screen/signup/Signup";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={Product} />
          <Route path="/signup" component={Signup} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
