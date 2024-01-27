import React, { useContext } from 'react';
import { MdLightMode } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { authContext } from '../ContextApi/ContextProvider';


const navList = [
    {
        imgUrl: "/images/sideBarImages/icon_01.png",
        className: "nav-list"
    },
    {
        imgUrl: "/images/sideBarImages/icon_02.png",
        className: "nav-list"
    },

    {
        imgUrl: "/images/sideBarImages/icon_03.png",
        className: "nav-list"
    },

    {
        imgUrl: "/images/sideBarImages/icon_04.png",
        className: "nav-list"
    },

    {
        imgUrl: "/images/sideBarImages/icon_07.png",
        className: "nav-list"
    },
    {
        imgUrl: "/images/sideBarImages/icon_08.png",
        className: "nav-list"
    },

];

const navListSecond = [
    {
        imgUrl: "/images/sideBarImages/icon_09.png",
        className: "nav-list"
    },
    {
        imgUrl: "/images/sideBarImages/icon_10.png",
        className: "nav-list"
    },
    {
        imgUrl: "/images/sideBarImages/icon_11.png",
        className: "nav-list",
        Alert: ()=>alert("~Perfect design doesnt exist~ -Sensei ")
    },

];

const Nav = ({ navToggle }) => {

    const { toggleTheme, themeToggle } = useContext(authContext);


    return (

        <nav className={`nav-section ${navToggle ? "active" : "disable"}   ${!toggleTheme ? "darkMode" : ""}`}>

            <div className="nav-icon-top-bottom-box">
                <ul className={`nav-content-list `}>
                    {
                        navList.map((val, i) => (
                            <li key={i} className={`${val.className} ${!toggleTheme ? "darkMode" : "lightMode"}`}  >

                                <img src={val.imgUrl} alt="" className='image'  />

                            </li>
                        ))
                    }
                </ul>


                <ul>
                    <li className=' nav-theme-toggle-box'>
                        <div>
                            <div className={`image-thumb  ${toggleTheme ? "darkMode" : ""}`} onClick={() => themeToggle(true)}>
                                <MdLightMode />
                            </div>
                        </div>
                        <div>
                            <div className={`image-thumb  ${!toggleTheme ? "darkMode" : ""}`} onClick={() => themeToggle(false)}>
                                <BsMoonStarsFill />
                            </div>
                        </div>
                    </li>
                </ul>


                <div className="nav-bottom">
                    <ul className="nav-content-list">
                        {
                            navListSecond.map((val, i) => (
                                <li key={i} className={`${val.className} ${!toggleTheme ? "darkMode" : "lightMode"}`} onClick={()=>val.Alert()}>
                                    <img src={val.imgUrl} alt="" className='image' />
                                </li>
                            ))
                        }
                    </ul>

                </div>

            </div>
        </nav>
    )
}

export default Nav





