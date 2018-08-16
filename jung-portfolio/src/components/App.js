import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './layout/Header';
import Home from '../containers/Home';
import Profile from '../containers/Profile';
import Posts from '../containers/Posts';
import Mypage from '../containers/Mypage';

class App extends React.Component {
    render(){
        return (
            <Router>
                <div className='container'>
                    <Header/>
                    <Route exact path="/" component={Home}  />
                    <Route path='/profile' component={Profile} />
                    <Route path='/posts' component={Posts} />
                    {/*<Route path="/login" component={Login} />*/}
                    <Route path="/Mypage" component={Mypage} />
                </div>
            </Router>
        )
    }
}

export default App;