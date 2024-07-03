import React from 'react'
import Navbar from './Compount/Navbar'
import Header from './Compount/Header'
import Popular2 from './Compount/Popular2'
import Popular from './Compount/Popular'


const App = () => {
  return (
    <div className='container-fuild'>
     <Navbar/>
     <Header/>
     <Popular/>
     <Popular2/>
    </div>
  )
}

export default App
