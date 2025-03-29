import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import MainBody from './Components/MainBody'


function App() {

  const [smallcaseData,setSmallCaseData] = useState([])
 
  useEffect(()=>{
    let fetchData = async ()=>{
       try {
        let response = await fetch('/jsonFile/smallcases.json')
        let smallData = await response.json()
        setSmallCaseData(smallData.data)
       } catch (error) {
        console.log('Error Fetching Data')
       }
    }

    fetchData()

  },[])


  return (
    <div>
        <Navbar/>
        <MainBody smallcaseData={smallcaseData}/>
    </div>
  )
}

export default App