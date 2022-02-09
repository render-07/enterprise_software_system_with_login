
import './App.scss';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import Qr from './components/imports/Qr'
import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/qr/:value" component={Qr}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
