import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useSelector, useDispatch } from 'react-redux'

const Layout = () => {
  const darkMode = useSelector((state) => state.posts.darkMode)
  return (
    <div className={`min-h-screen ${darkMode}`}>     
      <Header />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      
      <Footer/>
    </div>
  )
}

export default Layout
