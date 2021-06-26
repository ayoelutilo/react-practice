import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Header from './Header'

class App extends React.Component {	
  render() {
    return (
      <div className="App">
         <Header />
        <p> Container </p>
        <p> Proof that the react app still updates </p>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
