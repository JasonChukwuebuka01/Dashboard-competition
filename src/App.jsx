
import './App.css'
import Dashboard from './Dashboard/Dashboard'
import Nav from './Components/Nav'
import { useContext, useState } from 'react'
import Header from './Dashboard/Header';
import { authContext } from './ContextApi/ContextProvider';



function App() {

  const [navToggle, setNavToggle] = useState(false);
  const { toggleTheme } = useContext(authContext);

  return (
    <div className='wrappered'>
      <Header
        navToggle={navToggle}
        setNavToggle={setNavToggle}
      />
      <div className="containered">

        <div className={`nav-box  ${!toggleTheme ? "darkMode" : ""}`}>
          <Nav navToggle={navToggle} setNavToggle={setNavToggle} />
        </div>

        <div className='dashboard-boxed'>
          <Dashboard navToggle={navToggle} setNavToggle={setNavToggle} />
        </div>

      </div>



    </div>
  )
}

export default App
