import React, { useContext, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdMarkEmailUnread } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FaInfo } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { authContext } from '../ContextApi/ContextProvider'
import { IoMdClose } from "react-icons/io"


const navList = [
    {
        imgUrl: "/images/sideBarImages/icon_01.png",

    },
    {
        imgUrl: "/images/sideBarImages/icon_02.png"

    },

    {
        imgUrl: "/images/sideBarImages/icon_03.png"

    },

    {
        imgUrl: "/images/sideBarImages/icon_04.png"

    },

    {
        imgUrl: "/images/sideBarImages/icon_07.png"

    },
    {
        imgUrl: "/images/sideBarImages/icon_08.png",

    },

];

const navListSecond = [
    {
        imgUrl: "/images/sideBarImages/icon_09.png"

    },
    {
        imgUrl: "/images/sideBarImages/icon_10.png"

    },
    {
        imgUrl: "/images/sideBarImages/icon_11.png",
        Alert: ()=>alert("~Perfect design doesnt exist~ -Sensei ")

    },

];

const Header = ({ navToggle, setNavToggle }) => {

    const [toggleProfileSelectIcon, setToggleProfileSelectIcon] = useState(false);
    const [toggleTopHeaderUI, settoggleTopHeaderUI] = useState(false);
    const { toggleTheme, themeToggle } = useContext(authContext);
    const [headerFixed, setHeaderFixed] = useState(false);


    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setHeaderFixed(true)
        } else {
            setHeaderFixed(false);
        }
    })



    function getDate() {
        const date = new Date();
        const weekDay = date.getDay();
        const day = date.getDate()
        const month = date.getMonth();
        const year = date.getFullYear();
        const daysArr = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
        const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

        return `${daysArr[weekDay]}  ${day} ${monthsArr[month]}, ${year}`
    };

    function handleAlert() {
        alert("~Thank You King David and Geegpay for this awesome opportunity~ -Sensei")
    }

    return (
        <header className={`header-section  ${headerFixed ? "header-fixed fadeInUp" : ""} ${!toggleTheme ? "darkMode" : ""}`}>
            <div className="container">
                {/*********** Header Ui for smaller devices**********************/}
                {
                    toggleTopHeaderUI &&
                    <div className="header-top-content">
                        <form className={`header-top-form  ${!toggleTheme ? "darkMode" : ""}`}>
                            <div className="form-group-top">
                                <CiSearch className='search-top-icon' />
                                <input type="text" name='search' id='search' placeholder='Search...' className='header-top-search-input' />
                            </div>
                        </form>

                        <div className="header-date-profile-top-box">
                            <div className="header-top-date-box">
                                <div className="header-top-date">
                                    <div className="header-top-icon-thumb">
                                        <FaCalendarAlt />
                                    </div>
                                    <h4 className='getdate'>{getDate()}</h4>
                                </div>

                                <div className="header-top-bell">
                                    <FaBell />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {/************End of Header Ui for smaller devices*****************/}



                {/*********** Main Header for larger devices**********************/}
                <div className="header-content">
                    <div className="header-title-icon-box">
                        <div className='logo-image'>
                            <img src="/images/sideBarImages/logo.png" alt="" />
                        </div>
                        <h1 className='header-title'>Dashboard</h1>
                    </div>


                    <div className="header-second-box">
                        <form className={`header-form  ${!toggleTheme ? "darkMode" : ""}`}>
                            <div className="form-group">
                                <CiSearch className='search-icon' />
                                <input type="text" name='search' id='search' placeholder='Search...' className='header-search-input' />
                            </div>
                        </form>

                        <div className="header-date-profile-box">
                            <div className="header-date-box">
                                <div className="header-date">
                                    <div className="header-icon-thumb">
                                        <FaCalendarAlt />
                                    </div>
                                    <h4>{getDate()}</h4>
                                </div>

                                <div className="header-bell">
                                    <FaBell />
                                </div>
                            </div>



                            <div className="header-profile-box">
                                <div className="photo-thumb">
                                    <img src="https://img.freepik.com/premium-vector/men-icon-trendy-avatar-character-cheerful-happy-people-flat-vector-illustration-round-frame-male-portraits-group-team-adorable-guys-isolated-white-background_275421-286.jpg" alt="" className='photo-thumb-image' />
                                </div>
                                <div className="header-profile-name-box">
                                    <h4>Justin Bergson</h4>
                                    <p><span>Justin@gmail.com</span></p>
                                </div>
                                {
                                    toggleProfileSelectIcon ? <IoIosArrowUp className='drop-down-icon' onClick={() => setToggleProfileSelectIcon(!toggleProfileSelectIcon)} />
                                        : <IoIosArrowDown className='drop-down-icon' onClick={() => setToggleProfileSelectIcon(!toggleProfileSelectIcon)} />
                                }
                                <ul className={`md-profile-content ${toggleProfileSelectIcon ? "active" : ""} ${!toggleTheme ? "darkMode" : ""}`}>
                                    <li className='profile-list-item'><CiLogout /> <p onClick={handleAlert}>LogOut</p></li>
                                </ul>
                            </div>

                            <div className="profile-box">
                                <div className="profile-image">
                                    <img src="https://img.freepik.com/premium-vector/men-icon-trendy-avatar-character-cheerful-happy-people-flat-vector-illustration-round-frame-male-portraits-group-team-adorable-guys-isolated-white-background_275421-286.jpg" alt="" className='profile-box-image' />
                                </div>
                                {
                                    toggleProfileSelectIcon ? <IoIosArrowUp className='drop-down-icon' onClick={() => setToggleProfileSelectIcon(!toggleProfileSelectIcon)} />
                                        : <IoIosArrowDown className='drop-down-icon' onClick={() => setToggleProfileSelectIcon(!toggleProfileSelectIcon)} />
                                }
                                <ul className={`profile-content ${toggleProfileSelectIcon ? "active" : ""} ${!toggleTheme ? "darkMode" : ""}`}>
                                    <li className='profile-list-item'><FaPerson /><p>Justin Bergson</p></li>
                                    <li className='profile-list-item'><MdMarkEmailUnread /><p>Justin@gmail</p></li>
                                    <li className='profile-list-item'><CiLogout /> <p onClick={handleAlert}>LogOut</p></li>
                                </ul>

                            </div>

                            <div className="header-top-ui-toggle" onClick={() => settoggleTopHeaderUI(!toggleTopHeaderUI)}>
                                <FaInfo />
                            </div>
                            <div className={` toggle-icon ${navToggle ? "hide" : "show"}`} onClick={() => setNavToggle(true)}>
                                <RxHamburgerMenu />
                            </div>
                            <div className={` toggle-icon close ${!navToggle ? "hide" : "show"}`} onClick={() => setNavToggle(false)}>
                                <IoMdClose />
                            </div>



                        </div>

                    </div>
                </div>

                {/*********** End of Main Header for larger devices**********************/}





                {/*********** Nav Header for medium-smaller devices**********************/}

                <nav className={`nav-header ${navToggle ? "active" : ""}`}>
                    <div className="nav-header-top-group">

                        <div >
                            <img src="/images/sideBarImages/logo.png" alt="" className='nav-header-logo' />
                        </div>
                    </div>


                    <div className="icons-top-bottom-box">
                        <ul className={`nav-header-content-list `}>
                            {
                                navList.map((val, i) => (
                                    <li key={i} className={`${val.className} ${!toggleTheme ? "darkMode" : "lightMode"}`}>

                                        <img src={val.imgUrl} alt="" className='image' />

                                    </li>
                                ))
                            }
                        </ul>

                        <ul className={`nav-header-content-list `}>
                            <li className=' nav-header-theme-toggle-box'>
                                <div>
                                    <div className={`image-thumb  ${toggleTheme ? "darkMode" : "lightMode"}`} onClick={() => themeToggle(true)}>
                                        <MdLightMode />
                                    </div>
                                </div>
                                <div>
                                    <div className={`image-thumb  ${!toggleTheme ? "darkMode" : "lightMode"}`} onClick={() => themeToggle(false)}>
                                        <BsMoonStarsFill />
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div className="nav-header-bottom">
                            <ul className="nav-header-content-list">
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

                {/*********** End of Nav Header for medium-smaller devices**********************/}

            </div>
        </header>
    )
}

export default Header





