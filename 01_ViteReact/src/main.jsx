import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function myName(){
  return(
    <div>
       <h1>Custom App</h1>
    </div>
  )
}

const AnotherUser = "Moye Moye"

const createElement = React.createElement(
 'a',
 {href: 'https://google.com', target: '_blank'},
 'Click me to visit google',
 AnotherUser
)

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)



ReactDOM.createRoot(document.getElementById('root')).render(
  
createElement
  
)
