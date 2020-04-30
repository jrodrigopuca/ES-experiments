import React from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Nav from './Nav';
import Auth from './Auth/Auth'
import Callback from './Callback'
import Public from './Public'
import Private from './Private'
import Courses from './Courses';
import Admin from './Admin';
import SecureRoute from './SecureRoute';
import AuthContext from './AuthContext';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      auth:new Auth(this.props.history)
    }
  }

  render(){
    const {auth}=this.state;

    return (
      <AuthContext.Provider value={auth}>
        <Nav auth={auth}/>
        <div className="body">
          <Route path="/" exact render={props => <Home auth={auth} {...props} />}/>
          <Route path="/callback" render={props => <Callback auth={auth} {...props}/>}/>
          <Route path="/public" component={Public} />
          
          <SecureRoute path="/profile" component={Profile} />      
          <SecureRoute path="/private" component={Private} />
          <SecureRoute path="/courses" component={Courses}  scopes={['read:courses']}/>
          <SecureRoute path="/admin" component={Admin} />
          
        </div>
      </AuthContext.Provider>
    );
  }

}

export default App;
