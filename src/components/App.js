import React from 'react'
import Header from './Header'
import Content from './Content'
import './App.css'

export default function App () {
   return (
      <div className='app-container'>
         <div className='app-inner-container'>
            <Header />
            <Content />
         </div>
      </div>
   )
}

