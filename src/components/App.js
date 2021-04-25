import React from 'react'
import Nav from "./Nav"
import Data from "../constants/data.json"
import Pagecontent from './Page/Pagecontent'
const App = () => {
  return (
    <>
   <Nav Name={Data.Name} ProfilePic={Data.ProfilePic}/>
   <Pagecontent Data={Data}/>
   </>
  )
}

export default App
