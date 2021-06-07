import React, { Component } from 'react';
import './Forms.css';
import currency from './currency.json';
import Dropdown from 'react-dropdown';
import {Link,BrowserRouter as Router,
    Switch,
    Route,Redirect} from 'react-router-dom';

class Forms extends Component {
    constructor(){
        super();
        var dropdown=[];
        currency.map((value,index)=>{
            dropdown.push(value.country);
        })
        this.state={
            currency:"",
            dropdown:dropdown,
            display:false,
            fname:"",
            lname:"",
            pemail:"",
            pphone:"",
            bname:"",
            bemail:"",
            bphone:"",
            country:"",
            currency:"",
            bankDetails:"",
            accnum:"",
            acctype:"",
            city:"",
            postal:"",
            address:"",
            acountry:""
        }
        this.onDropdownSelect = this.onDropdownSelect.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    personal(){
        document.getElementById("personal").style.display="block";
        document.getElementById("business").style.display="none";
        document.getElementById("personalSpan").style.color="blue"
        document.getElementById("subDivision1").style.color="blue"
    }
    business(){
        document.getElementById("personal").style.display="none";
        document.getElementById("business").style.display="block";
        document.getElementById("businessSpan").style.color="blue"
        document.getElementById("subDivision1").style.color="blue"
        document.getElementById("BankDetails").style.display="none";
    }
    bankDetails(){
        document.getElementById("personal").style.display="none";
        document.getElementById("business").style.display="none";
        document.getElementById("subDivision1").style.color="Green"
        document.getElementById("division").style.display="none";
        document.getElementById("subDivision2").style.color="blue";
        document.getElementById("BankDetails").style.display="block";
        document.getElementById("address").style.display="none";
    }
    address(){
        document.getElementById("subDivision2").style.color="Green"
        document.getElementById("subDivision3").style.color="blue";
        document.getElementById("BankDetails").style.display="none";
        document.getElementById("address").style.display="block";
    }
    onDropdownSelect(e){
        currency.filter((value,index)=>(e.value==value.country)).map((value,index)=>{
                this.setState({currency:value.currency_code,
                country:value.country});
        })
    }

    onSubmitHandler(e){
        var radioValue;
            if(document.getElementById("radioButton1").checked){
                radioValue=document.getElementById("radioButton1").value;
            }
            else if(document.getElementById("radioButton2").checked){
                radioValue=document.getElementById("radioButton2").value;
            }
        this.setState({
            fname:document.getElementById("fname").value, 
            lname:document.getElementById("lname").value, 
            pemail:document.getElementById("pemail").value, 
            pphone:document.getElementById("pphone").value, 
            bname:document.getElementById("bname").value, 
            bemail:document.getElementById("bemail").value, 
            bphone:document.getElementById("bphone").value, 
            country:this.state.country, 
            currency:this.state.currency, 
            accnum:document.getElementById("accnum").value, 
            acctype:document.getElementById("acctype").value, 
            city:document.getElementById("city").value, 
            postal:document.getElementById("postal").value, 
            address:document.getElementById("address1").value, 
            acountry:document.getElementById("acountry").value,
            bankDetails:radioValue,
            display:true
        });
        
    }
    render() {
        return (
            <div class="container">
                {
                        this.state.display&&
                            this.props.display(this.state)
                        
                } 
                {
                        this.state.display&&<Redirect to="/display"/>
                }
                <div class="container1">
                    <div class="header">
                        <div class="subDivision" id="subDivision1">
                            <span class="dot">1</span>
                            <span class="content">Beneficiary</span>
                        </div>
                        <hr></hr>
                        <div class="subDivision" id="subDivision2">
                            <span class="dot">2</span>
                            <span class="content">Bank Details</span>
                        </div>
                        <hr></hr>
                        <div class="subDivision" id="subDivision3">
                            <span class="dot">3</span>
                            <span class="content">Address</span>
                        </div>
                    </div>
                    <div class="division" id="division">
                        <span class="personal" id="personalSpan" onClick={()=>this.personal()}>Personal</span>
                        <span class="business" id="businessSpan" onClick={()=>this.business()}>Business</span>
                    </div>
                    <div id="personal">
                        <div class="form">
                            <p class="grid">
                                <span class="label">First name:</span>
                                <span class="input">
                                    <input type="text" id="fname"></input><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Last name:</span>
                                <span class="input">
                                    <input type="text" id="lname"></input><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Email:</span>
                                <span class="input">
                                    <input type="text" id="pemail"></input><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Phone number:</span>
                                <span class="input">
                                    <input type="text" id="pphone"></input><br></br>
                                </span><br></br>
                            </p>
                            <button onClick={()=>this.business()}>Next</button>
                        </div>
                    </div>
                    <div id="business">
                        <div class="form">
                            <p class="grid">
                                <span class="label">Business name:</span>
                                <span class="input">
                                    <input type="text" id="bname"></input><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Email:</span>
                                <span class="input">
                                    <input type="text" id="bemail"></input><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Phone number:</span>
                                <span class="input">
                                    <input type="text" id="bphone"></input><br></br>
                                </span><br></br>
                            </p>
                            <button onClick={()=>this.bankDetails()}>Next</button>
                        </div>
                    </div>
                    <div id="BankDetails">
                        <div class="form">
                            <p class="grid">
                                <span class="label">Country:</span>
                                <span class="input">
                                <Dropdown options={this.state.dropdown} onChange={this.onDropdownSelect} value={currency[0].country} id="country" placeholder="Select an option" /><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Currency</span>
                                <span class="input">
                                    <input type="text" id="currency" value={this.state.currency}></input><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Bank Details Format:</span>
                                <span class="radio"> 
                                    <div id="radio">
                                        <input type="radio" name="local" id="radioButton1" value="Local Bank Details" />Local Bank Details
                                    </div>
                                    <div id="radio">
                                        <input type="radio" name="swift" id="radioButton2" value="Swift Code" />Swift Code
                                    </div>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Account Number</span>
                                <span class="input">
                                    <input type="text" id="accnum"></input><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Account Type</span>
                                <span class="input">
                                    <input type="text" id="acctype"></input><br></br>
                                </span><br></br>
                            </p>
                            <button onClick={()=>this.business()}>Previous</button>
                            <button onClick={()=>this.address()}>Next</button>
                        </div>
                    </div>
                    <div id="address">
                        <form class="form" onSubmit={()=>this.onSubmitHandler()}>
                            <p class="grid">
                                <span class="label">Country:</span>
                                <span class="input">
                                <input type="text" id="acountry"></input><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">City</span>
                                <span class="input">
                                    <input type="text" id="city"></input><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Postal Code</span>
                                <span class="input">
                                    <input type="text" id="postal"></input><br></br>
                                </span><br></br>
                            </p>
                            <p class="grid">
                                <span class="label">Address</span>
                                <span class="input">
                                    <input type="text" id="address1"></input><br></br>
                                </span><br></br>
                            </p>
                            <button onClick={()=>this.bankDetails()}>Previous</button>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Forms;