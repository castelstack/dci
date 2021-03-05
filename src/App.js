import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./container/header/header";
import Footer from "./container/footer/footer";
import { Caro } from "./container/carousel/caro";
import Login from "./container/login-signup/login";
import Signup from "./container/login-signup/signup";
import Htp from "./pages/how-to-play/htp";
import Voting from "./container/vote-count-page/voting";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Contestants } from "./pages/contestants/contestants";
import UserPage from "./pages/vote/user-page";
import ScrollToTop from "../src/container/scroll-up/scrollup";

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Header />
        <div style={{ fontSize: "1.8rem" }}>
          <ToastContainer />
        </div>
        <Switch>
          <Route path='/' exact component={Caro} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/how-to-play' component={Htp} />
          <Route path='/vote' component={Voting} />
          <Route path='/contestants' component={Contestants} />
          <Route path='/user-page' component={UserPage} />
          <Route path='/user-page/:id' component={UserPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
