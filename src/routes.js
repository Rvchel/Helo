import React from 'react';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import {Switch, Route} from 'react-router-dom';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/new' component={Form} />
        <Route path='/post/:id' component={Post} />
    </Switch>
);