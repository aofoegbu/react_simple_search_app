import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    search: ''
  }
  handleChange(e){
    this.setState({
      search: e.target.value
    })
  }
  render() {
    const { libraries } = this.props;
    let libData = [];
    const searchKey = this.state.search.trim().toLowerCase();
    if(searchKey && searchKey.length > 0) {
      libData = libraries.filter(i => {
        return i.name.toLowerCase().match(searchKey);
      })
    }
    return (
      <>
        <input type="text" value={this.state.search} onChange={(e) => this.handleChange(e)} />
        <ul>
          {
            libData.map((i, index) => {
            return <li key={index}> <a href={i.url}> {i.name} </a></li>
            })
          }
        </ul>
      </>
    );
  }
  
}

export default App;
