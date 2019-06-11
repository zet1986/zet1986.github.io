import React from 'react'; // подключение библиотеки React

import Add from './components/Add'
import Menu from './components/Menu'

class App extends React.Component {
  render() {
    return (
      <div className="App">
      {/* <Menu />   */}
      <Add />
      </div>
    );
  }
}
 
export default App;


