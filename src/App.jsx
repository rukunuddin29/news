import React from 'react'
import Header from './Component/Header'
import Body from './Component/Body'
import MyFooter from './Component/MyFooter'
import Pages from './Component/Pages'

function App() {
  return (
 <> <div className='px-6 py-3  gap-16 bg-gray-900  text-white flex flex-col min-h-screen '>
 <Header/>
 <Body/>
 <Pages />
 <MyFooter/>
 </div>
</>
  )
}

export default App