import React, {Component} from 'react';
import './Navbar.css';

export default class Navbar extends Component {
    render(){
        return(
            <>
                <div className="nav">
                    <input type="checkbox" id="nav-check"/>
                    <div class="nav-header">
                        <div class="nav-title">
                            <img src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-fundo-transparente13.png?fit=696%2C696&ssl=1" width="40px"></img>
                        </div>
                    </div>
                    <div className="nav-btn">
                        <label for="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    <div className="nav-links">
                        <a href="" target="_blank">Timeline</a>
                        <a href="" target="_blank">Profile</a>
                    </div>
                    <div className="user">
                        <a href="" target="_blank">Karla Alves</a>
                    </div>
                </div>
            </>
        )  
    }
}