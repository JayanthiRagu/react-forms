import logo from './logo.svg';
import './App.css';
import Forms from './Component/Forms';
import Display from './Component/Display';
import React from 'react';
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      formData:[]
    }
  }

  display=(data)=>{
    this.setState({formData:data})
  }
  render(){
  return (
    <React.Fragment>
      <Router>
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Forms display={this.display}/>
                </Route>
                <Route path="/display">
                    <Display data={this.state.formData}/>
                </Route>
            </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}
}

export default App;
