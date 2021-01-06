import React, { Component } from 'react';
import { Switch,Route,Redirect} from "react-router-dom";
import {Home} from "./Home/"

import List from "./list/List";
import Detail from "./detail/detail"
class App extends Component {
    render() {
        return (
            <Switch>
            <Route path="/home"> <Home></Home></Route>

            <Route path="/list" ><List></List></Route>
            <Route path="/detail/:id" ><Detail></Detail></Route>

            <Redirect from="/" to="/home" ></Redirect>
            {/* 404页面处理 */}
            <Redirect from="*" to="/home"> <Home></Home></Redirect>
            </Switch>
          );       
    }
}

export default App;