import React, { Component } from 'react';

class display extends Component {
    render() {
        return (
            <div class="container">
                <div class="container1">
                <div class="form">
                            <p class="grid">
                                <span class="label">First name:</span>
                                <span class="input">
                                    <label>{this.props.data.fname}</label><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Last name:</span>
                                <span class="input">
                                    <label>{this.props.data.lname}</label><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Email:</span>
                                <span class="input">
                                    <label>{this.props.data.pemail}</label><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Phone number:</span>
                                <span class="input">
                                    <label>{this.props.data.pphone}</label><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Business name:</span>
                                <span class="input">
                                    <label>{this.props.data.bname}</label><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Business Email:</span>
                                <span class="input">
                                    <label>{this.props.data.bemail}</label><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Phone number:</span>
                                <span class="input">
                                    <label>{this.props.data.bphone}</label><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Country:</span>
                                <span class="input">
                                    <label>{this.props.data.country}</label><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Currency:</span>
                                <span class="input">
                                    <label>{this.props.data.currency}</label><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Bank Details:</span>
                                <span class="input">
                                    <label>{this.props.data.bankDetails}</label><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Account number:</span>
                                <span class="input">
                                    <label>{this.props.data.accnum}</label><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Account Type:</span>
                                <span class="input">
                                    <label>{this.props.data.acctype}</label><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">City:</span>
                                <span class="input">
                                    <label>{this.props.data.city}</label><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Postal:</span>
                                <span class="input">
                                    <label>{this.props.data.postal}</label><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Address:</span>
                                <span class="input">
                                    <label>{this.props.data.address}</label><br></br>
                                </span><br></br>
                            </p>
                        </div>
                </div>
            </div>
        );
    }
}

export default display;