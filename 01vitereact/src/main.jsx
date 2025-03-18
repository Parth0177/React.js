import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from 'react/jsx-runtime'
import App from './App.jsx'
import React from 'react'

//const reactElement = {
  //type:'a',
  //props:{
    //  href:'https://google.com',
      //target:'_blank'
  //},
  //children:'Click me to visit google'
//}

const anotherelement=(
  <a href="https://google.com"target='_blank'>Visit Google</a>
)

const anotheruser="Parth"

const ReactElement = React.createElement(  //type,key,ref,prop
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visit google',
  anotheruser

)

createRoot(document.getElementById('root')).render(
  
      //<App/>
      ReactElement
  
)
