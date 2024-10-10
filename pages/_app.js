import '../src/index.css'
import '../src/App.less'
import { useState } from 'react';
import Index from '.';

function App() {
const [toggleState, setToggleState] = useState(false);

function test1(){
  setToggleState(!toggleState)
  console.log('клик');
}

  const props = {
    text: 'Текст',
    disable: false,
    func: test1,
    state: toggleState,
  }
  return (
    <div className="App">
      <Index/>
    </div>
  );
}

export default App;