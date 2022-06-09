import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import List from './List';
import {BrowserRouter,Route} from 'react-router-dom'
import Add from './Add';
import Edit from './Edit';

function App() {
    return (
        <BrowserRouter>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <Navbar/>
                    </div>
                    <Route exact path='/home' component={List}/>
                    <Route exact path='/add' component={Add}/>
                    <Route exact path='/update/:id' component={Edit}/>

                </div>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}
