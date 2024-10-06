import logo from './logo.svg';
import './App.less'
import { useState } from 'react';
import ButtonOrange from './Modules/Components/Button_orange/ButtonOrange';
import ButtonBlack from './Modules/Components/Button_black/ButtonBlack';
import ToggleButton from './Modules/Components/Toggle_button/ToggleButton';
import Header from './Modules/Components/Header/Header';
import Menu from './Modules/Components/Menu/Menu';
import FormBack from './Modules/Components/FormBack/FormBack';
import InputMail from './Modules/Components/InputMail/InputMail';
import { UPs, Bulit, CheckBox,Burger } from './Modules/Components/Icons/ICONS';
import MainPage from './Modules/Pages/MainPage';

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
      <MainPage/>
      {/* <Header/><br/><br/><br/>
      <ButtonOrange props={props}/><br/>
      <FormBack/> <br/>
      <UPs/> <br/> <Bulit/><br/><CheckBox/><br/><Burger/>
      <ButtonBlack props={props}/><br/>
      <InputMail/><br/>
      <ToggleButton props={props}/><br/>
      <span className='body-text-2'>текст</span>

      <Menu/><br/> */}

    </div>
  );
}

export default App;
