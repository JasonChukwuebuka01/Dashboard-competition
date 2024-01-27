import React, { useContext } from 'react'
import { authContext } from '../ContextApi/ContextProvider'

const cardGraphs = [
    {
        logo: "/images/TotalOrderImages/TO_01.png",
        icon: "/images/TotalOrderImages/TO_02.png",
        title: "Total Order",
        amount: "$350",
        rate: "/images/TotalOrderImages/TO_03.png",
        text: "vs. previous month"
    },
    {
        logo: "/images/TotalRefundImages/TR_01.png",
        icon: "/images/TotalRefundImages/TR_02.png",
        title: "Total Refund",
        amount: "$270",
        rate: "/images/TotalRefundImages/TR_03.png",
        text: "vs. previous month"
    },
    {
        logo: "/images/AverageSalesImages/AS_01.png",
        icon: "/images/AverageSalesImages/AS_02.png",
        title: "Average Sales",
        amount: "$1567",
        rate: "/images/AverageSalesImages/AS_03.png",
        text: "vs. previous month"
    },
    {
        logo: "/images/TotalIncomeImages/TI_01.png",
        icon: "/images/TotalIncomeImages/Tl_02.png",
        title: "Total Income",
        amount: "$350.000",
        rate: "/images/TotalIncomeImages/TL_03.png",
        text: "vs. previous month"
    },
]
const GraphCards = () => {

    const {toggleTheme} = useContext(authContext);


    return (
        <div className={`cards-wrapper ${!toggleTheme? "darkMode" : ""}`}>
            {
                cardGraphs.map((val, i) => (
                    <div className={`card  ${!toggleTheme? "darkMode" : ""}`} key={i}>
                        <div className="card-image-group">
                            <div className="logo-box">
                                <img src={val.logo} alt="" />
                            </div>
                            <div className="icon-box">
                                <img src={val.icon} alt="" />
                            </div>
                        </div>

                        <div className="card-content">
                            <h4>{val.title}</h4>
                            <h3 className={`amount  ${!toggleTheme? "darkMode" : "lightMode"}`}>{val.amount}</h3>
                        </div>

                        <div className="card-footer">
                            <div className="card-footer-logo">
                                <img src={val.rate} alt="" />
                            </div>
                            <p className='card-footer-text'>{val.text}</p>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default GraphCards