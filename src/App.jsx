import { Outlet } from 'react-router-dom'
import Header from './utils/Header'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div className='w-full h-full min-h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 text-black dark:text-white'>
      <Header />
      <Outlet />
      <ToastContainer />
      
    </div>
  )
}

export default App
