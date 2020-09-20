import React, { Component } from 'react';
import classNames from 'classnames';

export class AppProfile extends Component {

    constructor() {
        super();
        this.state = {
            expanded: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.setState({expanded: !this.state.expanded});
        event.preventDefault();
    }

    render() {
        return  (
            <div className="layout-profile">
                <div>
                    <img src="https://lh3.googleusercontent.com/proxy/5kRDM0-Fe98_Gghjwsucq9URUV-dazSM2WJW-8m9CLLN0sNvnc52fmofryS-ebSv6r78LljIgEE1gbeOAzRjqXHR4xU1Pq69ooJT3fMKfPoX_lxfIufo" alt="" />
                </div>
                <button className="p-link layout-profile-link" onClick={this.onClick}>
                    <span className="username">Test User</span>
                    <i className="pi pi-fw pi-cog"/>
                </button>
                <ul className={classNames({'layout-profile-expanded': this.state.expanded})}>
                    <li><button className="p-link"><i className="pi pi-fw pi-user"/><span>Account</span></button></li>
                    <li><button className="p-link"><i className="pi pi-fw pi-inbox"/><span>Notifications</span><span className="menuitem-badge">2</span></button></li>
                    <li><button className="p-link"><i className="pi pi-fw pi-power-off"/><span>Logout</span></button></li>
                </ul>
            </div>
        );
    }
}