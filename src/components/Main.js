import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import SearchList from './SearchList/SearchList'
import SearcDetail from './SearchDetail/SearcDetail'


export default class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={SearchList}/>
                    <Route  path='/detail/:video' component={SearcDetail}/>
                </Switch>
            </div>
        )
    }
}
