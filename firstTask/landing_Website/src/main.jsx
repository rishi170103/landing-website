import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Counter from './count.jsx'
import HandLingInput from './HandlingInput.jsx'
import LiveInput from './task1.jsx'
import HandleSubmit from './task2.jsx'
import ConditionalRendering from'./conditionRender.jsx';
import ShowOrHide from './conditionRender.jsx';
import Student_Marks from './conditionRender.jsx'; 
import Status from './Task3.jsx';
import ShowDetails from './Task4.jsx';
//import UserCard from './props.jsx';
import Map from './map.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Counter />
    <HandLingInput/>
    <br/>
    <LiveInput />
    <br/>.
    <HandleSubmit/>
    <br/>
   {/* <ConditionalRendering/> */}
    <br/>
    <ShowOrHide/> 
    {/*<br/>*/}
   {/* <Student_Marks/> */}
   <br/>
    <Status/>
    <br/>
    <ShowDetails/>
    <br/>
    {/* <UserCard name="Rishi" age={23} email="rishi@example.com" />
    <UserCard name="Alice" age={25} email="alice@example.com" /> */}
    {/* <UserCard name="Anbu" age={26} email="anbu@example.com" />
    <UserCard name="Rishi" age={23} email="rishi@example.com" /> */}
    <Map/>
  </StrictMode>,
)