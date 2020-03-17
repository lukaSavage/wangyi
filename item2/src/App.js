import React, {Component} from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import 'antd-mobile/dist/antd-mobile.css';
import Index from './containers/Index';
import Item from './containers/Item';
import Cart from './containers/Cart';
import Topic from './containers/Topic';
import Personal from './containers/Personal';
import Footer from './components/Footer';

export default class App extends Component {
    
    render(){
        return(
            <BrowserRouter>
                <Route path="/index" exact component={Index}></Route>
                <Route path="/item" exact component={Item}></Route>
                <Route path="/cart" exact component={Cart}></Route>
                <Route path="/topic" exact component={Topic}></Route>
                <Route path="/personal" exact component={Personal}></Route>
                <Redirect to="/index"/>
                <Footer />
            </BrowserRouter>
        )
    }
}