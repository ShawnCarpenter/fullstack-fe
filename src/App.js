import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link
} from 'react-router-dom';
import ListPage from './ListPage/ListPage.js';
import AddForm from './AddForm/AddForm.js';
import DetailsPage from './DetailsPage/DetailsPage.js';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <h1>Tape Collection</h1>
            </header>    
                <Router>
                    <main>
                    <div className="sidebar">
                    <div><Link to='/add'>Add</Link></div>
                    <div><Link to='/'>List</Link></div>
                    </div>
                    <div className="content">
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/add" 
                            exact
                            render={(routerProps) => <AddForm {...routerProps} />} 
                        />
                        <Route 
                            path="/detail/:id" 
                            exact
                            render={(routerProps) => <DetailsPage {...routerProps} />} 
                        />
                    </Switch>
                    </div>
                    
                    </main>
                    </Router>
            </div>
        )
    }
}