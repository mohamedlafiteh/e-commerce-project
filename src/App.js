import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Product from "./components/product/Product";
import ErrorPage from "./components/errorPage/ErrorPage";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={Product} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
