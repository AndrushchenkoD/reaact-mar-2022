import React, {Component} from 'react';
import {Comments, Posts} from "./components";

class App extends Component {
    render() {
        return (
            <div>
              <Posts/>
                <hr></hr>
                <Comments/>
            </div>
        );
    }
}

export default App;

