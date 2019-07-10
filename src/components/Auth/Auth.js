import React, {Component} from 'react';
import {Connect} from 'react-redux';
import axios from 'axios';

class Auth extends Component {
    constructor() {
        super() 
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange(prop, val) {
        if (val.length < 12) {
            this.setState({[prop]: val})
        }
    }
    login() {

    }
    register() {
        
    }




    render() {
        return (
            <div>
                <div>
                    <h3>Helo</h3>
                    <div>
                        <h3>username:</h3>
                        <input value={this.state.username} onChange={(e) => this.handleChange('username', e.target.value)} />
                    </div>
                    <div>
                        <h3>password:</h3>
                        <input value={this.state.password} onChange={(e) => this.handleChange('password', e.target.value)} />
                    </div>
                    <div>
                        <button onClick={this.login} >Login</button>
                        <button onClick={this.register} >Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;